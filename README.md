# CL CLÍN — Podologia Avançada

Site institucional estático em HTML, CSS e JavaScript, pronto para publicação no Netlify.

## Estrutura

- `index.html`: seções, a seção única de tratamentos/procedimentos com seis cards e modais, metadados e formulário Netlify.
- `css/style.css`: identidade visual, acessibilidade, responsividade e animações.
- `js/script.js`: menu, modal dos procedimentos, carrosséis das demais seções, timeline, formulário e interações.
- `pages/sobre.html`: página Sobre, com apresentação da profissional e informações a confirmar.
- `css/sobre.css` e `js/sobre.js`: layout responsivo e interações da página Sobre.
- `assets/images/`: imagem do hero, fotos dos procedimentos em WebP otimizado, retrato da profissional, logo e placeholders locais.
- `assets/icons/favicon.svg`: ícone do site.

A logo oficial em cobre aparece à esquerda sobre uma placa clara, com navegação e agendamento à direita no desktop. No mobile, a navegação abre em painel claro de tela inteira.

Swiper 11.2.10 é carregado sob demanda: os procedimentos usam o carrossel centralizado até 680 px e as demais galerias até 1120 px. GSAP 3.12.5, ScrollTrigger e Lenis 1.1.20 são carregados para a timeline, independentemente da preferência de movimento do sistema; a página Sobre usa apenas JavaScript nativo. As versões são fixas; é necessária conexão à internet para essas bibliotecas e Google Fonts. Sem Swiper, os cards continuam acessíveis por rolagem horizontal com encaixe suave.

## Testar localmente

Na raiz do projeto, inicie um servidor estático:

```powershell
python -m http.server 8000
```

Abra `http://localhost:8000` para a página inicial e `http://localhost:8000/pages/sobre.html` para a apresentação da profissional. Um servidor local é preferível a abrir o HTML diretamente, especialmente para o formulário e carregamento das bibliotecas.

### Verificar o mobile e carrosséis

1. Abra as ferramentas do navegador e ative a emulação de um celular ou reduza a viewport para 390 px.
2. Na única seção “Tratamentos e procedimentos”, arraste para os lados e confira o card ativo centralizado, a entrada parcial do próximo card, a paginação e as fotografias suaves com overlay bege. Tab deve manter o foco visível nos cards.
3. Abra cada card; confira as informações específicas, o fechamento por X, clique fora e Esc. O botão de agendamento usa o número configurado em `CONFIG.whatsappNumber` ou oferece o formulário enquanto ele estiver vazio.
4. Repita em uma viewport de tablet (por exemplo, 800 px): os cards devem formar duas colunas. Em desktop acima de 1120 px, devem formar três colunas e duas linhas.
5. Faça o mesmo em “O que nos orienta”, “Nosso ambiente” e “Depoimentos” para verificar os carrosséis dessas seções.
6. Abra a página Sobre no desktop e no celular; confira a foto, os links do menu e os campos de informação profissional marcados como TODO.

### Verificar a timeline

Role até “Nossa experiência” e depois volte para cima. A linha dourada deve acompanhar o progresso nos dois sentidos, as etapas devem entrar e sair de foco conforme a rolagem, e a arte/numerais devem se deslocar suavemente em parallax. Os fades in, up e down também devem se repetir ao entrar na tela ao descer e ao subir. Repita com “Reduzir movimento” ativado no sistema: esses efeitos devem continuar funcionando sem depender dessa configuração.

### Formulário Netlify

O formulário usa detecção nativa do Netlify (`data-netlify`, honeypot e retorno de sucesso). Para confirmar o recebimento, publique o site em um deploy Netlify com Forms habilitado e envie um formulário de teste; um servidor local não encaminha mensagens.

## Antes de publicar

- Substitua os SVGs `*-placeholder.svg` em `assets/images/` por fotografias autorizadas da clínica e atualize seus textos alternativos. Para manter a direção visual, prefira luz lateral, fundo escuro e profundidade de campo.
- As seis fotos fornecidas para os procedimentos são preservadas nos arquivos originais e usadas na seção através das versões WebP `procedimento-*.webp`, redimensionadas para carregamento mais rápido.
- A imagem do hero em `assets/images/hero-relaxamento.webp` é a imagem enviada para esta implementação. Para usar vídeo, adicione o arquivo autorizado em `assets/media/hero.mp4` e configure `heroVideoSrc` no início de `js/script.js`.
- Preencha o número em `CONFIG.whatsappNumber` no início de `js/script.js` (código do país, DDD e número, somente dígitos).
- Confirme os horários das duas unidades e os links exatos do Google Maps.
- Preencha nome, formação e registro da profissional na página `pages/sobre.html` somente com dados confirmados.
- Substitua os cards de depoimentos apenas por relatos reais e autorizados.
