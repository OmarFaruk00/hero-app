# Hero Apps - App Store Platform

A modern, responsive web application that simulates an app store experience where users can browse, install, and manage mobile applications. Built with React and modern web technologies.

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

## 🚀 Technologies Used

### Frontend Framework
- **React 19.2.0** - Modern React with latest features
- **React Router DOM 7.9.3** - Client-side routing and navigation
- **React Hot Toast 2.6.0** - Beautiful toast notifications

### Styling & UI
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing and optimization
- **Autoprefixer 10.4.21** - Automatic vendor prefixing

### Build Tools & Development
- **Vite 7.1.9** - Fast build tool and development server
- **Concurrently 9.2.1** - Run multiple commands concurrently
- **Serve 14.2.4** - Static file serving

### Data Visualization
- **Recharts 3.2.1** - Composable charting library for React

### Key Features Implementation
- **Local Storage Management** - App installation persistence
- **Context API** - Global state management for loading states
- **Custom Hooks** - Navigation and loading state management
- **Responsive Grid Layouts** - Mobile-first design approach
- **Component-Based Architecture** - Modular and reusable components

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd B12-A08-Hero-Apps
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

