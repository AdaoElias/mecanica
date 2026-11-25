# Memória da sessão — Mecânica na Veia

Este arquivo registra, em ordem cronológica, as solicitações feitas, as respostas dadas, as soluções aplicadas e os erros encontrados durante a sessão de trabalho no projeto `C:\Users\Adao_Elias\Desktop\mecanica`.

O objetivo é que outra pessoa consiga entender o que foi decidido, o que foi implementado, o que foi validado e o que ainda depende de ação externa.

---

## 1. Contexto herdado no início da sessão

Antes das interações registradas abaixo, já existia um resumo do trabalho anterior. Esse resumo foi a base da continuidade.

### 1.1 Objetivo geral do projeto

- Transformar `ApostilaConsolidada.docx` em um curso online em formato de trilha.
- Usar `modelo.html` como referência visual e funcional.
- Primeira entrega: site estático para GitHub Pages, com 12 aulas e sem login.
- Autenticação e banco de dados ficariam para a “última etapa”.

### 1.2 Decisões aprovadas pelo usuário

- Aprovação literal: **“Aprovar: Supabase + 12 aulas (Recomendado)”**.
- Aprovação literal: **“Sem gate até a última etapa (Recomendado)”**.
- Divisão aprovada: **3 módulos de 4 aulas**.
- O Capítulo 10 foi dividido; o Capítulo 11 **não** foi dividido:
  - Aula 1: Introdução + Capítulo 1
  - Aulas 2 a 9: Capítulos 2 a 9
  - Aula 10: Capítulo 10, §§10.1–10.3
  - Aula 11: Capítulo 10, §§10.4–10.6
  - Aula 12: Capítulo 11 + glossário, considerações finais, correções, curadoria, melhorias e gabarito
- GitHub Pages: site estático, gratuito e HTTPS; repositório público.
- Supabase Free aprovado.
- OAuth GitHub e Google como prioridade.
- E-mail e senha apenas com SMTP próprio.
- Firebase Spark e Neon/Postgres foram preteridos.

### 1.3 Arquivos e conteúdo-base hereditários

- Fonte oficial: `C:\Users\Adao_Elias\Desktop\mecanica\ApostilaConsolidada.docx`.
- Fontes originais:
  - `Mecânica de automóveis apostila completa - funcionamento dos motores - Português.docx`
  - `Apostila_Mecanica_Automotiva_Basica-v3.docx`
  - `Apostila-mecanica-de-automoveis-pronta-1.docx`
- Referência visual: `C:\Users\Adao_Elias\Desktop\mecanica\modelo.html`.
- Material consolidado: `C:\Users\Adao_Elias\Desktop\mecanica\Apostila_Consolidada_Mecanica_Automotiva.md`.
- O `.md` consolidado tinha cerca de 1374 linhas, 11 capítulos, 33 questões, 6 apêndices, 6 figuras descritivas e 29 tabelas.
- Correções técnicas preservadas no `.md`, nas linhas 1204–1222.
- O resumo inicial afirmava que um DOCX consolidado e um PDF de teste de 47 páginas haviam sido gerados. Porém, durante a sessão atual, **não foram localizados arquivos `.pdf` nem um DOCX consolidado com o nome `Apostila_Consolidada_Mecanica_Automotiva.docx` na pasta**. O que existe na pasta são os DOCX originais e o `.md` consolidado.

### 1.4 Estado do `modelo.html` no resumo inicial

- Gate de login em `modelo.html:1638–1645`.
- Supabase UMD em `modelo.html:1646`.
- `supabase-client.js` em `modelo.html:1647`.
- Configuração `PANELS` em `modelo.html:1652`.
- Configuração `META` em `modelo.html:1653`.

### 1.5 Site já implementado no resumo inicial

`index.html` já tinha sido criado como arquivo self-contained com:

- HTML, CSS e JavaScript embutidos.
- Tema “Mecânica na Veia”.
- 12 abas/painéis.
- 3 módulos de 4 aulas.
- Rail de progresso e medidores mobile.
- Busca, índice, ajuda, toast e impressão.
- Parser Markdown embutido.
- Quizzes gerados do gabarito.
- Checklists gerados dos resumos.
- Notas locais por aula.
- Chaves `localStorage`:
  - `mecanica:apostila-md`
  - `mecanica:checks`
  - `mecanica:quiz`
  - `mecanica:note:<key>`
  - `mecanica:tab`
- `fetch('Apostila_Consolidada_Mecanica_Automotiva.md', { cache: 'force-cache' })`.
- Hook `var DB = window.MecanicaSupabase || null;`.
- Nenhum script Supabase carregado nesse estágio.

### 1.6 Validações já feitas no resumo inicial

- `JS OK`.
- `SECTIONS OK 18`.
- `questions 33 answers 33`.
- Edge headless:
  - `panels 12`
  - `tabs 12`
  - `quizItems 35`
  - `checks 63`
  - `chapters 19`
  - `errorRender false`
  - `loading false`
  - `activeHidden false`
