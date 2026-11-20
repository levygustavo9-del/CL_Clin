# CL CLÍN — Podologia Avançada

Website institucional estático desenvolvido em HTML5, CSS3 e JavaScript ES6+.

## Estrutura

- `index.html`: estrutura semântica e conteúdo.
- `css/style.css`: identidade visual, responsividade e animações.
- `js/script.js`: navegação, animações, modais, lightbox e formulário.
- `assets/images/`: pasta preparada para fotos locais.
- `assets/icons/`: pasta preparada para ícones locais.
- `assets/fonts/`: pasta preparada para fontes locais.

## Executar localmente

Use qualquer servidor estático. Com Python:

```powershell
cd cl-clin
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Configurações

### WhatsApp

Edite `CONFIG.whatsappNumber` no início de `js/script.js`. Informe somente o número com código do país e DDD, por exemplo: `5582999999999`. O texto inicial pode ser alterado em `whatsappMessage`.

Enquanto o número não estiver configurado, os links levam o visitante à seção de contato.

### Instagram

Edite os atributos `href` dos elementos com IDs `instagram-link` e `footer-instagram`.

### Endereços e horários

Edite diretamente os cards da seção `#unidades` em `index.html`. Os links “Como chegar” são pesquisas configuráveis do Google Maps e devem ser substituídos por links exatos quando disponíveis.

### Imagens

As imagens atuais são referências remotas demonstrativas do Unsplash. Para substituí-las por fotos autorizadas da clínica:

1. Coloque os arquivos em `assets/images/`.
2. Substitua as URLs `https://images.unsplash.com/...` no HTML e no CSS por caminhos locais.
3. Atualize os textos alternativos para refletir cada fotografia.

### Textos e tratamento

Os textos institucionais estão em `index.html`. Os títulos e descrições dos modais podem ser personalizados em `treatmentDetails`, no `js/script.js`.

### Formulário

O formulário realiza validação no navegador, mas não envia dados sem integração. Conecte o envio a uma API, serviço de formulário ou WhatsApp antes da publicação.
