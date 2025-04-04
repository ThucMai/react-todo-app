# Todo App VP

Todo App VP is a feature-rich task management application built with React. It allows users to manage their tasks efficiently with features like adding, editing, deleting, searching, and paginating tasks. The app also supports light and dark themes for a personalized user experience.

## Features

- **Authentication**: Login functionality to secure user data.
- **Task Management**: Add, edit, delete tasks.
- **Search**: Filter tasks by keywords.
- **Pagination**: Display tasks across multiple pages.
- **Theme Support**: Toggle between light and dark themes.
- **Notifications**: Display success and error messages using `react-toastify`.

## Prerequisites

- **Node.js**: Version 14.x or higher.
- **npm**: Version 6.x or higher (or `yarn`).
- **JSON Server**: To simulate a backend API.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ThucMai/react-todo-app.git
   cd react-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Copy `.env example` to `.env`:
     ```bash
     cp .env\ example .env
     ```
   - Ensure the `REACT_APP_API_BASE_URL` is set to your JSON Server endpoint (default: `http://localhost:3001`).

## Usage

### Start the JSON Server
Run the following command to start the JSON Server:
```bash
npx json-server -p 3001 db.json
```

### Start the Application
Run the following command to start the React application:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── api/                # API functions (fetch data)
├── components/         # Reusable components (Navbar, Pagination, etc.)
├── context/            # Context API (AuthContext, SettingContext)
├── pages/              # Main pages (TodoApp, Login, etc.)
├── utils/              # Utility functions (validateTodo, simulateNetworkDelay, etc.)
├── App.js              # Root component
├── App.css             # Global CSS
└── index.js            # Entry point
```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the app configuration.

## Technologies Used

- **React**: Frontend library.
- **React Router**: For routing.
- **React Context API**: For state management.
- **React Toastify**: For notifications.
- **Bootstrap**: For styling.
- **JSON Server**: For simulating a backend API.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Bootstrap](https://getbootstrap.com/)
- [JSON Server](https://github.com/typicode/json-server)