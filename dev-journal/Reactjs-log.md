# React

## 📚 Table of Contents

1. [Setup](#1-setup)  
2. [Conceptual Foundations](#2-conceptual-foundations)  
3. [JSX & Rendering](#3-jsx--rendering)  
4. [Components](#4-components)  

---

## 1. Setup

### 1.1 React Setup with Vite

Scaffold and run a new React project with Vite:

```bash
npm create vite@latest . --template react
cd your-project
npm install
npm run dev
```

- `npm create vite@latest` → creates a new Vite+React scaffold  
- `npm run dev` → starts dev server (HMR, Fast Refresh)


### 1.2 Fast Refresh and File Structure

Vite’s Fast Refresh only auto-updates when components live in separate files.

✅ Suggested structure:

```
/src
  ├─ main.jsx
  ├─ App.jsx
  └─ components/
      ├─ Nav.jsx
      ├─ Main.jsx
      ├─ Footer.jsx
      └─ ShowMsg.jsx
```

---

## 2. Conceptual Foundations

### 2.1 Difference Between a Library and a Framework

| Library                        | Framework                       |
|--------------------------------|---------------------------------|
| You call the code              | It calls your code (IoC)        |
| Focused tools for tasks        | Full app structure & conventions|
| Example: React, Lodash         | Example: Angular, Next.js       |


### 2.2 Is React a Library or Framework?

React is a **library** for building UI components:

- Only handles **View** layer  
- You choose routing, state, build tools  
- Can feel like a framework when combined (Router, Redux)

---

## 3. JSX & Rendering

### 3.1 What is JSX

JSX = JavaScript XML.  
Write HTML‑like syntax in JS, compiled to `React.createElement()`.

Example:

```jsx
const element = <h1>Hello JSX</h1>;
```


### 3.2 Basic JSX Syntax

- Must return a single parent element  
- Use `className` (not `class`), `htmlFor` (not `for`)  
- Embed expressions in `{}`

Example:

```jsx
function Welcome() {
  return (
    <div>
      <h2 className="text-xl">Hi there</h2>
      <p>{2 + 3}</p>
    </div>
  );
}
```


### 3.3 createRoot and Rendering

In React 18+, use `createRoot()`:

```j
import { createRoot } from 'react-dom/client';

function App() {
  return <h1>Hello World</h1>;
}

createRoot(document.querySelector('#root')).render(<App />);
```


### 3.4 Self-Closing Elements

All elements must be closed:

```jsx
<img src="logo.png" alt="Logo" />
<input type="text" />
<br />
```


### 3.5 React Fragments (`<> </>`)

Group siblings without an extra DOM node:

```jsx
function Info() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

---

## 4. Components

### 4.1 Custom Components

Break UI into reusable pieces:

```j
function Nav() {
  return <nav>This is the nav</nav>;
}

function Main() {
  return (
    <main>
      This is the main section
      <ShowMsg />
    </main>
  );
}

function Footer() {
  return <footer>This is the footer</footer>;
}

function ShowMsg() {
  return (
    <>
      <h1 className="text-2xl font-bold m-1 text-white">Hello from Mohit</h1>
      <p className="font-semibold m-1 text-white">How are you?</p>
    </>
  );
}

createRoot(document.querySelector("#root")).render(
  <>
    <Nav />
    <Main />
    <Footer />
  </>
);
```


### 4.2 Rendering Semantic Elements in `#root`

Always use semantic tags inside your mount point:

```jsx
function App() {
  return (
    <>
      <header>Site Header</header>
      <main>Welcome to my site</main>
      <footer>Footer content</footer>
    </>
  );
}
```
