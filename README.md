# Trivia App

## Overview

The **Trivia App** is a mobile application built with React Native and Expo. This app allows users to test their knowledge across various categories through True / False trivia questions. The questions are fetched from an open trivia API, providing a diverse range of topics and difficulty levels.

## Features

- **Multiple Categories**: Choose from a wide range of trivia categories such as General Knowledge, Science, History, and more.
- **Dynamic Question Fetching**: Questions are fetched in real-time from an external API, ensuring a fresh experience every time.
- **Progress Tracking**: See how well you’re doing as you progress through the quiz.
- **Detailed Results**: Review your performance at the end of each quiz.

## Future Improvements

There are a few enhancements that I plan to implement when time permits:

### 1. **Light/Dark Theme Support**
   - **Description**: Integrating a light/dark theme toggle will enhance the user experience by allowing users to switch between light and dark modes depending on their preference or system settings.

### 2. **Internationalization (i18n) with `react-i18next`**
   - **Description**: Implementing internationalization (i18n) will enable the app to support multiple languages, making it accessible to a broader audience. Using `react-i18next` will provide a robust solution for managing translations and localization.

## Prerequisites

To run and develop this project, you'll need the following tools installed on your machine:

- **Node.js**: Recommended version 14.x or later
- **npm**: Comes with Node.js, used to manage project dependencies
- **Expo CLI**: To run and develop the app using Expo's managed workflow
- **Git**: For version control

## How to Run

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/endritvitija/trivia-app.git
cd trivia-app
```

### 2. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Start the Development Server

Start the Expo development server to run the app:

```bash
npm start
```

This command will open the Expo Developer Tools in your web browser. From here, you can run the app on an emulator, a physical device, or a web browser.

### 4. Running Unit Tests

The project includes unit tests to ensure the app's functionality. To run the tests:

```bash
npm test
```

This will run the Jest test suite, including the unit tests for API requests.

## How to Use

1. **Select a Category**: On the home screen, choose a trivia category to begin your quiz.
2. **Answer Questions**: For each question, select the correct answer from the provided options.
3. **Track Your Progress**: As you answer questions, track your progress and see how well you're doing.
4. **Review Results**: After completing the quiz, review your results to see how many questions you got right.
5. **Restart or Select a New Category**: Once you've completed a quiz, you can start a new quiz with the same or different category.

## Project Structure

- **`src/api/`**: Axios Interceptors.
- **`src/assets/`**: Fonts and Images.
- **`src/components/`**: Reusable UI components such as buttons, text fields, etc.
- **`src/constants/`**: Model and Types.
- **`src/screens/`**: Different screens of the app like HomeScreen, QuestionScreen, and ResultsScreen.
- **`src/services/`**: Services that handle API requests.
- **`src/atoms/`**: State management using Jotai for managing app-wide state like questions, progress, etc.

![image](https://github.com/user-attachments/assets/6b2e974b-5aa4-4b83-a275-23e3ebc12979)


## Demo
https://github.com/user-attachments/assets/6d9242e7-dcc4-424f-bb8b-008fa746f1fd
