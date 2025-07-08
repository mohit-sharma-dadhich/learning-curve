
# 🌬️ Tailwind CSS – Utility-First CSS Framework

Tailwind CSS is a **utility-first CSS framework**. Instead of writing custom CSS, you apply predefined classes directly in HTML. It supports rapid development with responsive utilities, theme customization, and excellent developer experience.

---


## 📦 Core Concepts in Tailwind

Tailwind uses **utility classes** to apply single-purpose styles. You can chain multiple classes together for layout, typography, spacing, and responsiveness — without writing custom CSS.

---

### 🔹 Responsive Design with Breakpoints

Tailwind uses mobile-first breakpoints. To apply a style only on specific screen sizes, prefix it with a breakpoint name:

| Breakpoint | Prefix | Min Width |
|------------|--------|------------|
| `sm:`      | Small  | `640px`    |
| `md:`      | Medium | `768px`    |
| `lg:`      | Large  | `1024px`   |
| `xl:`      | X-Large| `1280px`   |
| `2xl:`     | 2X-Large | `1536px` |

**Example:** Only apply `text-center` on small screens and `text-left` on larger ones:

```html
<p class="sm:text-center md:text-left text-sm">
  Responsive text!
</p>
```

---

### 🔹 Common Utility Classes

#### 📐 Spacing (Margin / Padding)

| Class     | Description             |
|-----------|--------------------------|
| `m-4`     | margin: 1rem             |
| `p-2`     | padding: 0.5rem          |
| `mt-6`    | margin-top: 1.5rem       |
| `px-3`    | padding-left & right     |
| `py-2`    | padding-top & bottom     |

#### 📏 Width & Height

| Class      | Description          |
|------------|----------------------|
| `w-full`   | width: 100%          |
| `w-1/2`    | width: 50%           |
| `h-screen`| height: 100vh        |
| `h-[2px]`  | Custom height: 2px   |
| `w-[80%]`  | Custom width: 80%    |

Use square brackets `[...]` to set **specific custom values** like `h-[40px]`, `w-[90%]`, `top-[10px]`, etc.

---

### 🔹 Text Utilities

| Class           | Description                 |
|------------------|-----------------------------|
| `text-lg`        | Large text                 |
| `text-center`    | Center align text          |
| `font-bold`      | Bold font                  |
| `text-gray-600`  | Gray color text            |
| `truncate`       | Truncate long text with `...` |

---

### 🔹 Flexbox & Grid

**Flexbox:**

```html
<div class="flex items-center justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

Useful classes:
- `flex`, `flex-col`, `flex-row`
- `items-center`, `justify-between`, `gap-4`

**Grid:**

```html
<div class="grid grid-cols-2 gap-4">
  <div>Box A</div>
  <div>Box B</div>
</div>
```

---

### 🔹 Shadows & Borders

| Class             | Description                  |
|-------------------|------------------------------|
| `shadow`          | Default shadow               |
| `shadow-md`       | Medium shadow                |
| `shadow-lg`       | Large shadow                 |
| `border`          | 1px solid border             |
| `border-2`        | 2px border                   |
| `rounded`         | Border radius                |
| `rounded-full`    | Circle (pill)                |

---

### 🧪 Bonus: Combining Everything

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
  Click me
</button>
```

---

Let me know if you'd like to continue with `hover`, `focus`, `dark mode`, `grid layout`, or `custom config` next.
