# DevOps Tools Website

This is a Next.js website that showcases the curated list of DevOps tools from the main repository. The website provides a user-friendly interface to browse and explore the extensive collection of DevOps tools organized by category.

## Features

- Modern, responsive UI built with Next.js and Tailwind CSS
- Interactive tool browsing by categories
- Detailed information about each tool
- Dark/light mode support
- Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devops-tools.git
   ```

## Updating Tools Data

The website displays tool data from a comprehensive collection defined in `page.tsx`. To add new tools or update existing ones:

1. Navigate to the data structure in `app/page.tsx`
2. Find the appropriate category or add a new one following the existing format
3. Add or update tool entries with the following structure:
   ```typescript
   {
     name: "Tool Name",
     url: "https://tool-website.com/",
     description: "Brief description of the tool.",
     type: "Open Source | Free | Paid | Enterprise | etc.",
   }
   ```
4. Ensure you maintain the TypeScript interfaces for proper type checking

2. Navigate to the website directory:
   ```bash
   cd devops-tools/website
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

- `/app`: Contains the Next.js application files
  - `/components`: Reusable UI components
  - `/globals.css`: Global styles using Tailwind CSS
  - `/page.tsx`: Main page component
  - `/layout.tsx`: Root layout component

## Contributing

Contributions are welcome! If you'd like to add new tools or improve the website, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Adding New Tool Categories

To add a new tool category:

1. Add a new category object to the `data` array in `app/page.tsx`:
   ```typescript
   {
     id: "category-id",
     icon: "🔍", // Choose an appropriate emoji
     title: "Category Title",
     description: "Detailed description of what these tools do and why they're important.",
     tools: [
       // Array of tool objects
     ]
   }
   ```

2. Ensure your category has a unique `id` and descriptive `title`
3. Add relevant tools following the tool structure format

## License

This project is licensed under the same license as the main repository.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)