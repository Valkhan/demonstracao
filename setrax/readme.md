# Clínica Setrax — Guia do Projeto (Site + Blog)

## Visão Geral

Site institucional e blog da **Clínica Setrax — Saúde e Segurança Ocupacional**, com foco em geração de leads, autoridade de marca e tráfego orgânico via SEO/AEO.

O modelo de referência adotado é o **Modelo B (contemporâneo)**: visual acolhedor, humanizado e rico em elementos visuais — decisão de Diogo, baseada na premissa de que a tecnologia nivelou a receptividade visual independentemente da faixa etária do público.

> **Observação:** Os modelos de referência são apenas inspiração. O site final será desenvolvido com a identidade visual própria da Clínica Setrax (logo, cores, tipografia), definida em etapa posterior ao aceite da proposta.

---

## Mensagem Central do Cliente

> "A Saúde e a Segurança do Trabalho devem ser notadas como um investimento, e não como um fim de custos desnecessários. Cuidar dos trabalhadores e do ambiente de trabalho de sua empresa gera segurança jurídica e produtividade em qualquer ramo de negócio."

Esta frase deve aparecer com destaque no site — sugerida para a seção de Diferenciais ou como elemento de transição entre Hero e Serviços.

---

## Identidade Visual

### Paleta de Cores

Extraída diretamente do logo da Setrax:

| Papel           | Nome           | Hex       | Uso principal                                   |
|-----------------|----------------|-----------|-------------------------------------------------|
| Primária        | Azul Marinho   | `#1C3A4A` | Títulos, navbar, fundos de seção escura, rodapé |
| Secundária      | Teal Esmeralda | `#00A89D` | CTAs, destaques, ícones, badges, links          |
| Fundo neutro    | Branco         | `#FFFFFF` | Fundo padrão de seções claras                   |
| Fundo suave     | Cinza Gelo     | `#F4F7F9` | Alternância de seções, cards                    |
| Texto principal | Chumbo         | `#2C3E50` | Parágrafos e corpo de texto                     |
| Teal claro      | Menta          | `#E0F5F4` | Fundos de cards, highlights, badges sutis       |

### Tipografia (referência)

- **Títulos:** Sans-serif geométrica (ex: Poppins, Nunito, Montserrat)
- **Corpo:** Sans-serif legível (ex: Inter, Open Sans)
- Peso visual leve a médio — sem fontes condensadas ou serifadas

---

## Diretrizes de Design

- **Formas arredondadas** em cards, botões e imagens — reduzem sensação de tensão e geram proximidade psicológica
- **Imagens humanizadas**: pessoas reais, contextos de saúde ocupacional, diversidade
- **Elementos visuais de fundo**: gradientes suaves, blobs, padrões geométricos discretos, ondas SVG entre seções
- **Animações ricas porém funcionais**: entrada de elementos ao scroll (fade-in, slide-up), contadores animados nos indicadores, hover em cards
- **Alta densidade visual positiva**: nunca páginas vazias ou puramente textuais

---

## Estrutura de Seções do Site

### 1. Hero — Chamada Forte

- Headline direta e impactante voltada ao tomador de decisão (RH / empresa)
- Subheadline com proposta de valor
- CTA primário e secundário (ex: "Solicitar proposta" / "Conheça os serviços")
- Imagem ou vídeo humanizado como elemento de fundo ou lateral

### 2. Números / Indicadores

- Empresas atendidas, exames realizados, anos de experiência, conformidade NR
- Contadores animados ao scroll
- Fundo em azul marinho ou teal para destaque

### 3. Serviços com Imagem

Atuamos de forma integrada para garantir a conformidade da sua empresa, unindo **Medicina do Trabalho**, **Engenharia** e **Consultoria Técnica Jurídica** em Segurança e Saúde do Trabalho (SST).

#### Medicina do Trabalho

- **Exames Ocupacionais:** Admissionais, demissionais, periódicos, de retorno ao trabalho e mudança de riscos/função
- **Avaliações Especializadas:** Avaliação psicossocial e gestão de riscos psicossociais (NR 01)
- **Programas de Saúde:** PCMSO (Programa de Controle Médico de Saúde Ocupacional), PCA (Programa de Conservação Auditiva) e PPR (Programa de Proteção Respiratória)

#### Engenharia e Laudos Técnicos

- **PGR:** Programa de Gerenciamento de Riscos
- **Laudos Técnicos:** LTCAT (Laudos de Condições Ambientais de Trabalho) e LTIP (Laudos de Insalubridade e Periculosidade)
- **Ergonomia:** AET (Análise Ergonômica do Trabalho) e AEP (Análise Ergonômica Preliminar)
- **PPP:** Perfil Profissiográfico Previdenciário

#### Consultoria e Capacitação

- **Treinamentos:** Capacitações completas em Saúde e Segurança do Trabalho
- **eSocial:** Gestão e envio descomplicado das informações de SST para o sistema

> Layout: cards com ícone + descrição curta, cada grupo em bloco visual distinto. Grid responsivo com imagens humanizadas associadas a cada área.

### 4. Processo Operacional Visual

- Timeline ou stepper visual mostrando como funciona o atendimento
- Ex: Contato → Agendamento → Exame → Laudo → Entrega
- Ícones ilustrativos por etapa

### 5. Diferenciais

- Conformidade com NRs e legislação trabalhista
- Proteção legal para a empresa contratante
- Agilidade de laudo, cobertura regional, suporte técnico
- Layout em colunas com ícones e texto breve
- Incluir a **mensagem central do cliente** (SST como investimento) nesta seção

### 6. Galeria de Clientes

- Seção "Alguns de Nossos Clientes" com logos em grid
- **Arquivos disponíveis:** `img/clientes_03.png` e `img/clientes_04.jpeg` até `img/clientes_17.jpeg` (15 logos)
- **Tratamento necessário antes da implementação:**
  - Padronizar dimensões (ex: 160×80px ou similar)
  - Aplicar fundo branco ou transparente em todos os logos
  - Converter todos para PNG com fundo transparente para consistência
  - Equalizar brilho/contraste para aparência uniforme no grid
  - Referência visual: `img/clientes.jpeg` (layout de 4 colunas em fundo branco)
- Layout sugerido: carrossel automático em mobile, grid 4–5 colunas em desktop
- Efeito hover: escala leve ou saturação de cor

### 7. Apresentação do Responsável Técnico

- Foto profissional, nome, CRM/registro, especialidade
- Breve bio com autoridade e humanização
- Reforça confiança — essencial no setor de saúde

### 8. CTA Final

- Repetição do convite à ação com urgência ou benefício claro
- Formulário simplificado ou botão para WhatsApp/contato
- Fundo contrastante (azul marinho ou teal)

---

## Blog

- Foco em **SEO tradicional** (palavras-chave de cauda longa) e **AEO** (Answer Engine Optimization — respostas diretas para IA/buscadores)
- Categorias sugeridas: NRs e legislação, saúde ocupacional, segurança do trabalho, gestão de RH
- Cada post deve ter: introdução objetiva, subtítulos claros (H2/H3), lista de pontos-chave, CTA ao final
- Imagens com alt text descritivo; posts com estrutura FAQ quando aplicável

---

## Comunicação e Tom de Voz

- **Próximo e profissional** — sem frieza técnica excessiva, sem informalidade exagerada
- Fala com o **gestor/RH**, não com o funcionário final
- Enfatiza **segurança jurídica**, **conformidade** e **tranquilidade operacional**
- Evita jargões médicos sem explicação; usa linguagem acessível com autoridade
