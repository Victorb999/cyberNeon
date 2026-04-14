# ⚡ CyberNeon UI

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![React](https://img.shields.io/badge/-React_19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/-Tailwind_v4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Sharp Edges. Tonal Surfaces. Neon Accents.**

CyberNeon is a premium React UI library built for those who reject the softness of modern web design. It embraces a **Neon Brutalist** aesthetic—combining the raw, high-contrast energy of brutalist architecture with the vibrant, glowing aesthetics of cyberpunk.

---

## 🎨 Design Philosophy

CyberNeon strictly adheres to a set of visual laws to maintain its unique identity:

-   **Zero Rounding**: Everything is `border-radius: 0px`. No exceptions. Hard edges only.
-   **Tonal Logic**: Surfaces use a sophisticated hierarchy of dark tones to create depth without relying on shadows.
-   **Neon Feedback**: Interactive states are highlighted with vibrant neon accents (Cyan, Magenta, Yellow, Lime).
-   **Glow & Punch**: Subtle text-shadows and high-contrast borders ensure every element pops against dark backgrounds.
-   **Angled Precision**: Optional "cut" corners and geometric shapes reinforce the industrial, high-tech feel.

---

## 🛠️ Tech Stack

-   **Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite 6](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Primitives**: [Radix UI](https://www.radix-ui.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Documentation**: [Storybook 8](https://storybook.js.org/)

---

## 🚀 Quick Start

### Installation

```bash
npm install cyberneon
```

### Usage

1. **Import Styles**: Add the CyberNeon CSS to your main entry point (e.g., `main.tsx` or `App.tsx`).

```tsx
import 'cyberneon/style.css';
```

2. **Start Building**:

```tsx
import { Button, Card, Typography } from 'cyberneon';

function App() {
  return (
    <Card variant="tonal">
      <Typography variant="h1" neon="cyan">System Online</Typography>
      <Button variant="primary" size="lg">
        Execute Protocol
      </Button>
    </Card>
  );
}
```

---

## 📦 Components

Our library is expanding rapidly. Currently available:

| Category | Components |
| :--- | :--- |
| **Actions** | `Button`, `Select`, `Switch` |
| **Data Entry** | `Input`, `Checkbox`, `RadioGroup` |
| **Data Display** | `Table`, `List`, `ListItem`, `Tooltip`, `StatusTag` |
| **Layout** | `Card`, `Decorative` |
| **Foundation** | `Typography` |

---

## 🏗️ Local Development

Clone the repository and get the development environment running:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```

3. **Launch Storybook**:
   ```bash
   npm run storybook
   ```

---

## 🔮 Roadmap

- [ ] Breadcrumbs & Navigation patterns
- [ ] Dialog/Modal System (Brutalist style)
- [ ] Advanced Data Grid
- [ ] Animation system for neon transitions

---

## 📄 License

MIT © 2026 CyberNeon Team