- Teste CDP:
  - `cachedChars 62237`
  - troca para `aula-3`
  - quiz respondido
  - checklist marcado
  - busca por `ABS` com 5 resultados
  - diálogo fecha corretamente
- Screenshot mobile gerado.

---

## 2. Cronologia das interações

### Interação 1 — Pedido de resumo

**Solicitação do usuário**

> What did we do so far?

**Resposta dada**

Foi entregue um resumo estruturado com:

- Objetivo do projeto.
- Detalhes importantes.
- Estado de trabalho em `Completed`, `Active` e `Blocked`.
- Próximos passos.
- Arquivos relevantes.

**Soluções/registros**

- Foi registrado que a primeira entrega do site estava pronta.
- Foi registrado que faltava a etapa final de Supabase/RLS/OAuth e publicação.
- Foi registrado que `supabase-client.js` ainda não existia.

---

### Interação 2 — Usuário pediu para continuar

**Solicitação do usuário**

> Continue if you have next steps, or stop and ask for clarification if you are unsure how to proceed.

**Resposta dada**

Foi decidido seguir com os próximos passos, sem pedir esclarecimento, porque o plano já estava aprovado.

**Ações/soluções aplicadas**

- A lista de tarefas foi atualizada.
- Os itens concluídos foram marcados:
  - preparar estrutura do site;
  - mapear conteúdo em 12 aulas;
  - implementar quizzes, checklists, notas e busca;
  - validar navegação, responsividade e funcionamento offline.
- Os itens pendentes continuaram sendo:
  - preparar `supabase-client.js`, schema e RLS;
  - documentar publicação no GitHub Pages.

**Resultado**

- Foi dito ao usuário que `index.html:1` estava criado, com 12 aulas, 35 questões, 63 checks e cache local do Markdown.
- Foi dito que o próximo passo era a etapa final: Supabase/RLS/OAuth e publicação.

---

### Interação 3 — Usuário disse “prossiga”

**Solicitação do usuário**

> prossiga

**Resposta dada**

Foi iniciada a implementação da etapa final de autenticação e documentação de publicação.

**Ações/soluções aplicadas**

#### 3.1 `supabase-config.js`

Arquivo criado em:

`C:\Users\Adao_Elias\Desktop\mecanica\supabase-config.js`

Conteúdo inicial, deixado com placeholders vazios:

```js
window.MECANICA_SUPABASE_CONFIG = {
  url: '',
  anonKey: '',
  table: 'mecanica_progress',
  redirectTo: ''
};
```

Decisão importante:

- Nenhuma credencial real foi colocada.
- Nenhuma chave `service_role` foi usada.
- O comportamento padrão sem configuração é manter o site aberto, com progresso apenas no `localStorage`.

#### 3.2 `supabase-client.js`

Arquivo criado em:

`C:\Users\Adao_Elias\Desktop\mecanica\supabase-client.js`

API exposta em `window.MecanicaSupabase`:

- `isConfigured()`
- `onAuthChange(callback)`
- `session()`
- `getUser()`
- `signInWithOAuth(provider)`
- `signInWithEmail(email, password)`
- `signUp(email, password)`
- `signOut()`
- `pull()`
- `push(progress)`

Características:

- Usa `window.supabase.createClient`.
- Usa `auth.detectSessionInUrl`, `persistSession` e `autoRefreshToken`.
- Validate provider: apenas `google` e `github`.
- `redirectTo` padrão: `window.location.origin + window.location.pathname`.
- `pull()` lê `checks`, `quiz`, `notes` e `tab` da tabela `mecanica_progress`.
- `push()` faz `upsert` com `onConflict: 'user_id'`.
- Se não configurado, todas as operações de banco falham com mensagem clara ou o gate não aparece.

#### 3.3 `schema.sql`

Arquivo criado em:

`C:\Users\Adao_Elias\Desktop\mecanica\schema.sql`

Conteúdo:

- Tabela `public.mecanica_progress`.
- `user_id uuid primary key references auth.users (id) on delete cascade`.
- Colunas:
  - `checks jsonb`
  - `quiz jsonb`
  - `notes jsonb`
  - `tab text`
  - `updated_at timestamptz`
- RLS habilitado.
- Policies para o próprio usuário:
  - select
  - insert
  - update
  - delete
- `grant` para `authenticated`.
- `revoke all` de `anon`.
- Trigger `mecanica_progress_touch` para atualizar `updated_at`.

#### 3.4 Integração no `index.html`

Foram adicionados:

- Scripts:
  - `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js`
  - `supabase-config.js`
  - `supabase-client.js`
