// import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import "./Fonts.scss";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    return (
        <>
            <Header />
            <TodoList />
        </>
    );
}

export default App;
