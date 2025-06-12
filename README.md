# 🧩 UI Components – Button

Um botão personalizável e reutilizável com suporte a TailwindCSS e ícones do [Lucide Icons](https://lucide.dev/), ideal para projetos React com `Next.js`.

## ✨ Características

- Totalmente estilizado com **TailwindCSS**
- Suporte a **temas claro/escuro**
- Suporte a **ícones do Lucide**
- Variações de **cor e tamanho**
- Acessibilidade com `focus:outline` e `disabled`

## 📦 Instalação

Para usar este componente, você precisa instalar a biblioteca `sl-ui` no seu projeto React. Execute o seguinte comando:

```bash
npm install sl-ui
```

## 🔧 Requisitos

Certifique-se de que o projeto que for usar este pacote tenha as dependências abaixo instaladas:

```bash
npm install react react-dom tailwindcss lucide-react clsx
```

## ⚙️ Configuração do TailwindCSS

No projeto que **consome** este pacote, edite o `tailwind.config.js` para incluir os componentes:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/sua-ui-lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 💡 Uso

```tsx
import { Button } from "sua-ui-lib";
import { Plus } from "lucide-react";

export default function Example() {
  return (
    <Button variant="blue" size="md" icon={Plus}>
      Adicionar
    </Button>
  );
}
```

## 🧰 Props

| Propriedade | Tipo                      | Padrão      | Descrição                                         |
| ----------- | ------------------------- | ----------- | ------------------------------------------------- | ----------- | ---------------- | ------------ |
| `variant`   | `"emerald"` \\            | `"blue"` \\ | `"red"` \\                                        | `"neutral"` | `"emerald"`      | Cor do botão |
| `size`      | `"sm"` \\                 | `"md"` \\   | `"lg"`                                            | `"md"`      | Tamanho do botão |
| `icon`      | `LucideIcon`              | `undefined` | Ícone do [Lucide](https://lucide.dev/) à esquerda |
| `children`  | `React.ReactNode`         | –           | Texto interno do botão                            |
| `disabled`  | `boolean`                 | `false`     | Desativa o botão                                  |
| ...props    | `HTMLButtonElement` props | –           | Eventos e atributos nativos (ex: `onClick`)       |

## 📁 Estrutura do Projeto (mínima)

```module
my-ui-lib/
├── src/
│ └── components/
│ └── Button.tsx
├── package.json
├── tsconfig.json
├── README.md
```

## 📖 Licença

MIT © SeuNome
