# Publicação e autenticação

## 1. Banco e RLS

1. Crie um projeto no Supabase.
2. Abra **SQL Editor** e execute todo o conteúdo de `schema.sql`.
3. A tabela `public.mecanica_progress` fica com RLS ativo: cada usuário só lê, insere, atualiza e apaga a própria linha.

## 2. Provedores de login

1. Em **Authentication → Providers**, ative **Google** e **GitHub**.
2. Crie um OAuth App no GitHub:
   - **Homepage URL**: `https://<usuario>.github.io/<repositorio>/`
   - **Authorization callback URL**: `https://<project-ref>.supabase.co/auth/v1/callback`
3. Crie credenciais no Google Cloud:
   - **Authorized redirect URI**: `https://<project-ref>.supabase.co/auth/v1/callback`
4. Copie client ID e client secret para os campos correspondentes no Supabase.
5. Em **Authentication → URL Configuration**:
   - **Site URL**: `https://<usuario>.github.io/<repositorio>/`
   - **Redirect URLs**: inclua `https://<usuario>.github.io/<repositorio>/` e `http://localhost:8000/`
6. Para e-mail e senha com confirmação, configure um SMTP próprio em **Project Settings → Auth Settings → SMTP Settings**. Sem SMTP, desative **Confirm email** apenas se aceitar reduzir a segurança.

## 3. Configuração do site

Edite `supabase-config.js`:

```js
window.MECANICA_SUPABASE_CONFIG = {
  url: 'https://<project-ref>.supabase.co',
  anonKey: '<anon-public-key>',
  table: 'mecanica_progress',
  redirectTo: ''
};
```

Use apenas a **anon key**. Nunca publique a **service_role key**.

Com a configuração preenchida, a janela de login aparece ao abrir o site. **Continuar sem entrar** libera a navegação apenas na sessão atual. Sem configuração, o site continua funcionando offline e o progresso fica só no `localStorage`.

## 4. Publicar

1. Envie para o repositório: `index.html`, `supabase-config.js`, `supabase-client.js`, `schema.sql` e `Apostila_Consolidada_Mecanica_Automotiva.md`.
2. No GitHub, abra **Settings → Pages**.
3. Selecione **Deploy from a branch**, branch `main`, pasta `/root`.
4. Acesse `https://<usuario>.github.io/<repositorio>/`.

## 5. Teste local

```powershell
python -m http.server 8000
```

Abra `http://localhost:8000/`, entre com Google ou GitHub e confira:

- o nome do usuário aparece no botão do topo;
- responder uma questão ou marcar um checklist atualiza o banco em até 700 ms;
- recarregar a página mantém a aula atual, notas, quizzes e checklists;
- **Sair da conta** volta ao estado local.

O carregamento da apostila usa `fetch`, então abrir `index.html` diretamente com `file://` não funciona.

## 6. Sincronização

Ao entrar, se já existir progresso no banco, ele substitui o progresso local. Se não existir, o progresso local é enviado. Notas vazias removem a nota correspondente.
