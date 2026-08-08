# Lista de Tarefas

Interface web para organizar tarefas, construída com Next.js. A página apresenta um campo de cadastro, filtros visuais, indicador de progresso e uma tarefa de exemplo.

## Funcionalidades de interface

- Campo e botão para cadastrar tarefas.
- Filtros visuais para todas, não finalizadas e concluídas.
- Exibição de tarefa com ações de edição e exclusão.
- Diálogo para editar uma tarefa.
- Alerta de confirmação para limpar tarefas concluídas.
- Indicador de tarefas concluídas, pendentes e progresso.

Os diálogos usam os componentes do projeto baseados em Base UI. Para que um `Button` seja o próprio gatilho, é usada a propriedade `render` em `DialogTrigger` e `AlertDialogTrigger`; `asChild` é uma API do Radix UI e não é compatível com estes componentes.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Base UI
- shadcn/ui
- Lucide React

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts disponíveis

| Comando         | Descrição                                  |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Inicia o ambiente de desenvolvimento.      |
| `npm run build` | Gera a versão de produção.                 |
| `npm run start` | Executa a versão de produção após o build. |
| `npm run lint`  | Verifica a qualidade do código com ESLint. |

## Estrutura principal

```text
src/
├── app/
│   ├── page.tsx       # Página principal
│   └── globals.css    # Estilos globais
├── components/ui/     # Componentes de interface
└── lib/               # Utilitários
```

## Status

O projeto está na etapa inicial da interface. O cadastro, os filtros, a edição e a exclusão ainda precisam ser conectados à lógica e ao armazenamento de dados.