- Janela de login em `index.html:126`.
- Botão de conta atualizado com `accountName` e `accountHint`.
- CSS para:
  - `.auth-social`
  - `.auth-alt`
  - `.field`
  - `.auth-msg`
- Funções no JavaScript embutido:
  - `authMessage()`
  - `collectProgress()`
  - `applyProgress()`
  - `scheduleCloudPush()`
  - `updateAuthUI()`
  - `handleAuth()`
  - `emailAuth()`
  - `signUpWithEmail()`
- `storeSet()` passou a disparar sincronização cloud quando há usuário logado.
- Sincronização com debounce de 700 ms.
- Ao entrar:
  - se houver progresso remoto, ele substitui o local;
  - se não houver, o progresso local é enviado.
- `Continuar sem entrar` libera a navegação somente na sessão atual.
- Sem configuração, o botão de conta mostra aviso de configuração pendente.

#### 3.5 `PUBLICAR.md`

Arquivo criado em:

`C:\Users\Adao_Elias\Desktop\mecanica\PUBLICAR.md`

Conteúdo:

- Como executar `schema.sql`.
- Como ativar Google e GitHub no Supabase.
- Callbacks:
  - `https://<project-ref>.supabase.co/auth/v1/callback`
- URL Configuration:
  - `https://<usuario>.github.io/<repositorio>/`
  - `http://localhost:8000/`
- Como preencher `supabase-config.js`.
- Aviso para não publicar `service_role key`.
- Como publicar no GitHub Pages: branch `main`, pasta `/root`.
- Como testar localmente com `python -m http.server 8000`.
- Observações sobre sincronização e `file://`.

#### 3.6 Validações da etapa Supabase

Validação estática:

```text
INLINE JS OK
CLIENT JS OK
CONFIG JS OK
AUTH IDS OK
SCRIPT TAGS OK
```

Teste no Edge com configuração vazia:

```text
panels 12
quizItems 35
checks 63
authConfigured false
authDialogOpen false
accountHint configuração pendente
toastText Configure o Supabase para habilitar o login.
activeAfterTab aula-3
clientExceptions 0
```

Teste unitário do cliente com Supabase simulado:

```text
configured true
initialSession null
signedUser teste@example.com
pulledTab aula-2
pulledCheck true
pullRejectedAfterLogout true
```

Teste no Edge com configuração simulada:

```text
authConfigured true
authDialogOpen true
accountHint sincronizar progresso
panels 12
signedIn aluno@example.com
dialogClosedAfterLogin true
signedOutHint sincronizar progresso
exceptions 0
```

Após o teste, `supabase-config.js` foi restaurado para placeholders vazios.

**Resultado**

Etapa final de auth implementada e validada. Publicação externa ainda não executada.

---

### Interação 4 — Usuário perguntou se já podia testar navegação e funcionalidades

**Solicitação do usuário**

> eu ja consigo testar a navegação e funcionalidades

**Resposta dada**

Foi respondido que sim:

- Rodar `python -m http.server 8000` na pasta `mecanica`.
- Abrir `http://localhost:8000/`.
- Testar 12 aulas, abas, busca/índice, atalhos, quizzes, checklists, notas e progresso local.
- Não usar `file://`.
- Login só aparece após preencher `supabase-config.js`.

**Soluções/registros**

- Foi reforçado que o site já estava funcional localmente.
- Foi reforçado que o gate depende de configuração Supabase.

---

### Interação 5 — Usuário pediu para remover citações das fontes do site

**Solicitação do usuário**

> desculpe, no site não quero que cite as fontes.
> Elas devem ficar apena nos PDF. e doc

**Resposta dada**

Foi dito que as citações seriam removidas apenas do site, preservando `.md`, DOCX e PDF.

**Ações/soluções aplicadas**

#### 5.1 Diagnóstico

Foram localizadas citações em duas origens:

1. Strings rígidas dentro de `LESSONS`, renderizadas como:
   - subtítulo do cabeçalho de capítulo;
   - bloco `.source` no fim do painel.
2. Conteúdo Markdown carregado da apostila:
   - marcadores `[A]`, `[B]`, `[C]`;
   - seção `## Fontes originais`;
   - seção `# Relatório de curadoria`;
   - coluna `Origem do problema` na tabela de correções;
   - frases como “citado na fonte”, “a fonte dizia” e “fontes originais”.

#### 5.2 Solução aplicada

Foi criada a função `sanitizeForSite(md)` em `index.html:293`.

Ela atua **somente em memória**, durante o carregamento do site:

- remove a linha “Como citar as fontes nesta apostila”;
- remove a subseção “Por que esta apostila existe” do site;
- renomeia “Considerações finais e fontes originais” para “Considerações finais”;
- remove a seção `Fontes originais`;
- remove a seção `Relatório de curadoria`;
- remove a coluna `Origem do problema` da tabela de correções;
- remove `[A]`, `[B]` e `[C]`;
- substitui linguagem de origem por termos neutros;
- preserva o conteúdo técnico e as correções.

