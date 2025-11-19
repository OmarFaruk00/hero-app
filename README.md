# Hero Apps - App Store Platform

A modern, responsive web application that simulates an app store experience where users can browse, install, and manage mobile applications. Built with React and modern web technologies.

## 🌐 Live Demo

🔗 **[View Live Application](https://hero-apps.vercel.app)** *(Add your live link here)*

## 📸 Screenshots

![Hero Apps Homepage](./screenshots/homepage.png)
*Homepage showcasing featured apps*

![App Details](./screenshots/app-details.png)
*Detailed app information page*

![My Installations](./screenshots/installations.png)
*User's installed apps management*

> **Note:** Add your actual screenshots to the `screenshots/` folder in the repository.

## 📱 App Description

Hero Apps is a comprehensive app store platform that provides users with:

- **App Discovery**: Browse through a curated collection of productivity, wellness, and utility applications
- **App Installation Management**: Install and uninstall apps with local storage persistence
- **Detailed App Information**: View comprehensive app details including ratings, reviews, download counts, and descriptions
- **Installation Tracking**: Keep track of your installed apps with sorting and filtering capabilities
- **Responsive Design**: Seamless experience across desktop and mobile devices

### Featured App Categories

- **Productivity Apps**: Task management, focus timers, and organization tools
- **Wellness Apps**: Meditation, sleep tracking, and habit building
- **Utility Apps**: Photo editing, weather, music streaming, and more
- **Learning Apps**: Language learning, coding tools, and educational content

## ✨ Main Features

- **📱 App Discovery & Browsing** - Browse through curated collections of productivity, wellness, utility, and learning apps
- **💾 Installation Management** - Install and uninstall apps with local storage persistence
- **📊 Detailed App Information** - View comprehensive app details including ratings, reviews, download counts, and descriptions
- **🔍 Search & Filter** - Find apps quickly with sorting and filtering capabilities
- **📈 Installation Tracking** - Keep track of your installed apps with visual statistics
- **📱 Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **🎨 Modern UI/UX** - Beautiful, intuitive interface with smooth animations

## 🚀 Main Technologies Used

- **React 19.2.0** - Modern React with latest features
- **React Router DOM 7.9.3** - Client-side routing and navigation
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Vite 7.1.9** - Fast build tool and development server
- **Recharts 3.2.1** - Data visualization and charts

## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.9.3",
  "react-hot-toast": "^2.6.0",
  "recharts": "^3.2.1"
}
```

### Development Dependencies
```json
{
  "vite": "^7.1.9",
  "tailwindcss": "^4.1.14",
  "postcss": "^8.5.6",
  "autoprefixer": "^10.4.21",
  "concurrently": "^9.2.1"
}
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/OmarFaruk00/hero-app.git
   cd hero-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppCard.jsx     # Individual app display card
│   ├── Footer.jsx      # Application footer
│   ├── Header.jsx      # Navigation header
│   ├── LoadingSpinner.jsx # Loading indicator
│   └── PageLoader.jsx  # Full-page loading overlay
├── contexts/           # React Context providers
│   └── LoadingContext.jsx # Global loading state management
├── data/              # Static data files
│   └── apps.js        # App catalog data
├── hooks/             # Custom React hooks
│   └── useNavigation.js # Navigation loading management
├── pages/             # Page components
│   ├── AllApps.jsx    # App browsing page
│   ├── AppDetails.jsx # Individual app details
│   ├── Home.jsx       # Landing page
│   ├── MyInstallation.jsx # User's installed apps
│   └── NotFound.jsx   # 404 error page
├── styles/            # Styling files
│   └── input.css      # Tailwind CSS imports
├── utils/             # Utility functions
│   └── localStorage.js # Local storage management
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🔗 Relevant Links

- 🌐 **Live Demo:** [View Application](https://hero-apps.vercel.app) *(Update with your actual live link)*
- 📂 **Repository:** [GitHub Repository](https://github.com/OmarFaruk00/hero-app)
- 📝 **Documentation:** [React Documentation](https://react.dev)
- 🎨 **Tailwind CSS:** [Tailwind CSS Docs](https://tailwindcss.com)

---

**Made with ❤️ by [Omar Faruk](https://github.com/OmarFaruk00)**

