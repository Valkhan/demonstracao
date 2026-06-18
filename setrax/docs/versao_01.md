# Versão 01 — Lista de Implementação

Guia de implementação para o Claude Code. Cobre apenas o site institucional (landing page). Blog é escopo da v2.

**Base de referência:** [README.md](../README.md) · **Arquivo principal:** [index.html](../index.html) · **Estilos:** [css/style.less](../css/style.less)

---

## STATUS DAS TAREFAS

- [ ] = Pendente
- [x] = Concluído
- [~] = Bloqueado / aguardando entrega do cliente

---

## 1. Paleta de Cores — Ajuste Incremental

O site atual usa paleta verde floresta. Ajustar para a identidade Setrax sem redesenho estrutural.

### 1.1 Atualizar variáveis no `css/style.less`

Substituir as variáveis de cor atuais pelos equivalentes da paleta Setrax:

| Variável atual | Valor atual | Substituir por | Novo valor |
|----------------|-------------|----------------|------------|
| `@g1` | `#1e3d28` | Azul Marinho (primária) | `#1C3A4A` |
| `@g2` | `#2d5a3d` | Azul Marinho médio | `#22455A` |
| `@g3` | `#3a7052` | Teal escuro | `#007A72` |
| `@g4` | `#5a9e6f` | Teal esmeralda | `#00A89D` |
| `@g5` | `#8cc49e` | Teal claro | `#4DC4BB` |
| `@g-pale` | `#c5dfc9` | Menta suave | `#B2E4E1` |
| `@g-ultra` | `#e8f3eb` | Menta ultra claro | `#E0F5F4` |
| `@g-foam` | `#f2f8f3` | Cinza Gelo | `#F4F7F9` |
| `@text` | `#14201a` | Chumbo escuro | `#2C3E50` |
| `@mid` | `#3d5044` | Chumbo médio | `#3D5166` |
| `@muted` | `#7a9080` | Azul acinzentado | `#6B8A9A` |
| `@border` | `#d0dbd2` | Borda neutra | `#D0DAE0` |

- [ ] Substituir variáveis no `style.less`
- [ ] Recompilar `style.less` → `style.min.css` (via `lessc css/style.less css/style.min.css`)

### 1.2 Verificar após compilação

- [ ] Nav: fundo branco com sombra azulada (não verde)
- [ ] Hero: blobs com cor teal (não verde)
- [ ] Strip (ticker): fundo azul marinho
- [ ] Botão CTA: azul marinho com hover teal
- [ ] Cards de serviços: tag colorida em teal
- [ ] Seção Diferenciais: numeração em teal
- [ ] Seção Médico: fundo azul marinho
- [ ] Footer: fundo azul marinho

---

## 2. Tipografia

O site usa `Fraunces` (serif) nos títulos `<em>` e `Plus Jakarta Sans` no corpo. Ajuste incremental: manter `Plus Jakarta Sans`, remover `Fraunces` e usar sans-serif geométrica consistente.

- [ ] Remover `Fraunces` do `<link>` Google Fonts no `index.html`
- [ ] Substituir `font-family: 'Fraunces'` por `'Plus Jakarta Sans'` no `style.less` (buscar por `Fraunces`)
- [ ] Verificar se os `<em>` nos títulos H1/H2 ainda têm estilo de destaque (itálico ou cor teal) após a troca

> Alternativa futura: trocar `Plus Jakarta Sans` por `Poppins` ou `Nunito` em uma próxima iteração, caso o cliente aprove.

---

## 3. Logo no Navbar + Presença do Nome para SEO/GEO

O logo `img/logo.png` já contém "SETRAX" graficamente, mas para SEO e GEO o nome da clínica deve aparecer também como **texto real no HTML** em múltiplas seções — buscadores e modelos de IA leem o DOM, não pixels.

### 3.1 Logo no nav