`boot()` passou a usar:

```js
D = parseDocument(sanitizeForSite(md));
```

em `index.html:1206`.

#### 5.3 Ajustes adicionais

- `source:` foi removido de todas as entradas de `LESSONS`.
- Renderização de `lesson.source` foi removida do cabeçalho de capítulo e do rodapé do painel.
- `curadoria` foi removida de:
  - `SECTIONS`;
  - `PART_TITLES`;
  - `parts` da Aula 12.
- `fins` passou a se chamar apenas “Considerações finais”.
- A Aula 12 passou a ter partes:
  - `cap11`
  - `glossario`
  - `fins`
  - `correcoes`
  - `melhorias`
  - `gabarito`

#### 5.4 Validação

Teste no Edge:

```text
panels 12
chapters 18
quizItems 35
checks 63
sourceBoxes 1
sourceMentions {"tags":0,"fonte":0,"origem":0,"curadoria":0,"arquivosOriginais":0}
exceptions 0
```

Observação sobre `sourceBoxes 1`:

- é apenas a caixa `.source` da ajuda, que fala sobre quizzes, checklists e sincronização;
- não cita fontes.

**Resultado**

- Site sem citações de fontes.
- `.md` consolidado não foi alterado.
- DOCX originais não foram alterados.
- Não foi localizado PDF consolidado na pasta.

---

### Interação 6 — Usuário perguntou sobre acesso externo via GitHub

**Solicitação do usuário**

> eu já posso acessar por rede externa? Tipo usando o github?

**Resposta dada**

Foi respondido que ainda não:

- o site estava pronto, mas funcionando apenas em servidor local;
- era necessário publicar em repositório público no GitHub Pages;
- era necessário enviar os arquivos do site;
- em `Settings → Pages`, usar branch `main` e pasta `/root`;
- URL final: `https://<usuario>.github.io/<repo>/`;
- para login, preencher `supabase-config.js` e cadastrar essa URL nos Redirect URLs do Supabase;
-_passo a passo estava em `PUBLICAR.md`.

**Soluções/registros**

- Nenhuma publicação foi executada.
- Nenhum commit foi feito.
- Nenhum repositório foi criado.

---

### Interação 7 — Usuário pediu animação do ciclo Otto com contexto

**Solicitação do usuário**

> voce consegue criar uma animação para representar o ciclo otto.
> O curso é sobre mecanica a animação ficou sem contexto.

**Resposta dada**

Foi dito que a animação genérica seria trocada por uma visualização didática do ciclo Otto em 4 tempos, com válvulas, pistão, virabrequim, centelha e legenda.

**Ações/soluções aplicadas**

#### 7.1 Animação antiga

A animação anterior era decorativa:

- SVG com órbitas e nós.
- Textos como `MOTOR`, `ADMISSÃO`, `ESCAPE`, `ELÉTRICA`, `DIAGNÓSTICO`.
- Não representava o funcionamento real do motor.
- Tinha `aria-hidden='true'`.

#### 7.2 Nova animação

Arquivo alterado: `index.html`.

Novo SVG em `index.html:103`:

- `id='ottoSvg'`.
- viewBox `0 0 560 430`.
- Bloco do cilindro.
- Câmara de gás com cor variável por fase.
- Vela de ignição.
- Válvula de admissão.
- Válvula de escape.
- Fluxo de mistura e fluxo de gases.
- Pistão.
- Biela.
- Virabrequim.
- Texto `VIRABREQUIM · 720° = 2 GIROS`.

Legenda em `index.html:126`:

- `1 · Admissão` — `0°–180° · mistura entra`
- `2 · Compressão` — `180°–360° · mistura comprimida`
- `3 · Combustão` — `360°–540° · centelha e expansão`
- `4 · Escape` — `540°–720° · gases saem`

JavaScript em `index.html:1218`:

- `startOttoAnimation()`.
- Animação baseada em `requestAnimationFrame`.
- Ciclo de 8000 ms.
- Quatro fases de 2000 ms.
- Cinemática slider-crank:
  - raiz quadrada protegida com `Math.max(0, ...)`;
  - pistão calculado por deslocamento real aproximado;
  - biela ligada ao pino do pistão e ao pino do virabrequim.
- Cores da câmara por fase.
- Abertura das válvulas por fase.
- Centelha nos primeiros 260 ms da combustão.
- Respeito a `prefers-reduced-motion`.
- Chamada em `index.html:1334`.

CSS atualizado:

- `.otto-head`
- `.otto-kicker`
- `.otto-phase`
- `.otto-svg`
- `.otto-block`
- `.otto-piston`
- `.otto-rod`
- `.otto-crank`
- `.otto-valve`
- `.otto-flow`
- `.otto-spark`
- `.otto-legend`
- `.otto-caption`

