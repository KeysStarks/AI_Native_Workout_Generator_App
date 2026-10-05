# Workout Generator

A mobile app that builds a random workout for the muscle group you choose. Pick a target area and how many exercises you want, then tap **Generate Workout** to get a list with sets and reps.

Built with Expo, React Native, and TypeScript. It runs on iOS, Android, and the web.

## Features

- **Choose a target area:** full body, upper body, lower body, or core
- **Choose the workout length:** 3 to 6 exercises
- **Random workouts:** a new shuffle every time you tap Generate
- **Sets and reps for each exercise**, with timed exercises (like Plank) shown in seconds
- **Highlighted selections**, so you can always see what's picked

## Tech stack

- [Expo](https://expo.dev) (SDK 57) with [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev)
- [TypeScript](https://www.typescriptlang.org) in strict mode

## Getting started

You'll need [Node.js](https://nodejs.org) installed.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npx expo start
   ```

3. Open the app:
   - Press **`w`** to open it in your web browser
   - Scan the QR code with [Expo Go](https://expo.dev/go) to run it on your phone
   - Press **`i`** or **`a`** to open the iOS simulator or Android emulator

## Project structure

```
src/
├── app/
│   └── index.tsx           # Home screen: selections, workout logic, and results
└── components/
    └── option-button.tsx   # Reusable selectable button
```

Files in `src/app/` are screens (Expo Router uses file-based routing). Reusable pieces live in `src/components/`.

## How it works

Exercises are stored by target area, and each one has a name, sets, and reps:

```ts
type Exercise = {
  name: string;
  sets: number;
  reps: number;
  timed?: boolean; // true when reps means seconds
};
```

When you tap **Generate Workout**, the app copies the list for the selected area, shuffles it, and keeps the number of exercises you chose.

## Checks

```bash
npx tsc --noEmit   # typecheck
npx expo lint      # lint
```

## Roadmap

- [ ] Make the screen scrollable on smaller phones
- [ ] Exercise detail screen
- [ ] Save favorite workouts on the device

## About

I built this project while learning React Native and TypeScript, writing the code step by step.
