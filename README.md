# ReactShop ⚡

A frontend e-commerce demo built with **React 18** and **Vite**, designed to demonstrate component architecture, props flow, state management, and Virtual DOM reconciliation.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧩 Features

- **Live Search Filter** — products filter instantly as you type
- **Category Filter** — filter by Electronics, Wearable, Accessories
- **Cart Drawer** — animated drawer with quantity tracking
- **Product Badges** — sale / new / hot labels per product
- **Component Tree Visualizer** — see the component hierarchy live
- **Virtual DOM Demo** — watch React re-render in real time

## 🗂️ Project Structure

src/
├── App.jsx                  # Root — all global state   lives here
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── ui/                  # Button, Badge (reusable atoms)
│   ├── product/             # ProductCard, ProductGrid, ProductFilter, ProductBadge
│   ├── cart/                # CartDrawer
│   ├── hero/                # HeroSection
│   └── virtualdom/          # VirtualDomDemo, ComponentTreeVisualizer

## 🛠️ Tech Stack

- React 18
- Vite
- JavaScript (no TypeScript)
- CSS Variables (no UI library)

## 📚 Concepts Demonstrated

| Concept | Where |
|---|---|
| Component Architecture | Every JSX file |
| Props (top-down flow) | App → ProductGrid → ProductCard |
| useState | cart, search, activeCategory, added |
| Virtual DOM / Diffing | Search filter, VirtualDomDemo |
| key Prop | ProductGrid map() |