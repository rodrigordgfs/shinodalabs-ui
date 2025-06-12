# 🎨 ShinodaLabs UI

Uma biblioteca de componentes React moderna e elegante, construída com TailwindCSS e TypeScript. Projetada para oferecer componentes reutilizáveis com excelente experiência de desenvolvedor.

## ✨ Características

- 🎯 **Componentes modernos** com design limpo e profissional
- 🌙 **Suporte completo a tema escuro/claro**
- 🎨 **Totalmente estilizado com TailwindCSS**
- 🔧 **TypeScript nativo** com tipagem completa
- ♿ **Acessibilidade** seguindo as melhores práticas
- 🚀 **Performance otimizada** com bundle pequeno
- 📱 **Responsivo** por padrão

## 📦 Instalação

```bash
npm install shinodalabs-ui
```

### Dependências necessárias

Certifique-se de ter essas dependências instaladas no seu projeto:

```bash
npm install react react-dom tailwindcss lucide-react clsx
```

## ⚙️ Configuração do TailwindCSS

Para que os estilos funcionem corretamente, você precisa configurar o TailwindCSS no seu projeto para incluir os componentes da biblioteca.

### 1. Instale o TailwindCSS (se ainda não tiver)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure o `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // 👇 Adicione esta linha para incluir os componentes da biblioteca
    "./node_modules/shinodalabs-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // 👇 Adicione suporte ao modo escuro
  darkMode: 'class',
}
```

### 3. Importe os estilos do Tailwind no seu CSS

```css
/* globals.css ou app.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🧩 Componentes

### Button

Um botão versátil e customizável com suporte a ícones e múltiplas variações.

#### Importação

```tsx
import { Button } from 'shinodalabs-ui';
```

#### Uso básico

```tsx
import { Button } from 'shinodalabs-ui';

export default function Example() {
  return (
    <div className="space-y-4">
      <Button>Botão padrão</Button>
      <Button variant="blue">Botão azul</Button>
      <Button variant="red" size="lg">Botão grande vermelho</Button>
    </div>
  );
}
```

#### Com ícones

```tsx
import { Button } from 'shinodalabs-ui';
import { Plus, Download, Trash2, Settings } from 'lucide-react';

export default function ButtonsWithIcons() {
  return (
    <div className="flex gap-4">
      <Button icon={Plus}>Adicionar</Button>
      <Button variant="blue" icon={Download}>Download</Button>
      <Button variant="red" icon={Trash2}>Excluir</Button>
      <Button variant="neutral" icon={Settings}>Configurações</Button>
    </div>
  );
}
```

#### Estados e interações

```tsx
import { Button } from 'shinodalabs-ui';
import { Save, Send } from 'lucide-react';

export default function ButtonStates() {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div className="space-y-4">
      {/* Botão normal */}
      <Button onClick={handleClick}>Clique aqui</Button>
      
      {/* Botão desabilitado */}
      <Button disabled icon={Save}>Salvando...</Button>
      
      {/* Botão com classe customizada */}
      <Button 
        variant="blue" 
        className="w-full" 
        icon={Send}
      >
        Enviar formulário
      </Button>
    </div>
  );
}
```

#### Props do Button

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `variant` | `"emerald"` \| `"blue"` \| `"red"` \| `"neutral"` | `"emerald"` | Define a cor do botão |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Define o tamanho do botão |
| `icon` | `LucideIcon` | `undefined` | Ícone do Lucide React exibido à esquerda do texto |
| `children` | `React.ReactNode` | - | Conteúdo do botão (texto, elementos, etc.) |
| `disabled` | `boolean` | `false` | Desabilita o botão |
| `className` | `string` | `undefined` | Classes CSS adicionais |
| `onClick` | `(event: MouseEvent) => void` | `undefined` | Função executada ao clicar |
| `...props` | `HTMLButtonAttributes` | - | Todas as props nativas do elemento `<button>` |

#### Variações de cor

```tsx
<div className="flex gap-2">
  <Button variant="emerald">Emerald</Button>
  <Button variant="blue">Blue</Button>
  <Button variant="red">Red</Button>
  <Button variant="neutral">Neutral</Button>
</div>
```

#### Tamanhos disponíveis

```tsx
<div className="flex items-center gap-2">
  <Button size="sm">Pequeno</Button>
  <Button size="md">Médio</Button>
  <Button size="lg">Grande</Button>
</div>
```

## 🌙 Suporte ao Modo Escuro

Todos os componentes suportam automaticamente o modo escuro quando você configura o TailwindCSS com `darkMode: 'class'`.

### Exemplo de implementação

```tsx
// Componente para alternar tema
import { useState, useEffect } from 'react';
import { Button } from 'shinodalabs-ui';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Button
      variant="neutral"
      icon={isDark ? Sun : Moon}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? 'Modo Claro' : 'Modo Escuro'}
    </Button>
  );
}
```

## 📱 Responsividade

Os componentes são responsivos por padrão. O ícone do botão, por exemplo, tem espaçamento adaptativo:

```tsx
// Em telas pequenas, o ícone fica colado ao texto
// Em telas médias e maiores (md+), há espaçamento
<Button icon={Plus}>
  Adicionar item
</Button>
```

## 🎯 Exemplos Práticos

### Formulário de login

```tsx
import { Button } from 'shinodalabs-ui';
import { LogIn, UserPlus } from 'lucide-react';

export default function LoginForm() {
  return (
    <form className="space-y-4 max-w-md mx-auto">
      <input 
        type="email" 
        placeholder="Email"
        className="w-full p-3 border rounded-md"
      />
      <input 
        type="password" 
        placeholder="Senha"
        className="w-full p-3 border rounded-md"
      />
      
      <div className="flex gap-2">
        <Button 
          variant="blue" 
          icon={LogIn}
          className="flex-1"
        >
          Entrar
        </Button>
        <Button 
          variant="neutral" 
          icon={UserPlus}
          className="flex-1"
        >
          Cadastrar
        </Button>
      </div>
    </form>
  );
}
```

### Dashboard com ações

```tsx
import { Button } from 'shinodalabs-ui';
import { Plus, Download, Filter, Search } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        <div className="flex gap-2">
          <Button variant="neutral" icon={Filter} size="sm">
            Filtrar
          </Button>
          <Button variant="blue" icon={Download} size="sm">
            Exportar
          </Button>
          <Button icon={Plus}>
            Novo Item
          </Button>
        </div>
      </div>
      
      {/* Conteúdo do dashboard */}
    </div>
  );
}
```

## 🔧 Desenvolvimento

### Estrutura do projeto

```
shinodalabs-ui/
├── src/
│   ├── components/
│   │   └── Button/
│   │       └── index.tsx
│   └── index.ts
├── dist/                 # Arquivos compilados
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

### Scripts disponíveis

```bash
# Compilar para produção
npm run build

# Desenvolvimento com watch mode
npm run dev

# Limpar pasta dist
npm run clean
```

## 📄 Licença

ISC © ShinodaLabs

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

**Feito com ❤️ pela equipe ShinodaLabs**