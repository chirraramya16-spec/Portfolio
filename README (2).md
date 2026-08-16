# Portfolio — Chirra Ramya

A multi-page personal portfolio website built with semantic HTML5 and WCAG accessibility guidelines, with a mobile-first responsive layout and a light/dark theme.

## 🔗 Live site

https://chirraramya16-spec.github.io/portfolio

## Pages

- **Home** (`index.html`) — introduction and featured work
- **About** (`about.html`) — background, education, and certifications
- **Projects** (`projects.html`) — Automated Attendance System Using Face Recognition
- **Contact** (`contact.html`) — accessible, tab-navigable contact form

## Features

- Semantic HTML5 structure: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- ARIA labels and roles for screen reader support
- SEO-friendly meta tags (title, description, Open Graph)
- Fully keyboard-navigable contact form with inline validation
- CSS Grid for page-level and two-dimensional layouts (page shell, header, About/Contact sidebar layouts)
- Flexbox for component-level alignment (nav, buttons, tags, footer)
- Mobile-first responsive design with `min-width` media queries at 40em/48em/60em/64em/80em
- Light/dark theme driven by CSS custom properties, toggleable and saved across visits
- Fluid typography using `clamp()`

## Built with

- HTML5
- CSS3 (Grid, Flexbox, custom properties)
- Vanilla JavaScript

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `about.html` | About page |
| `projects.html` | Projects page |
| `contact.html` | Contact page with form |
| `style.css` | Shared stylesheet |
| `nav.js` | Mobile navigation menu toggle |
| `form.js` | Contact form validation |
| `theme.js` | Light/dark theme toggle |
