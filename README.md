# Lily da Memória 🐶

Um jogo da memória web interativo que utiliza fotos da Lily em pares, com três níveis de dificuldade (Fácil, Médio, Difícil) e efeito de confetes ao completar o jogo.

---

## 🎯 Objetivo

* Virar duas cartas por vez para encontrar pares da mesma foto.
* Ao acertar, as cartas permanecem viradas; ao errar, voltam ao estado inicial.
* Existem três níveis de dificuldade que definem quantos pares e colunas o tabuleiro terá:

  * **Fácil**: 8 pares, 4 colunas
  * **Médio**: 12 pares, 6 colunas
  * **Difícil**: 16 pares, 8 colunas
* Ao encontrar todos os pares, uma chuva de confetes é exibida e a mensagem de vitória aparece.

---

## 📂 Estrutura do Projeto

```
lily-da-memoria/
├── index.html             # página principal
├── images/                # fotos da Lily (cada par duplicado)
│   ├── babyLily.jpg
│   ├── lilyAniversario.png
│   └── ...
├── styles/
│   ├── reset.css          # reset de estilos
│   └── main.css           # layout, grid, flip 3D e temas
├── scripts/
│   └── engine.js          # lógica do jogo, níveis, embaralhamento e confetes
└── README.md              # este arquivo
```

---

## 🚀 Tecnologias

* **HTML5**
* **CSS3** (Flexbox, CSS Grid, Transforms 3D)
* **JavaScript (ES6+)**
* **canvas-confetti** para animação de confetes

---

## ⚙️ Como Executar

1. Clone este repositório ou baixe os arquivos.
2. Abra o `index.html` em um navegador moderno (Chrome, Firefox, Edge).
3. Escolha o nível clicando nos botões **Fácil**, **Médio** ou **Difícil**.
4. Inicie o jogo virando as cartas para encontrar os pares.
5. Ao completar todos os pares, divirta-se com a chuva de confetes!

---

## 🎮 Como Jogar

1. Clique em **Fácil**, **Médio** ou **Difícil** para selecionar o número de pares.
2. O tabuleiro se ajusta ao nível escolhido.
3. Clique em duas cartas para virá-las:

   * Se formarem par, ficam abertas.
   * Se não, voltam ao estado fechado após breve delay.
4. Continue até encontrar todas as fotos em pares.
5. Ao completar, o confete cai e o jogo exibe: **Você Venceu!**

---

## 🔧 Configurações

* **Adicionar novas imagens**: coloque-as na pasta `images/` e garanta que cada foto seja duplicada no array `lilys` em `engine.js`.
* **Ajustar delay de flip**: modifique o tempo em `setTimeout(checkMatch, 500)` em `engine.js`.
* **Parâmetros de confete**: personalize o objeto `params` em `checkMatch()`.

---

## 📄 Licença

Este projeto está sob a [MIT License](LICENSE).

---
<div align="center">
  <small>Desenvolvido com ❤️ por Luisa Leiria</small>
</div>