Acessibilidade:

- `hero-visual` deixou de ser `aria-hidden='true'`.
- Passou a ter:
  - `role='img'`
  - `aria-label='Animação didática do ciclo Otto em quatro tempos: admissão, compressão, combustão e escape'`

#### 7.3 Validação

Teste no Edge:

```text
hasSvg true
heroContext Ciclo Otto · 4 tempos / 1 · Admissão
ariaLabel Animação didática do ciclo Otto em quatro tempos: admissão, compressão, combustão e escape
legendItems 4
viewport 492x752
svgBox 437x300
heroBox 449x483
horizontalOverflow 22
phasesSeen ["1 · Admissão","2 · Compressão","3 · Combustão","4 · Escape"]
pistonRange 132.1..223.9
crankRange 234.5..326.0
valveStates ["translate(0 9)|translate(0 0)","translate(0 0)|translate(0 0)","translate(0 0)|translate(0 9)"]
sparkSeen true
panels 12
exceptions 0
screenshot saved
```

Sobre `horizontalOverflow 22`:

- foi investigado;
- elementos apontados foram `.blob`, `.grain` e abas `.tab`;
- não foi causado pela animação;
- `.blob` e `.grain` são decorativos dentro de contêiner com `overflow:hidden`;
- as abas fazem parte de navegação horizontal.

**Resultado**

- Animação contextual criada e validada por DOM.
- Captura de tela foi salva em:
  - `C:\Users\Adao_E~1\AppData\Local\Temp\opencode\otto-mobile.png`
- O modelo assistente não consegue ler imagem, então a validação visual foi feita por medições e estado do DOM, não por inspeção da imagem.

---

### Interação 8 — Pedido atual: criar `memoria.md`

**Solicitação do usuário**

> Crie um arquivo chamado memoria.md
> O que esse arquivo deve conter?
> Enumere e guarde toda interação que foi feita nessa sessão...
> as solicitações, as respostas e principalmente as soluções.
> Todos os erros devem ser pontuados também, preferivelmente numa areas a parte bem no final.
>
> Eu preciso que todas as informações pertinentes sejam salvas, de maneira que se outra pessoa for ler o arquivo possa entender tudo que ocorreu.

**Resposta dada**

Este arquivo foi criado para atender exatamente ao pedido:

- interações enumeradas;
- solicitações registradas;
- respostas registradas;
- soluções explicadas;
- erros separados no final.

**Solução aplicada**

Criação de:

`C:\Users\Adao_Elias\Desktop\mecanica\memoria.md`

---

### Interação 9 — Usuário pediu commit e push

**Solicitação do usuário**

> https://github.com/AdaoElias/mecanica
> faz o commit e push por favaor

**Resposta dada**

Foi verificado que a pasta ainda não era repositório Git; `gh` não estava instalado. Foi inicializado o Git localmente e o remote informado foi adicionado.

**Ações/soluções aplicadas**

- `git rev-parse --is-inside-work-tree` retornou `fatal: not a git repository`.
- `gh auth status` e `gh repo view` falharam porque `gh` não está instalado.
- `git config --global user.name` retornou `AdaoElias`.
- `git config --global user.email` retornou `adaoelias@gmail.com`.
- `git init -b main` criou o repositório local.
- `git remote add origin https://github.com/AdaoElias/mecanica.git` adicionou o remote.
- Foi criado `.gitignore` com:
  - `~$*`
  - `.DS_Store`
  - `Thumbs.db`
- Foram verificados possíveis segredos em `*.js`, `*.html`, `*.md` e `*.sql`; nenhuma chave real `service_role` ou anon key real foi encontrada.
- `git add -A` adicionou 13 arquivos, ignorando o arquivo temporário do Word.
- `git commit -m "Initial commit: site Mecanica na Veia com 12 aulas"` criou o commit `d9aaeec`.
- `git push -u origin main` enviou com sucesso:
  - `* [new branch] main -> main`
  - `branch 'main' set up to track 'origin/main'.`
- `git status --short --branch` retornou `## main...origin/main`.

**Resultado**

Repo publicado em `https://github.com/AdaoElias/mecanica` com branch `main` sincronizada.

---

### Interação 10 — Usuário perguntou como disponibilizar na web

**Solicitação do usuário**

> e agora como faço para diponibilizar para fica na web?

**Resposta dada**

Foram passadas as instruções de ativação do GitHub Pages:

1. Abrir **Settings → Pages** no repo `AdaoElias/mecanica`.
2. Escolher **Deploy from a branch**.
3. Selecionar branch `main` e pasta `/(root)`.
4. Salvar e aguardar 1–3 minutos.
5. Acessar `https://adaoelias.github.io/mecanica/`.

Também foi dito que, para login, `supabase-config.js` deve ser preenchido, commitado e a URL do Pages cadastrada nos Redirect URLs do Supabase.

