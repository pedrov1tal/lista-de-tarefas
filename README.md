# Lista de Tarefas

Uma interface web para organizar tarefas, construída com Next.js. O projeto apresenta um formulário para cadastrar tarefas, filtros visuais e um item de exemplo.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
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

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run build` | Gera a versão de produção. |
| `npm run start` | Executa a versão de produção após o build. |
| `npm run lint` | Verifica a qualidade do código com ESLint. |

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

O projeto está na etapa inicial de interface. O cadastro, os filtros e a edição de tarefas ainda precisam ser conectados à lógica e ao armazenamento de dados.
