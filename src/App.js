// import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import "./Fonts.scss";
import Header from "./components/header.jsx";
import TodoList from "./components/todoList.jsx";

function App() {
    return (
        <>
            <Header />
            <TodoList />
        </>
    );
}

export default App;