**Resultado**

O GitHub Pages foi ativado pelo usuário e a URL passou a responder.

---

### Interação 11 — Usuário relatou que a Aula 1 não aparecia

**Solicitação do usuário**

> verifica pra mim. parace que não está aparecendo a aula 1

**Resposta dada**

Foi verificado que a Aula 1 estava carregada corretamente, mas o botão “Começar pela Aula 1” rolava a página apenas até o topo de `<main>`, deixando o painel da aula cerca de 1200 px abaixo do topo visível.

**Diagnóstico**

Teste na URL publicada com Edge headless isolado:

```text
url https://adaoelias.github.io/mecanica/#aula-1
panels 12
activePanel null
stackText AULA 1 · INTRODUÇÃO + CAPÍTULO 1...
mdFetch 200  ok=true
cacheLength 62237
savedTab "aula-1"
chapters 18
quizItems 35
checks 63
exceptions 0
```

Teste de geometria na URL publicada:

```text
initial {"visiblePanel":"aula-1","panelTop":1362,"introTop":1362,"topbarHeight":111,"scrollY":0,"mainTop":127,"aula1ChapterIds":["intro","cap1"]}
afterClick {"visiblePanel":"aula-1","panelTop":1235,"introTop":1235,"topbarHeight":111,"scrollY":127,"mainTop":0,"aula1ChapterIds":["intro","cap1"]}
```

Conclusão:

- `visiblePanel` era `aula-1`;
- o conteúdo existia;
- o problema era o alvo do scroll, não o carregamento da apostila;
- os painéis tinham id `panel-aula-1`, enquanto os hashes e links usavam `#aula-1`;
- o botão chamava `document.getElementById('main').scrollIntoView(...)`, parando no topo do `<main>`, antes do hero e da animação.

**Ações/soluções aplicadas em `index.html`**

- Tab `aria-controls` mudou de `panel-<key>` para `<key>`.
- Painel gerado mudou de `id="panel-<key>"` para `id="<key>"`.
- Foi adicionado:
  - `#main,.panel{scroll-margin-top:calc(var(--header) + 18px)}`
- `activate()` passou a rolar para o painel ativo:
  - `getPanel(key).scrollIntoView({ behavior: 'smooth', block: 'start' });`
- No `boot()`, quando a URL já vinha com `#aula-1`, o activate passou a receber `scroll = true`.

**Validação local**

```text
INLINE JS OK
CLIENT JS OK
CONFIG JS OK
AUTH IDS OK
SCRIPT TAGS OK
```

Teste CDP local:

```text
initial {"url":"http://localhost:8000/#aula-1","visiblePanel":"aula-1","panelTop":116,"introText":"Segurança antes de qualquer manutenção.","topbarHeight":111,"scrollY":1246,"panels":12,"chapters":18,"quizItems":35,"checks":63}
afterClick {"url":"http://localhost:8000/#aula-1","visiblePanel":"aula-1","panelTop":128,"introText":"Segurança antes de qualquer manutenção.","topbarHeight":111,"scrollY":1234,"panels":12,"chapters":18,"quizItems":35,"checks":63}
afterReloadWithHash {"url":"http://localhost:8000/#aula-1","visiblePanel":"aula-1","panelTop":116,"introText":"Segurança antes de qualquer manutenção.","topbarHeight":111,"scrollY":1246,"panels":12,"chapters":18,"quizItems":35,"checks":63}
exceptions 0
```

**Resultado**

A Aula 1 passou a aparecer logo abaixo do cabeçalho ao abrir a URL com hash, clicar em “Começar pela Aula 1” ou recarregar a página com `#aula-1`.

---

## 3. Estado atual do projeto

### 3.1 Arquivos relevantes

- `C:\Users\Adao_Elias\Desktop\mecanica\index.html`
  - site completo;
  - 12 aulas;
  - parser Markdown;
  - quizzes;
  - checklists;
  - notas;
  - busca;
  - auth;
  - sanitização de fontes;
  - animação do ciclo Otto.
- `C:\Users\Adao_Elias\Desktop\mecanica\Apostila_Consolidada_Mecanica_Automotiva.md`
  - fonte de conteúdo carregada via `fetch`;
  - continua com as citações de fontes;
  - não foi alterada na remoção das citações do site.
- `C:\Users\Adao_Elias\Desktop\mecanica\supabase-config.js`
  - placeholders vazios;
  - precisa de URL e anon key reais para ativar login.
- `C:\Users\Adao_Elias\Desktop\mecanica\supabase-client.js`
  - cliente Supabase.
- `C:\Users\Adao_Elias\Desktop\mecanica\schema.sql`
  - tabela e RLS.
- `C:\Users\Adao_Elias\Desktop\mecanica\PUBLICAR.md`
  - instruções de Supabase e GitHub Pages.
