# Nova hero WIMO — "Premium playful"

Redesenho da seção hero mantendo o conteúdo atual (mensagem, botões, mascote) e adotando a composição da direção escolhida: mais respiro, hierarquia mais forte e um mockup de celular realista com cards de vidro flutuando ao redor.

## O que muda

**Coluna esquerda (texto)**
- Badge "Tecnologia para autonomia" em pílula de vidro branco com ponto turquesa pulsante.
- Título maior e mais impactante (Fredoka, até ~7xl no desktop), com "autonomia" em gradiente azul → roxo → turquesa em vez de cor sólida.
- Parágrafo com largura controlada e respiro maior.
- Dois botões maiores e arredondados: primário em gradiente azul→roxo com sombra colorida e leve elevação no hover; secundário branco com borda que acende no hover.
- Chips de benefícios mantidos, reposicionados abaixo dos botões com espaçamento maior.

**Coluna direita (visual)**
- Mockup de celular em moldura escura com tela arredondada, exibindo o mini-app atual (saudação, seletor de humor, tarefas, gráfico de humor).
- Dois cards de vidro flutuando fora da moldura: "Rotina do dia — 3 de 5 concluídas" e "Conquista — Nível 5", com ícone colorido e animação suave de flutuação.
- Mascote oficial da WIMO (o dragãozinho mint acenando, `wimo-wave.png`) em destaque: grande, à frente do celular e de todos os elementos da cena, com sombra colorida suave e flutuação lenta contínua. Ele é o protagonista do lado direito — o celular e os cards ficam atrás, como apoio.
- Dois anéis pontilhados girando muito devagar atrás do conjunto, dando profundidade.
- Manchas de gradiente desfocadas (azul e roxo) ao fundo, mais suaves que as atuais.

**Movimento**
- Entrada em cascata dos elementos de texto.
- Parallax leve do celular, dos cards e do mascote conforme o mouse (comportamento atual preservado).
- Flutuação contínua do mascote e dos cards de vidro.

## Detalhes técnicos

- Arquivo alterado: `src/components/wimo/Hero.tsx` (apenas apresentação; nenhum dado ou lógica nova).
- Todas as cores via tokens já existentes em `src/styles.css` (`wimo-blue`, `wimo-purple`, `wimo-turquoise`, `gradient-brand`, `glass-card`, `shadow-float`) — sem hex fixos nos componentes.
- Os emojis flutuantes soltos são substituídos pelos cards de vidro e pelos anéis decorativos, para reduzir ruído visual.
- Responsivo: no mobile a hero empilha texto acima e mockup abaixo, com os cards de vidro reposicionados para não vazarem da tela.
- O restante da página (header e demais seções) permanece inalterado.
