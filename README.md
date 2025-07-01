# Jogo da Memória Emoji

Um jogo da memória simples para navegador, usando cartas de emojis e animação de confetes ao vencer.

## 🎯 Objetivo do Jogo

* Combine todos os pares de emojis virando duas cartas por vez.
* Ao combinar corretamente um par, as cartas permanecem abertas.
* Se não combinarem, as cartas se fecham novamente.
* Quando todos os pares forem encontrados, exibe uma chuva de confetes e uma mensagem de vitória.

## 📂 Estrutura de Arquivos

```
jogo-memoria-emoji/
├── index.html          # página principal com grid e botões
├── styles/
│   ├── reset.css       # reset básico de CSS
│   └── main.css        # estilos do layout, cartas e animações
├── scripts/
│   └── engine.js       # lógica do jogo (embaralhar, virar cartas, checar pares)
└── README.md           # este arquivo
```

## 🛠 Tecnologias

* **HTML5**: estrutura da página e grid do jogo.
* **CSS3** (Flexbox, Transforms): layout responsivo, estilo das cartas e efeito de flip.
* **JavaScript (ES6+)**: lógica de embaralhamento, detecção de pares, contagem de aberturas e disparo de confetes.
* **canvas‑confetti**: biblioteca para animação de confetes ao vencer.

## 🚀 Como Usar

1. **Clone ou baixe** este repositório.
2. Abra o arquivo `index.html` no seu navegador (localmente ou via servidor HTTP).
3. Clique nas cartas para virar duas por vez e combinar os pares.
4. Ao encontrar todos os pares, a animação de confetes será exibida.

## ⚙️ Configurações

* Para alterar os emojis usados, edite o array `emojis` em `scripts/engine.js`.
* Para ajustar o tempo de flip ou delay entre tentativas, modifique o valor em `setTimeout(checkMatch, 500)`.
* Para alterar parâmetros de confete (quantidade, ângulo, velocidade), ajuste o objeto `params` dentro de `checkMatch()`.

## 🖼️ Layout e Estilo

* As cartas têm 100×100px, transform-style 3D e uso de `backface-visibility` para efeito de flip.
* O grid `.game` usa Flexbox, wrap e gap para organizar as cartas.
* O container centraliza o conteúdo e aplica um gradiente de fundo.

## 📄 Licença

Este projeto está disponível sob a [MIT License](LICENSE).

---

<div align="center">
  <small>Desenvolvido com ❤️ por [Seu Nome]</small>
</div>
