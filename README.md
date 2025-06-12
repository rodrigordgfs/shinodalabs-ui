# 🎨 ShinodaLabs UI

Uma biblioteca de componentes React moderna e elegante, construída com TailwindCSS e TypeScript. Projetada para oferecer componentes reutilizáveis com excelente experiência de desenvolvedor.

## 📋 Índice

- [✨ Características](#-características)
- [📦 Instalação](#-instalação)
- [⚙️ Configuração do TailwindCSS](#️-configuração-do-tailwindcss)
- [🧩 Componentes](#-componentes)
  - [Button](#button)
    - [Importação](#importação)
    - [Uso básico](#uso-básico)
    - [Com ícones](#com-ícones)
    - [Estados e interações](#estados-e-interações)
    - [Props do Button](#props-do-button)
    - [Variações de cor](#variações-de-cor)
    - [Tamanhos disponíveis](#tamanhos-disponíveis)
  - [Input](#input)
    - [Importação](#importação-1)
    - [Uso básico](#uso-básico-1)
    - [Input com senha](#input-com-senha)
    - [Input numérico](#input-numérico)
    - [Input de moeda](#input-de-moeda)
    - [Input com validação](#input-com-validação-e-elementos-extras)
    - [Props do Input](#props-do-input)
    - [Tipos especiais](#tipos-especiais)
- [🌙 Suporte ao Modo Escuro](#-suporte-ao-modo-escuro)
- [📱 Responsividade](#-responsividade)
- [🎯 Exemplos Práticos](#-exemplos-práticos)
  - [Formulário de login completo](#formulário-de-login-completo)
  - [Formulário de produto](#formulário-de-produto-com-preço)
  - [Dashboard com ações](#dashboard-com-ações)
- [🔧 Desenvolvimento](#-desenvolvimento)
- [📄 Licença](#-licença)
- [🤝 Contribuição](#-contribuição)

---

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
npm install react react-dom tailwindcss lucide-react clsx react-hook-form react-day-picker date-fns
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
  darkMode: "class",
};
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
import { Button } from "shinodalabs-ui";
```

#### Uso básico

```tsx
import { Button } from "shinodalabs-ui";

export default function Example() {
  return (
    <div className="space-y-4">
      <Button>Botão padrão</Button>
      <Button variant="blue">Botão azul</Button>
      <Button variant="red" size="lg">
        Botão grande vermelho
      </Button>
    </div>
  );
}
```

#### Com ícones

```tsx
import { Button } from "shinodalabs-ui";
import { Plus, Download, Trash2, Settings } from "lucide-react";

export default function ButtonsWithIcons() {
  return (
    <div className="flex gap-4">
      <Button icon={Plus}>Adicionar</Button>
      <Button variant="blue" icon={Download}>
        Download
      </Button>
      <Button variant="red" icon={Trash2}>
        Excluir
      </Button>
      <Button variant="neutral" icon={Settings}>
        Configurações
      </Button>
    </div>
  );
}
```

#### Estados e interações

```tsx
import { Button } from "shinodalabs-ui";
import { Save, Send } from "lucide-react";

export default function ButtonStates() {
  const handleClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div className="space-y-4">
      {/* Botão normal */}
      <Button onClick={handleClick}>Clique aqui</Button>

      {/* Botão desabilitado */}
      <Button disabled icon={Save}>
        Salvando...
      </Button>

      {/* Botão com classe customizada */}
      <Button variant="blue" className="w-full" icon={Send}>
        Enviar formulário
      </Button>
    </div>
  );
}
```

#### Props do Button

| Propriedade | Tipo                                              | Padrão      | Descrição                                         |
| ----------- | ------------------------------------------------- | ----------- | ------------------------------------------------- |
| `variant`   | `"emerald"` \| `"blue"` \| `"red"` \| `"neutral"` | `"emerald"` | Define a cor do botão                             |
| `size`      | `"sm"` \| `"md"` \| `"lg"`                        | `"md"`      | Define o tamanho do botão                         |
| `icon`      | `LucideIcon`                                      | `undefined` | Ícone do Lucide React exibido à esquerda do texto |
| `children`  | `React.ReactNode`                                 | -           | Conteúdo do botão (texto, elementos, etc.)        |
| `disabled`  | `boolean`                                         | `false`     | Desabilita o botão                                |
| `className` | `string`                                          | `undefined` | Classes CSS adicionais                            |
| `onClick`   | `(event: MouseEvent) => void`                     | `undefined` | Função executada ao clicar                        |
| `...props`  | `HTMLButtonAttributes`                            | -           | Todas as props nativas do elemento `<button>`     |

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

### Input

Um componente de input versátil com suporte a diferentes tipos, validação, formatação de moeda e recursos avançados.

#### Importação

```tsx
import { Input } from "shinodalabs-ui";
```

#### Uso básico

```tsx
import { Input } from "shinodalabs-ui";
import { useState } from "react";

export default function BasicInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-4">
      <Input
        label="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
      />

      <Input
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
      />
    </div>
  );
}
```

#### Input com senha

```tsx
import { Input } from "shinodalabs-ui";
import { useState } from "react";

export default function PasswordInput() {
  const [password, setPassword] = useState("");

  return (
    <Input
      label="Senha"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Digite sua senha"
    />
  );
}
```

#### Input numérico

```tsx
import { Input } from "shinodalabs-ui";
import { useState } from "react";

export default function NumericInput() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  return (
    <div className="space-y-4">
      <Input
        label="Telefone"
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        maxLength={11}
        placeholder="11999999999"
      />

      <Input
        label="Código de verificação"
        type="number"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        maxLength={6}
        centerContent
        placeholder="000000"
      />
    </div>
  );
}
```

#### Input de moeda

```tsx
import { Input } from "shinodalabs-ui";
import { useState } from "react";

export default function MoneyInput() {
  const [price, setPrice] = useState(0);
  const [salary, setSalary] = useState(0);

  return (
    <div className="space-y-4">
      <Input
        label="Preço do produto"
        type="money"
        value={price}
        onChange={(value) => setPrice(value as number)}
        currency="BRL"
        language="pt-BR"
      />

      <Input
        label="Salário (USD)"
        type="money"
        value={salary}
        onChange={(value) => setSalary(value as number)}
        currency="USD"
        language="en-US"
      />
    </div>
  );
}
```

#### Input com validação e elementos extras

```tsx
import { Input } from "shinodalabs-ui";
import { useState } from "react";
import { Info } from "lucide-react";

export default function AdvancedInput() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const validateUsername = (value: string) => {
    if (value.length < 3) {
      setError("Nome de usuário deve ter pelo menos 3 caracteres");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      setError("Apenas letras, números e underscore são permitidos");
    } else {
      setError("");
    }
  };

  return (
    <Input
      label="Nome de usuário"
      value={username}
      onChange={(e) => {
        const value = e.target.value;
        setUsername(value);
        validateUsername(value);
      }}
      error={error}
      placeholder="meu_usuario"
      headerRight={
        <div className="flex items-center text-zinc-500">
          <Info size={16} />
          <span className="ml-1 text-xs">Disponível</span>
        </div>
      }
    />
  );
}
```

#### Props do Input

| Propriedade     | Tipo                  | Padrão           | Descrição                                                               |
| --------------- | --------------------- | ---------------- | ----------------------------------------------------------------------- |
| `label`         | `string`              | -                | **Obrigatório.** Texto do label do input                                |
| `type`          | `string`              | `"text"`         | Tipo do input: `"text"`, `"email"`, `"password"`, `"number"`, `"money"` |
| `value`         | `string \| number`    | `undefined`      | Valor controlado do input                                               |
| `onChange`      | `function`            | `undefined`      | Função chamada quando o valor muda                                      |
| `error`         | `string`              | `undefined`      | Mensagem de erro a ser exibida                                          |
| `placeholder`   | `string`              | `undefined`      | Texto placeholder                                                       |
| `disabled`      | `boolean`             | `false`          | Desabilita o input                                                      |
| `maxLength`     | `number`              | `undefined`      | Limite máximo de caracteres (para type="number")                        |
| `headerRight`   | `React.ReactNode`     | `undefined`      | Elemento exibido à direita do label                                     |
| `centerContent` | `boolean`             | `false`          | Centraliza o conteúdo do input                                          |
| `currency`      | `string`              | `"BRL"`          | Código da moeda (para type="money")                                     |
| `language`      | `string`              | `"pt-BR"`        | Idioma para formatação (para type="money")                              |
| `id`            | `string`              | `auto-generated` | ID do input (gerado automaticamente se não fornecido)                   |
| `className`     | `string`              | `undefined`      | Classes CSS adicionais                                                  |
| `...props`      | `HTMLInputAttributes` | -                | Todas as props nativas do elemento `<input>`                            |

#### Tipos especiais

##### Input de Moeda (`type="money"`)

O input de moeda formata automaticamente valores monetários conforme você digita:

```tsx
// Formatação em Real Brasileiro
<Input
  label="Valor"
  type="money"
  currency="BRL"
  language="pt-BR"
  value={1234.56}
  onChange={(value) => console.log(value)} // 1234.56
/>
// Exibe: R$ 1.234,56

// Formatação em Dólar Americano
<Input
  label="Price"
  type="money"
  currency="USD"
  language="en-US"
  value={1234.56}
  onChange={(value) => console.log(value)} // 1234.56
/>
// Exibe: $1,234.56
```

##### Input Numérico (`type="number"`)

Aceita apenas dígitos e respeita o `maxLength`:

```tsx
<Input
  label="CEP"
  type="number"
  maxLength={8}
  value={cep}
  onChange={(e) => setCep(e.target.value)}
/>
```

##### Input de Senha (`type="password"`)

Inclui botão para mostrar/ocultar senha:

```tsx
<Input
  label="Senha"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

## 🌙 Suporte ao Modo Escuro

Todos os componentes suportam automaticamente o modo escuro quando você configura o TailwindCSS com `darkMode: 'class'`.

### Exemplo de implementação

```tsx
// Componente para alternar tema
import { useState, useEffect } from "react";
import { Button } from "shinodalabs-ui";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Button
      variant="neutral"
      icon={isDark ? Sun : Moon}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? "Modo Claro" : "Modo Escuro"}
    </Button>
  );
}
```

## 📱 Responsividade

Os componentes são responsivos por padrão. O ícone do botão, por exemplo, tem espaçamento adaptativo:

```tsx
// Em telas pequenas, o ícone fica colado ao texto
// Em telas médias e maiores (md+), há espaçamento
<Button icon={Plus}>Adicionar item</Button>
```

## 🎯 Exemplos Práticos

### Formulário de login completo

```tsx
import { Button, Input } from "shinodalabs-ui";
import { LogIn, UserPlus } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!password) {
      newErrors.password = "Senha é obrigatória";
    } else if (password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login válido:", { email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <Input
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        placeholder="seu@email.com"
      />

      <Input
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        placeholder="Digite sua senha"
      />

      <div className="flex gap-2 pt-4">
        <Button type="submit" variant="blue" icon={LogIn} className="flex-1">
          Entrar
        </Button>
        <Button
          type="button"
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

### Formulário de produto com preço

```tsx
import { Button, Input } from "shinodalabs-ui";
import { Save, Package } from "lucide-react";
import { useState } from "react";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [code, setCode] = useState("");

  return (
    <form className="space-y-4 max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Novo Produto</h2>

      <Input
        label="Nome do produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o nome do produto"
      />

      <Input
        label="Preço"
        type="money"
        value={price}
        onChange={(value) => setPrice(value as number)}
        currency="BRL"
        language="pt-BR"
      />

      <Input
        label="Código do produto"
        type="number"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        maxLength={10}
        centerContent
        placeholder="0000000000"
        headerRight={<span className="text-xs text-zinc-500">10 dígitos</span>}
      />

      <Button type="submit" icon={Save} className="w-full">
        Salvar Produto
      </Button>
    </form>
  );
}
```

### Dashboard com ações

```tsx
import { Button } from "shinodalabs-ui";
import { Plus, Download, Filter, Search } from "lucide-react";

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
          <Button icon={Plus}>Novo Item</Button>
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
│   │   ├── Button/
│   │   │   └── index.tsx
│   │   └── Input/
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
