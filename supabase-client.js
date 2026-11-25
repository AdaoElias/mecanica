(function () {
  'use strict';

  var config = window.MECANICA_SUPABASE_CONFIG || {};
  var url = String(config.url || '').trim().replace(/\/+$/, '');
  var anonKey = String(config.anonKey || '').trim();
  var table = String(config.table || 'mecanica_progress').trim() || 'mecanica_progress';
  var redirectTo = String(config.redirectTo || '').trim() || (window.location.origin + window.location.pathname);
  var client = null;
  var user = null;
  var listeners = [];
  var initPromise = null;

  function configured() {
    return !!(url && anonKey && /^https:\/\//i.test(url) && window.supabase && window.supabase.createClient);
  }

  function getClient() {
    if (!client && configured()) {
      client = window.supabase.createClient(url, anonKey, {
        auth: {
          detectSessionInUrl: true,
          persistSession: true,
          autoRefreshToken: true
        }
      });
    }
    return client;
  }

  function notify() {
    for (var i = 0; i < listeners.length; i += 1) {
      try {
        listeners[i](user);
      } catch (err) {
        window.setTimeout(function () { throw err; }, 0);
      }
    }
  }

  function requireClient() {
    var supabase = getClient();
    if (!supabase) throw new Error('Supabase não configurado. Preencha supabase-config.js.');
    return supabase;
  }

  function requireUser() {
    if (!user) throw new Error('Entre na conta para sincronizar o progresso.');
    return user;
  }

  function init() {
    var supabase = getClient();
    if (!supabase) return Promise.resolve(false);
    supabase.auth.onAuthStateChange(function (event, session) {
      user = session && session.user ? session.user : null;
      notify();
    });
    return supabase.auth.getUser().then(function (result) {
      user = result && result.data && result.data.user ? result.data.user : null;
      return true;
    }).catch(function () {
      user = null;
      return false;
    });
  }

  function session() {
    return initPromise.then(function () { return user; });
  }

  function signInWithOAuth(provider) {
    var name = String(provider || '').toLowerCase();
    if (name !== 'google' && name !== 'github') throw new Error('Provedor não suportado.');
    return requireClient().auth.signInWithOAuth({
      provider: name,
      options: { redirectTo: redirectTo }
    });
  }

  function signInWithEmail(email, password) {
    return requireClient().auth.signInWithPassword({ email: email, password: password }).then(function (result) {
      if (result.error) throw result.error;
      user = result.data && result.data.user ? result.data.user : user;
      return result.data;
    });
  }

  function signUp(email, password) {
    return requireClient().auth.signUp({ email: email, password: password }).then(function (result) {
      if (result.error) throw result.error;
      if (result.data && result.data.session) user = result.data.user;
      return result.data;
    });
  }

  function signOut() {
    return requireClient().auth.signOut().then(function (result) {
      if (result && result.error) throw result.error;
      user = null;
      notify();
      return true;
    });
  }

  function pull() {
    var currentUser = requireUser();
    return requireClient().from(table)
      .select('checks,quiz,notes,tab')
      .eq('user_id', currentUser.id)
      .maybeSingle()
      .then(function (result) {
        if (result.error) throw result.error;
        if (!result.data) return null;
        return {
          checks: result.data.checks || {},
          quiz: result.data.quiz || {},
          notes: result.data.notes || {},
          tab: result.data.tab || 'aula-1'
        };
      });
  }

  function push(progress) {
    var currentUser = requireUser();
    var data = progress || {};
    return requireClient().from(table).upsert({
      user_id: currentUser.id,
      checks: data.checks || {},
      quiz: data.quiz || {},
      notes: data.notes || {},
      tab: data.tab || 'aula-1',
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' }).then(function (result) {
      if (result.error) throw result.error;
      return true;
    });
  }

  window.MecanicaSupabase = {
    isConfigured: configured,
    onAuthChange: function (callback) {
      if (typeof callback === 'function') listeners.push(callback);
    },
    session: session,
    getUser: function () { return user; },
    signInWithOAuth: signInWithOAuth,
    signInWithEmail: signInWithEmail,
    signUp: signUp,
    signOut: signOut,
    pull: pull,
    push: push
  };

  initPromise = init();
})();
