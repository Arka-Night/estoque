Nesse arquivo vou explicar sobre o projeto:

De começo, se quiser executa-lo, terá que executar yarn add package.json(ou npm install) em todos as 3 pastas,referentes a cada base a 
seguir do projeto:

1- Backend(api/servidor),
2- Frontend(site web),
3- Mobile(app android e ios)

Para configuração do projeto na sua maquina você terá que ir nas services da fronend e mobile e alterar os arquivos api e socket para abrir
a api do backend(que após instalação, pode-se so executar yarn start(ou start com npm)). Você não precisa necessariamente alterar os
arquivos citados se não quiser, aquelas configurações são apenas para acesso de outra rede alem da localhost.

Se decidir fazer as alterações, você deve executar um yarn build(ou com npm) na frontend e arrastar a pasta build(quando o build terminar)
para a pasta backend, o que ocasionará num alerta de mudança de pasta, que você pode apenas aceitar e mudar a pasta.

Na mobile bastar executar yarn start(ou com npm) e abrir o app no seu celular ou simulador mobile com a ferramenta do expo.

Sobre o projeto:

Esse projeto é basicamente um aplicativo para fazer um gerenciamento do estoque da empresa a qual pediu pelo mesmo.

Nele você pode adicionar os itens que estão no estoque, gerenciar entradas dos mesmos, gerenciar saídas, e pedir para o administrador deixar
separado o item para saída.

O projeto levou mais ou menos 2 meses para ser completado.