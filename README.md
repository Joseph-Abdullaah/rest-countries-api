# Frontend Mentor - REST Countries API with color scheme switcher solution

This is a solution to the [REST Countries API with color scheme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-scheme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Frontend Mentor - REST Countries API with color scheme switcher solution](#frontend-mentor---rest-countries-api-with-color-scheme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Centralized State with Zustand](#centralized-state-with-zustand)
      - [Tailwind v4 Dark Mode](#tailwind-v4-dark-mode)
      - [Responsive Grid Layout](#responsive-grid-layout)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Project Structure](#project-structure)
  - [How to Run](#how-to-run)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

| Desktop (Dark)                                                                                                                          | Desktop (Light)                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![Desktop Design Dark](file:///c:/Users/Joseph/OneDrive/Desktop/FM%20challenges/rest-countries-api/design/desktop-design-home-dark.jpg) | ![Desktop Design Light](file:///c:/Users/Joseph/OneDrive/Desktop/FM%20challenges/rest-countries-api/design/desktop-design-home-light.jpg) |

| Detail (Dark)                                                                                                                            | Detail (Light)                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Detail Design Dark](file:///c:/Users/Joseph/OneDrive/Desktop/FM%20challenges/rest-countries-api/design/desktop-design-detail-dark.jpg) | ![Detail Design Light](file:///c:/Users/Joseph/OneDrive/Desktop/FM%20challenges/rest-countries-api/design/desktop-design-detail-light.jpg) |

### Links

- Solution URL: [Add your solution URL here]
- Live Site URL: [Add your live site URL here]

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Tailwind CSS v4](https://tailwindcss.com/) - For styles (using class-based dark mode)
- [Zustand](https://github.com/pmndrs/zustand) - State management (Theme and Search/Filter)
- [TanStack Query (React Query)](https://tanstack.com/query/latest) - For data fetching and caching
- [React Router v7](https://reactrouter.com/) - For application routing
- [Lucide React](https://lucide.dev/) - For icons

### What I learned

This project was a great exercise in managing complex UI state across routes and themes.

#### Centralized State with Zustand

I moved all global application state into Zustand stores to keep the UI components clean and focused on rendering.

```javascript
// src/store/filterStore.js
const useFilterStore = create((set) => ({
  searchQuery: "",
  selectedRegion: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedRegion: (region) => set({ selectedRegion: region }),
}));
```

#### Tailwind v4 Dark Mode

Implementing the class-based dark mode strategy in Tailwind v4 requires a specific variant configuration in the CSS:

```css
/* src/index.css */
@variant dark (&:where(.dark, .dark *));
```

#### Responsive Grid Layout

The layout uses a flexible CSS grid that adapts from 1 column on mobile to 4 columns on large desktops.

```javascript
/* src/Components/countries/CountryGrid.jsx */
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-18">
  {children}
</section>
```

### Continued development

- **Optimistic UI**: Implement placeholders (skeletons) while fetching detail data.
- **Improved Accessibility**: Enhancing keyboard navigation for the custom dropdown.
- **Unit Testing**: Adding tests for the filtering logic in `HomePage`.

### Useful resources

- [REST Countries API](https://restcountries.com/) - The API used for fetching country data.
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta) - Critical for setting up the new dark mode system.

## Project Structure

```text
src/
├── api/          # API client and fetch functions
├── Components/   # Reusable UI and Feature components
│   ├── countries/ # Country-specific components (Card, Detail, Grid)
│   └── ui/        # Shared UI components (Button, Input, Dropdown)
├── hooks/        # React Query hooks
├── layout/       # Layout structures (Header, Container)
├── pages/        # Application pages (Home, Detail)
├── store/        # Zustand stores (Theme, Filter)
└── App.jsx       # Routing and Configuration
```

## How to Run

1. Clone the repository
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`

## Author

- Website - [Your Name]
- Frontend Mentor - [@Joseph-Abdullaah](https://www.frontendmentor.io/profile/Joseph-Abdullaah)