- [ ] Substituir o `<a class="n-brand">SETRAX</a>` por `<img src="img/logo.png" alt="Clínica Setrax — Saúde e Segurança Ocupacional" height="32">`
- [ ] O atributo `alt` deve conter o nome completo — ele conta para indexação
- [ ] Ajustar CSS `.n-brand` para `display: flex; align-items: center;` e remover estilos de texto
- [ ] Testar em mobile (aplicar `max-height: 32px; width: auto` para não quebrar o nav)

### 3.2 Presença textual do nome "Setrax" ao longo das seções

Garantir que "Setrax" ou "Clínica Setrax" apareça como texto corrido (não só no logo) nas seguintes posições:

| Seção | Onde inserir o nome |
| ----- | ------------------- |
| Hero | Pill/badge acima do H1: "Clínica Setrax · Guarujá, SP" — já existe, manter |
| Hero subtítulo | Incluir "na Setrax" na frase do `hero-sub` |
| Serviços | Subtítulo da seção: "...cobertura total para sua empresa com a Setrax" |
| Diferenciais | Tag da seção: "Por que a Setrax" — já existe, manter |
| Credenciamento (item 7) | Aparece no texto institucional da seção |
| Footer | Manter nome textual "Setrax" além do logo |
| `<title>` e `<meta name="description">` | "Setrax — Medicina do Trabalho e Segurança Ocupacional em Guarujá, SP" |

- [ ] Auditar cada seção após implementação e confirmar que "Setrax" aparece ao menos uma vez como texto em todas as seções principais

---

## 4. Mensagem Central do Cliente

Adicionar a frase institucional definida pelo cliente. Posição sugerida: seção de transição entre Hero e Serviços (após o strip/ticker).

**Texto:**
> "A Saúde e a Segurança do Trabalho devem ser notadas como um investimento, e não como um fim de custos desnecessários. Cuidar dos trabalhadores e do ambiente de trabalho de sua empresa gera segurança jurídica e produtividade em qualquer ramo de negócio."

- [ ] Inserir nova seção `<section class="mensagem-central">` após a `div.strip` no `index.html`
- [ ] Estilo: fundo `@g-ultra` (menta claro), texto centralizado, fonte maior (~22–26px), aspas visuais decorativas em teal
- [ ] Adicionar animação de entrada ao scroll (classe `rv` já usada no projeto)

---

## 5. Serviços — Expansão de Conteúdo

A seção de serviços atual tem 3 cards genéricos. Expandir para os 3 pilares definidos no README.

### 5.1 Reorganizar em 3 grupos de serviços

Substituir os cards atuais por 3 blocos temáticos:

**Grupo A — Medicina do Trabalho**

- Exames Ocupacionais: Admissional, Demissional, Periódico, Retorno ao Trabalho, Mudança de Função
- Avaliação Psicossocial e Gestão de Riscos Psicossociais (NR 01)
- Programas: PCMSO, PCA, PPR

**Grupo B — Engenharia e Laudos Técnicos**

- PGR — Programa de Gerenciamento de Riscos
- Laudos: LTCAT e LTIP (Insalubridade e Periculosidade)
- Ergonomia: AET e AEP
- PPP — Perfil Profissiográfico Previdenciário

**Grupo C — Consultoria e Capacitação**

- Treinamentos em SST
- eSocial — Gestão e envio das informações

- [ ] Reestruturar HTML da `section.servicos` para refletir os 3 grupos
- [ ] Cada grupo: ícone SVG representativo + título do pilar + lista de itens em chips/bullets
- [ ] Manter o card visual com imagem (`.svc-img`) — usar imagem Unsplash contextual para cada pilar
- [ ] Atualizar o select "Serviço de Interesse" no formulário de contato para incluir todos os itens acima

### 5.2 Adicionar serviços ao strip/ticker

- [ ] Adicionar ao `div.strip-track`: `Ergonomia`, `LTIP`, `NR 01`, `AET · AEP`, `PCA · PPR`, `Treinamentos SST`

---

## 6. Galeria de Clientes

Nova seção a ser inserida entre "Setores Atendidos" e "Contato".

### 6.1 Tratamento das imagens (pré-requisito)

