# Table Tennis Equipment Database App

A React Native app built with Expo, TypeScript, Expo Router, and TanStack Query for browsing and comparing table tennis equipment (rubbers and blades).

## 🏓 Features

-  **Home Screen**: Overview of the app with navigation to different sections
-  **Rubbers Section**: Browse and compare table tennis rubbers with detailed stats
-  **Blades Section**: Explore paddle blades with specifications and performance metrics
-  **Detail Pages**: In-depth information about individual equipment pieces
-  **TypeScript**: Full type safety throughout the application
-  **TanStack Query**: Efficient data fetching and caching
-  **Expo Router**: File-based routing system

## 📱 Screenshots

The app includes:

-  Modern, clean UI with card-based layouts
-  Color-coded equipment types and handles
-  Performance stats visualization
-  Detailed equipment specifications
-  Pros/cons listings
-  Recommendation tags

## 🚀 Getting Started

### Prerequisites

-  Node.js (v18 or higher)
-  npm or yarn
-  Expo CLI (install with `npm install -g @expo/cli`)

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Run on your preferred platform:
   -  **iOS Simulator**: Press `i` in the terminal
   -  **Android Emulator**: Press `a` in the terminal
   -  **Web**: Press `w` in the terminal
   -  **Physical Device**: Scan the QR code with Expo Go app

## 📁 Project Structure

```
tt-equipment-db_app/
├── app/                          # Expo Router app directory
│   ├── _layout.tsx              # Root layout with navigation
│   ├── index.tsx                # Home screen
│   ├── rubbers.tsx              # Rubbers listing page
│   ├── blades.tsx               # Blades listing page
│   ├── rubber/
│   │   └── [id].tsx             # Dynamic rubber detail page
│   └── blade/
│       └── [id].tsx             # Dynamic blade detail page
├── types/
│   └── equipment.ts             # TypeScript type definitions
├── data/
│   └── sampleData.ts            # Sample equipment data
├── assets/                      # Static assets
├── package.json                 # Dependencies and scripts
├── app.json                     # Expo configuration
└── tsconfig.json               # TypeScript configuration
```

## 🛠 Technologies Used

-  **React Native**: Cross-platform mobile development
-  **Expo**: Development platform and tools
-  **TypeScript**: Type-safe JavaScript
-  **Expo Router**: File-based routing
-  **TanStack Query**: Data fetching and state management
-  **React Native Safe Area Context**: Handle device safe areas
-  **React Native Screens**: Native navigation primitives

## 📊 Equipment Data Structure

### Rubbers

-  Performance stats (speed, spin, control, tackiness)
-  Type classifications (inverted, short pips, long pips, anti)
-  Hardness ratings
-  Available thicknesses
-  Pricing information
-  Pros/cons analysis

### Blades

-  Performance metrics (speed, control, stiffness)
-  Composition details (wood types, carbon layers)
-  Handle styles (straight, flared, anatomic, penhold)
-  Weight specifications
-  Ply count and thickness

## 🎯 Learning Objectives

This project demonstrates:

-  Expo Router file-based navigation
-  TanStack Query for data management
-  TypeScript integration in React Native
-  Component composition and reusability
-  Modern React Native development patterns
-  Cross-platform mobile app architecture

## 🔧 Development Commands

-  `npm start` - Start the Expo development server
-  `npm run android` - Run on Android emulator/device
-  `npm run ios` - Run on iOS simulator/device
-  `npm run web` - Run in web browser

## 📈 Future Enhancements

-  Add search and filtering functionality
-  Implement user favorites and comparisons
-  Include equipment reviews and ratings
-  Add equipment setup recommendations
-  Integrate with real equipment databases
-  Add offline support with data persistence

## 🤝 Contributing

This is a learning project. Feel free to:

-  Add new equipment data
-  Improve the UI/UX
-  Add new features
-  Fix bugs
-  Enhance TypeScript types

## 📄 License

This project is for educational purposes. Equipment data is for demonstration only.
