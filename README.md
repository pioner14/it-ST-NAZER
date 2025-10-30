# Multilingual Portfolio Website

A professional portfolio website with support for English, French, and Russian languages.

## Features

- Multi-language support (EN, FR, RU)
- Responsive design
- SEO optimized
- Blog section
- Portfolio showcase
- Contact form

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:pioner14/it-ST-NAZER.git
   cd it-ST-NAZER
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

### Deployment to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   └── [lang]/            # Language prefixed routes
├── components/             # Reusable UI components
├── contexts/               # React context providers
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── locales/                # Translation files
│   ├── en/
│   ├── fr/
│   └── ru/
├── public/                 # Static assets
└── styles/                 # CSS files
```

## Internationalization

This project supports three languages:
- English (`en`)
- French (`fr`)
- Russian (`ru`)

Language switching is available through the language selector in the header.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.