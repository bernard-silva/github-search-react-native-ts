# Desafio: App para busca no GitHub

<h6> Don't speak Portuguese? <a href="https://github.com/bernard-silva/github-search-react-native-ts">Click here</a> to view this page in English.<h6>

**Objetivo do desafio**: Implementar uma página de busca que traga dados do usuário do GitHub e ao clicar na foto retorne mais detalhes e uma lista dos seus repositórios, onde ao tocar em um deles deve ser direcionado ao repositorio no site do GitHub. Também exibir um menu com o histórico dos usuários pesquisados.

### Preview

<p align="center">
  <img alt="Prewview" src=".github/preview.png" width="100%">
</p>

### Ponto de atenção

Para evitar que a cada informação digitada no input da pesquisa a API do GitHub seja requisitada foi utilizado a biblioteca React Query juntamente com Zustand e Async Storage, para assim buscar os dados pesquisados anteriormente no cache do aplicativo melhorando a performance.

### Ferramentas utilizadas

- <a href="https://axios-http.com/" target="_blank">React Native (Expo)</a>
- <a href="https://tailwindcss.com/" target="_blank">TypeScript</a>
- <a href="https://react.dev/" target="_blank">Axios</a>
- <a href="https://tanstack.com/" target="_blank">Styled Components</a>
- <a href="https://tanstack.com/" target="_blank">React Query</a>
- <a href="https://www.react-hook-form.com/" target="_blank">React Navigation</a>
- <a href="https://www.react-hook-form.com/" target="_blank">Zustand</a>

### O porquê das ferramentas?

- **Performance**: o casamento do **React Query + Zustand** permite um uso mais performatico do aplicativo uma vez que com o React Query é possível ter um gerenciamento mais flexível dos estados do servidor quando lidando com a API, utilizando assim o cache do dispositivo para pesquisas recentes e o Zustand para persistencia dos dados em Async Storage.
- **Estilização personalizável**: o **Styled Components**
  permite escrever estilos CSS dentro do JavaScript, transformando-os em componentes e
  melhorando a arquitetura e a manutenção do código.
- **Consumo de APIs**: com o axios realizamos requisições HTTP em aplicativos
  web, oferecendo recursos avançados para uma comunicação eficiente com
  servidores.

### Como executar?

> Necessário possuir o gerenciador de
> pacotes/dependências <a href="https://classic.yarnpkg.com/" target="_blank">yarn</a> em
> sua máquina e um emulador de dispositivo (Android ou iOS) ou scannear o QR Code gerado em seu celular com o app Expo GO

```
git clone https://github.com/bernard-silva/github-search-react-native-ts.git && cd github-search-react-native-ts
```

- Navegar até a raiz do projeto
- Instale as dependências com `yarn install`
- Execute o projeto com `yarn start`
- Abra no emulador teclando a letra `a` ou scanneando pelo app Expo GO
