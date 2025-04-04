import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Welcome to Todo App VP</h1>
      <div className="text-center">
        <p>Click on the link below to go to the Todo App</p>
        <Link to="/todo-app">Todo App</Link>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
