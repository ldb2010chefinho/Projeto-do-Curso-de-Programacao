# Lanchonete Pixel

Site de demonstração da apresentação sobre Design Responsivo.
Ele se conserta **sozinho, ao vivo**, conforme os slides avançam.

## Como funciona
A apresentação publica o estágio atual (0 a 9) no canal gratuito
`ntfy.sh/lanchonete-pixel-ldb-oterimxu`. Cada celular que abriu o site fica
ouvindo esse canal e aplica o conserto sem ninguém tocar em nada.

| Estágio | Conserto | O que muda no celular |
|---|---|---|
| 0 | — | Site quebrado: minúsculo, com zoom e rolagem lateral |
| 1 | meta viewport | Texto no tamanho certo (mas ainda sai para o lado) |
| 2 | Flexbox | Cabeçalho e menu quebram linha |
| 3 | Grid | Página em uma coluna, cardápio com auto-fit |
| 4 | media query | Menu vira botão ☰ |
| 5 | max-width: 100% | A foto para de estourar a tela |
| 6 | clamp() | Título no tamanho certo |
| 7 | container query | Card da promoção fica lado a lado |
| 8 | Caça ao bug | Botão "Fazer pedido" sai da tela abaixo de 360px |
| 9 | Final | Site consertado |

## Arquivos
| Arquivo | Para quê |
|---|---|
| `index.html` | O site (QR code 1) |
| `bug.html` | Atalho para o modo Caça ao bug (QR code 2) |
| `viewport.html`, `final.html` | Atalhos fixos, sem sincronia (plano B) |
| `apresentacao.html` | A apresentação (é ela que comanda os celulares) |

Plano B sem internet: `?s=N&fixo=1` abre qualquer estágio sem sincronia.
