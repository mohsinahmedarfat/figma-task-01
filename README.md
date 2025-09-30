# Figma Task – React Tailwind Project

This project is a responsive React application built with **Vite**, **Tailwind CSS**, and **Lucide Icons**. It replicates a Figma design for a plumbing services website, including FAQ, Contact, and Footer sections. All content and constants are modularized for easy maintenance.

---

## Table of Contents

- [Figma Task – React Tailwind Project](#figma-task--react-tailwind-project)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Accordion Section](#accordion-section)
    - [Contact Section](#contact-section)
    - [Footer Section](#footer-section)
  - [Technologies](#technologies)
  - [Scripts](#scripts)

---

## Features

- **Accordion Section:** Frequently Asked Questions with collapsible items.  
- **Contact Section:** Hero card with heading, paragraph, and CTA button.  
- **Footer Section:** Responsive footer with logo, social icons, navigation, and contact info.  
- **Responsive Design:** Fully mobile and tablet optimized.  
- **Tailwind CSS Animations:** Smooth entrance animations with delay controls.  
- **Constants Driven:** All content (links, contact info, FAQ data) stored in `src/constants`.

---

## Project Structure

```
src/
├─ components/
│ └─ modules/
│ ├─ AccordionSection.tsx
│ ├─ Contact.tsx
│ └─ Footer.tsx
├─ constants/
│ ├─ footerData.ts
│ └─ faqData.ts
├─ App.tsx
└─ main.tsx
package.json
tailwind.config.js
vite.config.ts
```


- **AccordionSection.tsx:** Displays FAQ data using Radix Accordion components.  
- **Contact.tsx:** Card section with heading, paragraph, and booking button.  
- **Footer.tsx:** Responsive footer using constants from `footerData.ts`.  
- **Constants:** All reusable data like links and contact info.

---

## Installation

1. Clone the repository
   ```bash
   git clone <repo-url>
   cd figma-task
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173
 in your browser.


## Usage

### Accordion Section
- Pulls FAQ data from `src/constants/faqData.ts`.
- Each item is collapsible using Radix Accordion.

### Contact Section
- Hero card with a `Button` and `ArrowRightIcon`.
- Styling via Tailwind and responsive padding.

### Footer Section
- Pulls navigation links and contact info from `src/constants/footerData.ts`.
- Each contact icon is rendered dynamically.
- Fully responsive: On tablet, navigation stacks under logo and social section.

## Technologies

- React 19
- Vite 7
- Tailwind CSS 4
- Lucide React Icons
- Radix UI Accordion
- TypeScript
- tw-animate-css for animation utilities

## Scripts
```bash
npm run dev       # Start development server
npm run build     # Build production files
npm run preview   # Preview production build
npm run lint      # Lint project
```