**Arquivos disponíveis:** `img/clientes_03.png` + `img/clientes_04.jpeg` a `img/clientes_17.jpeg` (15 logos)

**Especificações para padronização:**

| Parâmetro | Valor recomendado |
|-----------|-------------------|
| Formato final | PNG com fundo transparente |
| Dimensões canvas | 240 × 120 px |
| Área do logo | Centralizado, com padding de 16px nas bordas |
| Fundo | Transparente (ou branco sólido se fundo transparente não for viável) |
| Cor | Manter cores originais; logos monocromáticos em preto podem receber filtro CSS |

**Ferramentas gratuitas sugeridas para o tratamento:**

- **[remove.bg](https://www.remove.bg)** — remoção automática de fundo (IA), gratuito até 50 imagens/mês em baixa resolução
- **[Adobe Express](https://www.adobe.com/express/feature/image/remove-background)** — remoção de fundo + redimensionamento, plano gratuito
- **[Photopea](https://www.photopea.com)** — editor online estilo Photoshop, gratuito, sem limite de exportações; ideal para ajuste manual e padronização de canvas
- **[Squoosh](https://squoosh.app)** — otimização e conversão de formato (PNG/WebP), gratuito e sem instalação

**Fluxo sugerido:**
1. Usar `remove.bg` ou `Adobe Express` para remover fundo de cada logo
2. Abrir no `Photopea`, ajustar canvas para 240×120px, centralizar
3. Exportar como PNG
4. Otimizar com `Squoosh` (PNG comprimido ou WebP)
5. Salvar em `img/clientes/` (criar subpasta para organização)

- [~] Tratamento das 15 imagens (bloqueante — deve ser concluído antes da implementação da seção)

### 6.2 Implementação da seção

- [ ] Inserir `<section class="clientes">` após a `div` de "Setores Atendidos"
- [ ] Título da seção: `"Alguns de Nossos Clientes"`
- [ ] Layout desktop: grid 4–5 colunas, logos com `max-height: 60px`, alinhados ao centro
- [ ] Layout mobile: carrossel com scroll automático (reutilizar padrão do `.strip-track` já existente)
- [ ] Efeito hover: `filter: grayscale(0); opacity: 1` no hover (logos em grayscale por padrão, cor ao hover)
- [ ] Fundo da seção: `@g-foam` (cinza gelo) para não competir com os logos

---

## 7. Seção Credenciamento Técnico (substitui a seção "Médico")

A seção atual é centrada no perfil individual do Dr. Ahmad com um placeholder SVG de avatar. Não haverá foto. Redesenhar como uma seção institucional de **credenciamento e responsabilidade técnica** — o médico é mencionado como garantia de qualidade, não como protagonista.

### 7.1 Novo conceito da seção

Nome sugerido para a seção: **"Estrutura Técnica e Credenciamento"** ou **"Quem Garante a Conformidade da Setrax"**

Layout proposto: fundo azul marinho (`@g1`), sem foto, composto por:

- **Bloco de credencial médica** — ícone de estetoscópio/diploma + texto: "Direção Técnica: Dr. Ahmad Ali Abdul Rahim · CRM-SP 65040 · Especialista em Medicina do Trabalho — responsável por todos os exames, programas e laudos emitidos pela Setrax."
- **Chips de especialidade** — reutilizar os `.mchip` já existentes (Medicina do Trabalho, PCMSO, PGR e LTCAT, Perícias Técnicas, eSocial)
- **Parágrafo institucional** — texto focado na estrutura da clínica, não na pessoa: "A Setrax conta com direção médica especializada e equipe técnica própria para garantir qualidade, conformidade legal e rastreabilidade em todos os serviços."

### 7.2 Tarefas de implementação

- [ ] Remover o bloco `.med-card-v2` (card com SVG de avatar) do `index.html`
- [ ] Substituir por um bloco `.cred-card` horizontal: ícone institucional (SVG de diploma/medalha) + nome + CRM + especialidade em texto
- [ ] Manter os chips `.mchip` existentes — apenas revisitar os textos se necessário
- [ ] Atualizar o parágrafo `.med-p` para focar na estrutura da clínica, não no indivíduo
- [ ] Atualizar o link no nav: trocar `"Equipe"` por `"Credenciamento"` (ou `"Estrutura"`)
- [ ] Verificar item 1.2: "Seção Médico: fundo azul marinho" — renomear referência para "Seção Credenciamento"

---

## 8. Números / Indicadores — Seção Dedicada

Os valores já estão confirmados pelo cliente. Os mini-stats do hero (`100% Execução Interna`, `2013 Fundação`, `8+ Exames Complementares`) são os dados corretos a publicar.

Criar uma seção dedicada de indicadores com animação, em posição mais visível que os mini-stats atuais do hero. Posição sugerida: imediatamente após a mensagem central (item 4) ou após a seção de serviços.

**Valores a exibir:**

| Indicador | Valor | Legenda |
| --------- | ----- | ------- |
| Execução interna | 100% | Sem terceirização |
| Ano de fundação | 2013 | Anos de experiência |
| Exames complementares | 8+ | Tipos disponíveis |

- [ ] Criar `<section class="indicadores">` com fundo azul marinho (`@g1`) ou teal (`@g4`)
- [ ] Cada indicador: número em destaque (fonte ~56–72px, peso 700) + legenda abaixo
- [ ] Implementar contador animado ao scroll via `IntersectionObserver` no `js/script.js` — o número sobe de 0 até o valor final quando a seção entra na viewport
- [ ] Layout: 3 colunas em desktop, empilhado em mobile, com separadores verticais entre colunas
- [ ] Remover (ou simplificar) os `.hero-mini-stats` do hero após criar a seção dedicada, para evitar repetição

---

## 9. Nav — Links de Navegação

Com as novas seções, os links do nav precisam ser atualizados.

- [ ] Adicionar link `#clientes` para a nova seção de galeria
- [ ] Avaliar renomear `"Admissional"` para `"Como Funciona"` (mais amplo, cobre o processo operacional)
- [ ] Verificar comportamento do nav em mobile (menu hambúrguer existe? Se não, avaliar adicionar)

---

## 10. Formulário de Contato — Atualização

- [ ] Atualizar select `"Serviço de Interesse"` para incluir todos os serviços da v1:
  - Exame Admissional
  - Exame Periódico / Demissional / Retorno
  - PCMSO
  - PGR
  - LTCAT / LTIP
  - Ergonomia (AET / AEP)
  - PPP
  - eSocial
  - Treinamentos SST
  - Pacote Completo
- [ ] Confirmar com o cliente se o formulário tem integração (e-mail, webhook, CRM) ou é apenas visual

---

## 11. Footer

- [ ] Substituir `"Setrax"` texto por logo `img/logo.png` no footer (mesma abordagem do item 3)
- [ ] Adicionar links rápidos: Serviços, Como Funciona, Clientes, Contato
- [ ] Adicionar ícone/link de WhatsApp se o cliente tiver número de WhatsApp Business

---

## Itens Fora do Escopo da V1

| Item | Versão |
|------|--------|
| Blog (estrutura de posts, listagem, categorias) | V2 |
| SEO on-page (meta tags, Open Graph, Schema.org) | V2 |
| AEO (estrutura FAQ nos posts) | V2 |
| Página de cada serviço (subpáginas) | V2 |
| Integração do formulário com backend/CRM | V2 |

---

## Ordem de Execução Sugerida

1. **Cores** (item 1) — base para tudo que vem depois
2. **Logo no nav e footer + presença do nome** (itens 3 e 11)
3. **Tipografia** (item 2)
4. **Mensagem central** (item 4)
5. **Indicadores** (item 8) — valores confirmados, pode implementar já
6. **Expansão de serviços** (item 5)
7. **Credenciamento técnico** (item 7) — substitui seção Médico
8. **Formulário atualizado** (item 10)
9. **Nav links** (item 9)
10. **Galeria de clientes** (item 6) — após tratamento das imagens