- `C:\Users\Adao_Elias\Desktop\mecanica\modelo.html`
  - referência visual original.
- DOCX originais na pasta.
- `memoria.md`
  - este arquivo.
- `.gitignore`
  - ignora `~$*`, `.DS_Store` e `Thumbs.db`.
- Repo Git local em `main`, com remote `origin` apontando para `https://github.com/AdaoElias/mecanica.git`.

### 3.2 Comportamento atual do site

Sem `supabase-config.js` preenchido:

- site abre sem gate;
- progresso fica no `localStorage`;
- botão “Entrar” mostra aviso de configuração pendente.

Com `supabase-config.js` preenchido:

- janela de login aparece;
- Google e GitHub são suportados;
- e-mail/senha dependem da configuração do Supabase e SMTP;
- `Continuar sem entrar` permite navegar sem login;
- progresso é sincronizado em `mecanica_progress`.

### 3.3 Como testar localmente

```powershell
cd C:\Users\Adao_Elias\Desktop\mecanica
python -m http.server 8000
```

Acessar:

```text
http://localhost:8000/
```

Não abrir `index.html` diretamente com `file://`, porque o `fetch()` do `.md` não funciona nesse modo.

### 3.4 Site publicado

- URL: `https://adaoelias.github.io/mecanica/`
- GitHub Pages ativado pelo usuário.
- Branch: `main`.
- Pasta: `/root`.
- O `fetch()` do `.md` funciona nessa URL: `mdFetch 200 ok=true`.
- Arrays validados no site publicado: 12 painéis, 18 capítulos, 35 questões e 63 checks.

---

## 4. Pendências

- Confirmar visualmente no navegador do usuário o scroll corrigido para a Aula 1 após o push da correção.
- Preencher `supabase-config.js` com URL e anon key reais.
- Criar projeto Supabase e executar `schema.sql`.
- Configurar OAuth GitHub e Google.
- Configurar Redirect URLs:
  - GitHub Pages: `https://<usuario>.github.io/<repo>/`
  - Local: `http://localhost:8000/`
- Configurar SMTP próprio se quiser e-mail/senha com confirmação.
- Não foi localizado PDF consolidado na pasta durante a sessão atual.
- Não foi localizado DOCX consolidado com o nome `Apostila_Consolidada_Mecanica_Automotiva.docx` na pasta durante a sessão atual.

---

## 5. Área separada de erros, falhas e correções

Esta seção reúne todos os problemas encontrados, mesmo quando já resolvidos.

### 5.1 Rascunho antigo de `index.html` com erro de escrita

- Erro: `JSON Parse error: Unterminated string`.
- Causa: tentativa de escrever o arquivo inteiro em uma única operação com string muito grande/problemática.
- Correção: escrita em blocos menores, seguida de edições incrementais.
- Status: resolvido.

### 5.2 `sectionFrom()` capturava seções vazias

- Erro: regex usava flag `m` junto com `$`, resultando em captura vazia.
- Correção: trocada por padrão `(?:^|\n)##\s+...` sem flag `m`.
- Status: resolvido.

### 5.3 `optionsFor()` com distratores fora de ordem

- Erro: ids e textos dos distratores podiam ficar despareados.
- Correção: distratores passaram a ser tratados em pares `id/text`.
- Status: resolvido.

### 5.4 Questões de revisão duplicadas no corpo

- Erro: questões apareciam duplicadas no corpo dos painéis e também como quiz interativo.
- Correção: corpo dos painéis passou a pular a seção “Questões de revisão”.
- Status: resolvido.

### 5.5 Screenshot headless com `net::ERR_CONNECTION_REFUSED`

- Erro: ao chamar `msedge.exe` diretamente com `--screenshot`, o Edge conectava a uma instância existente e falhava.
- Correção: uso de `Start-Process` com `--user-data-dir` isolado.
- Status: resolvido.

### 5.6 Memory Bank não habilitado

- Aviso: projeto sem Memory Bank ativo.
- Impacto: nenhum.
- Ação: nenhuma; sistema seguiu sem memória automática externa.
- Status: irrelevante para o produto.

### 5.7 Lista de tarefas desatualizada

- Erro: itens já concluídos apareciam como `in_progress`/`pending`.
- Correção: lista foi atualizada durante a sessão.
- Status: resolvido.

### 5.8 `supabase-client.js` ausente

- Erro/ausência: arquivo necessário para a etapa final não existia.
- Correção: arquivo criado com API completa.
- Status: resolvido.

### 5.9 Credenciais Supabase ausentes

- Limitação: URL, anon key, client IDs e secrets não foram fornecidos.
- Correção: placeholders criados; site funciona sem configuração.
- Status: pendência externa.

### 5.10 `file://` não carrega a apostila

- Erro esperado: `fetch` de arquivo local falha em `file://`.
- Correção/orientação: usar `python -m http.server 8000` ou GitHub Pages.
- Status: resolvido por orientação.

