1. Configuração inicial: ✔

- Crie um novo projeto React usando `create-react-app` ou outra ferramenta de sua escolha. ✔
- Defina a estrutura básica do projeto, incluindo componentes principais, estilos e pastas para organizar o código. ✔

2. Criação do componente de Anotações: ✔

- Crie um componente principal chamado `NotesApp` que servirá como o contêiner principal para o aplicativo. ✔
- Dentro do componente `NotesApp`, defina o estado inicial para armazenar as anotações. O estado pode ser uma matriz de objetos, cada um representando uma anotação com propriedades como `id`, `title` e `content`. ✔
- Renderize uma lista de anotações no componente `NotesApp` usando o estado atual. ✔

3. Renderização das anotações: ✔

- Crie um novo componente chamado `NoteList` que será responsável por renderizar a lista de anotações. ✔
- Passe o estado de anotações como prop para o componente `NoteList`. ✔
- No componente `NoteList`, itere sobre o array de anotações e renderize cada uma delas em um componente separado chamado `NoteItem`. ✔
- O componente `NoteItem` deve exibir o título e o conteúdo da anotação. ✔

4. Adição de novas anotações: ✔

- Crie um novo componente chamado `NoteForm` que será responsável por adicionar novas anotações. ✔
- No componente `NoteForm`, defina um estado local para armazenar o título e o conteúdo da nova anotação. ✔
- Implemente um formulário com campos de entrada para o título e o conteúdo da anotação. ✔
- Adicione um manipulador de eventos para capturar as alterações nos campos de entrada e atualizar o estado local. ✔
- Adicione um botão de envio que, quando clicado, chamará uma função de manipulação de envio para adicionar a nova anotação ao estado global do `NotesApp`. ✔

Obs.: Os três últimos pontos foram substituídos pelo hook `react-hook-form`

5. Exclusão de anotações: ✔

- No componente `NoteItem`, adicione um botão de exclusão ao lado de cada anotação. ✔
- Implemente um manipulador de eventos que será acionado quando o botão de exclusão for clicado. ✔
- O manipulador de eventos deve chamar uma função no componente `NotesApp` para remover a anotação correspondente do estado. ✔

6. Edição de anotações:

- No componente `NoteItem`, adicione um botão de edição ao lado de cada anotação. ✔
- Implemente um manipulador de eventos que será acionado quando o botão de edição for clicado. ✔
- O manipulador de eventos deve chamar uma função no componente `NotesApp` para exibir um formulário de edição com os campos preenchidos com os dados da anotação correspondente. ✔
- No formulário de edição, os campos de entrada devem ser preenchidos com os dados da anotação selecionada. ✔
- Ao enviar o formulário de edição, atualize a anotação correspondente no estado global com os novos dados. ✔

7. Estilização e melhorias visuais:

- Adicione estilos CSS ao seu aplicativo de anotações para torná-lo mais atraente e usável.
- Considere o uso de uma biblioteca de componentes estilizados, como `styled-components` ou `Material-UI`, para facilitar a estilização.
- Adicione animações e transições suaves para melhorar a experiência do usuário ao adicionar, editar ou excluir anotações.

8. Funcionalidades adicionais (opcional):

- Implemente recursos adicionais, como pesquisa de anotações por título ou conteúdo.
- Adicione filtros ou categorias para organizar as anotações em diferentes grupos.
- Adicione uma funcionalidade de marcação para destacar anotações importantes ou concluídas.
- Explore outras melhorias e recursos que você achar relevantes para o aplicativo de anotações.

Lembre-se de testar e depurar seu aplicativo em cada etapa do desenvolvimento para garantir um funcionamento adequado. À medida que ganha mais experiência, você pode expandir e aprimorar o projeto de acordo com suas habilidades e necessidades específicas.