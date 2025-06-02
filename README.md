# 🚀 Webpack Learning Project - Neiser 2025

This project is my hands-on playground for mastering Webpack fundamentals, including:

- 🎯 Setting up multiple entry points for multi-page apps
- ⚙️ Configuring loaders for JavaScript (ES6+) and CSS
- 📄 Using plugins like HtmlWebpackPlugin for automatic HTML file generation
- 🔥 Enabling development server with hot module replacement and clean URLs
- 🧩 Understanding chunking and output configuration
- ✅ Using Commitizen to standardize commit messages
- 🔒 Using Husky to enforce pre-commit linting and hooks
- ⚙️ Automating builds and deployments with GitHub Actions to GitHub Pages

## 🛠 Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run start` to launch the dev server

## 📦 Build

To build the project for development or production:

1. Run `npm run build` for development build or `npm run build:prod` for production
2. The output files will be in the `dist/` folder

## 💻 Development Workflow

Use Commitizen to guide your commit messages for better commit history:

```bash
npm run commit
```

## 🚀 Deployment

This project uses GitHub Actions with a workflow configured in `.github/workflows/build.yml` to:

- Build the project
- Deploy the contents of the `dist/` folder to the `gh-pages` branch
- Serve the static site via GitHub Pages

Make sure the GitHub Pages source is set to the `gh-pages` branch in your repo settings.

## 💡 Notes

This project is a simple but effective playground to deepen my Webpack knowledge and improve my skills with modern frontend tooling like Babel, ESLint, Stylelint, Husky, Commitizen, and GitHub Actions for CI/CD.