### 5.11 Teste unitário do cliente falhou primeiramente

- Erro: `configured false` no teste Node.
- Causa: `global.supabase` estava definido, mas `global.window.supabase` não estava.
- Correção: teste temporário ajustado com `global.window.supabase = global.supabase`.
- Status: resolvido.

### 5.12 Teste CDP com configuração simulada teve erro de aspas

- Erro: expressão com `document.getElementById('accountHint')` dentro de string com aspas simples.
- Correção: uso de aspas duplas dentro da expressão.
- Status: resolvido.

### 5.13 Configuração simulada precisou ser restaurada

- Situação: `supabase-config.js` foi temporariamente preenchido com `https://demo.supabase.co` e `public-key` para teste.
- Correção: valores foram restaurados para strings vazias.
- Verificação: grep por `demo.supabase.co`, `public-key` e `service_role` não encontrou ocorrências.
- Status: resolvido.

### 5.14 `Get-Command msedge.exe` não retornou caminho

- Erro: comando não encontrou `msedge.exe` no PATH.
- Correção: localização do executável via glob:
  - `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
- Status: resolvido.

### 5.15 `Get-Item` para DOCX consolidado falhou

- Erro: caminho `Apostila_Consolidada_Mecanica_Automotiva.docx` não existe.
- Descoberta: não há DOCX consolidado nem PDF consolidado na pasta na sessão atual.
- Impacto: citações permanecem no `.md` e nos DOCX originais; nada foi apagado.
- Status: pendência/observação.

### 5.16 Primeiro teste da animação Otto reportou `hasSvg false`

- Erro: teste procurava `#ottoSvg`, mas o SVG não tinha `id`.
- Correção: adicionado `id='ottoSvg'` em `index.html:103`.
- Status: resolvido.

### 5.17 Overflow horizontal de 22 px

- Erro aparente: `document.documentElement.scrollWidth - clientWidth = 22`.
- Investigação: elementos apontados foram `.blob`, `.grain` e `.tab`.
- Conclusão: não foi causado pela animação; blobs/grain são decorativos e abas são navegação horizontal.
- Status: observado, sem alteração.

### 5.18 Centelha nem sempre aparecia na amostragem

- Situação: em uma amostragem, `sparkSeen false`; em outra, `sparkSeen true`.
- Causa: centelha aparece apenas nos primeiros 260 ms da fase de combustão.
- Correção: nenhuma; comportamento correto.
- Status: resolvido por entendimento.

### 5.19 Modelo assistente não consegue ler imagem

- Limitação: a captura `otto-mobile.png` foi salva, mas o modelo não suporta entrada de imagem.
- Correção: validação feita por DOM, geometria e estado dos atributos SVG.
- Status: limitação informada.

### 5.20 `history.replaceState` em `file://`

- Observação herdada: não foi protegido com `try/catch`.
- Impacto: baixo, pois o site já exige servidor HTTP para carregar o `.md`.
- Status: não alterado.

### 5.21 Aula 1 carregava, mas não ficava visível após “Começar”

- Erro relatado: “parece que não está aparecendo a aula 1”.
- Diagnóstico: `visiblePanel` era `aula-1`, `mdFetch 200 ok=true`, 12 painéis e 63 checks presentes.
- Causa: botão “Começar pela Aula 1” chamava `scrollIntoView()` em `#main`, e o painel da aula ficava em `panelTop ≈ 1235–1362 px`.
- Causa secundária: painéis tinham id `panel-aula-1`, enquanto links/hash usavam `#aula-1`.
- Correção: ids dos painéis passaram a ser `aula-1`, `aria-controls` foi ajustado, foi adicionado `scroll-margin-top`, `activate()` passou a rolar para `getPanel(key)` e hash inicial passou a rolar para o painel.
- Validação local: `panelTop 116–128`, `introText Segurança antes de qualquer manutenção.`, `exceptions 0`.
- Status: resolvido localmente; depende de commit/push para valer no GitHub Pages.

---

## 6. Resumo final para outra pessoa

O projeto está funcional localmente, com:

- 12 aulas;
- 35 questões;
- 63 checklists;
- busca e índice;
- notas e progresso locais;
- auth Supabase implementada, mas desativada enquanto `supabase-config.js` estiver vazio;
- citações de fontes removidas apenas da renderização do site;
- animação contextual do ciclo Otto no hero;
- documentação de publicação em `PUBLICAR.md`;
- commit `d9aaeec` enviado para `https://github.com/AdaoElias/mecanica`;
- GitHub Pages ativado em `https://adaoelias.github.io/mecanica/`;
- correção do scroll da Aula 1 pronta para novo commit/push.

Ainda é necessário enviar a correção do scroll da Aula 1 e fornecer as credenciais/configuração reais do Supabase para habilitar login e sincronização em produção.
