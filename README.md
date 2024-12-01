# Red Team Toolkit Dashboard

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/imjvdn/redteamtoolkit/deploy.yml?branch=main)
![GitHub last commit](https://img.shields.io/github/last-commit/imjvdn/redteamtoolkit)
![GitHub License](https://img.shields.io/github/license/imjvdn/redteamtoolkit)

## 🌟 Live Demo

Visit the live demo at [https://imjvdn.github.io/redteamtoolkit/](https://imjvdn.github.io/redteamtoolkit/)

**Demo Credentials:**
- Email: `demo@example.com`
- Password: `demo`

## 🚀 Overview

A sophisticated security analysis platform built with React and TypeScript, designed for red team operations and security assessments. This dashboard provides an integrated interface for reconnaissance, brute force operations, security monitoring, and comprehensive reporting.

## ✨ Core Features

- 🔐 **Authentication System**
  - Secure login and session management
  - Role-based access control
  - Protected routes and API endpoints

- 📊 **Dashboard Analytics**
  - Real-time security metrics visualization
  - Interactive data charts and graphs
  - Custom reporting periods

- 🔍 **Security Tools**
  - Reconnaissance operation management
  - Automated brute force simulations
  - Security event monitoring
  - Comprehensive reporting system

## 🛠️ Technical Stack

- **Frontend Framework**: React 18 with TypeScript
- **State Management**: Zustand
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components including navigation
│   └── shared/         # Shared component library
├── hooks/              # Custom React hooks
├── pages/              # Route components
│   ├── Dashboard/      # Main dashboard view
│   ├── Recon/         # Reconnaissance tools
│   ├── BruteForce/    # Brute force operations
│   ├── Monitoring/    # Real-time monitoring
│   ├── Reports/       # Reporting interface
│   └── Settings/      # Configuration interface
├── stores/             # Zustand state management
├── types/              # TypeScript declarations
└── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imjvdn/redteamtoolkit.git
   cd redteamtoolkit
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔄 Development Workflow

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```

3. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub

## 🚀 Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process:

1. Builds the application using Vite
2. Optimizes assets and generates production build
3. Deploys to GitHub Pages using GitHub Actions

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📧 Contact

Jaden Goodwin - [@imjvdn](https://github.com/imjvdn)

Project Link: [https://github.com/imjvdn/redteamtoolkit](https://github.com/imjvdn/redteamtoolkit)
