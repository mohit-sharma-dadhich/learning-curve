# 🌐 Portfolio Landing Page

## ✅ What I Learned

- **HTML Structure & Semantics**
  - Organized the layout using semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
  - Maintained clean separation of concerns between structure (HTML) and style (CSS)
  - Used `<address>` for contact info to improve semantic meaning

- **Navigation Bar**
  - Created a 2-column layout with CSS Grid: `grid-template-columns: 1fr 1fr`
  - Aligned logo and menu items using `justify-content` and `align-items`
  - Applied hover effects on navigation links

- **Typography & Font Styling**
  - Used system font `Times New Roman` for a clean, readable feel
  - Applied font weights and sizes consistently for visual hierarchy

- **Flexbox Layout**
  - Used `display: flex` for multiple sections (intro, about, contact)
  - Aligned text and image side-by-side in `.intro` and `.aboutme` sections
  - Practiced spacing using `gap`, `margin`, and `padding`

- **Image Styling**
  - Styled images using `border-radius: 25%` for a modern soft-corner look
  - Controlled image size with `width: 30vw`
  - Kept responsive layout without explicitly using media queries

- **Project Cards (Showcase Section)**
  - Used **CSS Grid** to create a two-column layout for projects
  - Created visually appealing card backgrounds with:
    - `background-image`, `background-size: cover`, `background-position: center`
    - Added a transparent overlay using `::before` pseudo-element and `z-index`
  - Enabled scrollable content inside cards using `overflow-y: auto`
  - Styled project titles and descriptions individually using different color schemes

- **Hover & Scroll Effects**
  - Smooth hover transition on project titles using `transition: 0.3s ease-in`
  - Controlled scrollbar width for minimal visual distraction

- **Contact Section**
  - Used semantic HTML `<address>` and formatted contact links with:
    - `mailto:` for email
    - `tel:` for phone

- **Footer**
  - Simple, centered footer using Flexbox
  - Used `&copy;` symbol for copyright

---

## 💡 Tips & Best Practices

- Use `z-index` and `position: relative/absolute` wisely when layering content
- Avoid mixing multiple layout systems unnecessarily (stick to Flexbox or Grid per section)
- Always use `alt` attributes for images (important for accessibility)
- You can use pseudo-elements like `::before` to add design effects without cluttering HTML
- Even if media queries aren't used yet, always test on different screen sizes and plan ahead
