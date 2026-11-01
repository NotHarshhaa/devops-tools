# DevOps Tools Website

This is a [Next.js](https://nextjs.org/) website that showcases the curated list of DevOps tools from the main repository. The website provides a user-friendly interface to browse and explore the extensive collection of DevOps tools organized by category.

## Features

- Modern, responsive UI built with Next.js (App Router) and Tailwind CSS
- Global search across all categories (press `/` to focus)
- Interactive tool browsing by category with search and type filters
- Dark/light mode support (persisted, respects system preference, no flash on load)
- Statically generated category pages with per-page metadata
- Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm (or yarn/pnpm)

### Installation & Running

1. Navigate to the website directory:

   ```bash
   cd devops-tools/website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

Or use the interactive launcher (works from any directory):

```bash
./start.sh
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Updating Tools Data

All tool and category data lives in a single source of truth: [`lib/data.ts`](./lib/data.ts). The home page, categories index, and every category page read from it.

To add a new tool or update an existing one:

1. Open `lib/data.ts` and find the appropriate category in the `CATEGORIES` array.
2. Add or update a tool entry following the existing format:

   ```typescript
   {
     name: "Tool Name",
     url: "https://tool-website.com/",
     description: "Brief description of the tool.",
     type: "Open Source | Free | Paid | Free & Paid",
   }
   ```

Counts, filters, and search are all derived automatically - no other changes needed.

## Project Structure

- `/app`: Next.js App Router files
  - `/components`: Reusable UI components (Navbar, Footer, ToolCard, ThemeProvider, CategoryIcon)
  - `/categories/[slug]`: Dynamically generated category pages
  - `/globals.css`: Global styles using Tailwind CSS
  - `/page.tsx`: Home page
  - `/layout.tsx`: Root layout (metadata, fonts, theme bootstrap)
- `/lib/data.ts`: Single source of truth for categories and tools

## Contributing

Contributions are welcome! If you'd like to add new tools or improve the website, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the same license as the main repository.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Heroicons](https://heroicons.com/)
