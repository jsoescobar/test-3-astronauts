# Solar System Planets App

This mobile application displays a list of planets in our solar system, fetched from a public REST API.  

## Features  
- Fetch and display planetary information from a public REST API  
- User-friendly UI built with React Native  
- State management and efficient data fetching  

## Libraries Used
- **Zustand** was chosen for its lightweight state management without unnecessary boilerplate.  
- **@tanstack/react-query** efficiently handles API data synchronization, reducing manual fetch logic.  
- **Axios** provides a flexible and readable API for HTTP requests.  
- **@gluestack-ui** speeds up UI component creation with prebuilt components.  
- **@react-native-async-storage/async-storage** ensures efficient local data persistence.

## Installation  

1. Clone the repository:
   ```bash
   git clone https://github.com/jsoescobar/test-3-astronauts.git
   cd test-3-astronauts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage  
   ```bash
   npm run android # Start the App on Android
   npm run ios # Start the App on iOS
   npm run lint # Lint the Project
   ```

## Requirements  
- Node.js v14+
- Expo CLI

## Notes
- Make sure to have an Android or iOS device/emulator connected and configured.

## APK for Testing on Physical Device
The APK file (`test-on-device.apk`) is included in the code for testing on a physical device.

