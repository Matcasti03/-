# MAE Natureza

Este projeto é um site institucional estático da ONG **MAE Natureza**, criado para divulgar a missão da organização, apresentar ações de preservação ambiental e oferecer acesso às páginas de login, cadastro e recuperação de senha.

## Objetivo
O site tem como finalidade:
- informar sobre a ONG e sua atuação na preservação do Rio Tietê;
- mostrar notícias, projetos e conteúdos educativos;
- facilitar o acesso à área de login para usuários;
- destacar a localização da organização e suas iniciativas ambientais.
- facilidade para telas mobile.

## Páginas principais
- **index.html**: página inicial com banner, sobre a ONG, notícias, blog, projetos e mapa de localização.
- **logarL.html**: tela de login.
- **criarConta.html**: tela para criação de conta.
- **esqueciminhasenhaL.html**: tela para redefinição de senha.

## Estrutura do projeto
- **CSS/**: arquivos de estilo do site.
  - `style.css` para a página inicial.
  - `styles.css` para telas de autenticação.
  - `logar.css` para o layout da tela de login.
- **js/**: scripts JavaScript utilizados para interações simples, como mostrar/ocultar senha.
- **img/**: imagens, logos e ilustrações utilizadas no site.
- **HTML/**: pasta destinada a arquivos HTML adicionais (se necessário no desenvolvimento).

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript
- Google Fonts
- Integração com mapa via iframe

## Como executar
1. Abra o arquivo `index.html` em um navegador.
2. Ou utilize um servidor local simples, por exemplo:
   ```bash
   python -m http.server
   ```
3. Acesse no navegador o endereço indicado pelo servidor.

## Observações
- O projeto é totalmente estático, sem conexão com banco de dados.
- Algumas telas possuem interação visual, como botão para alternar entre tema claro e escuro.
- As imagens e estilos estão organizados em pastas separadas para facilitar manutenção.

## Autor
Projeto desenvolvido para representar a identidade visual e a proposta da MAE Natureza.
