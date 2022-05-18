import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDo from "./components/ToDo";
import RequireAuth from "./components/RequireAuth";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/todo"
                    element={
                        <RequireAuth>
                            <ToDo></ToDo>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
}

export default App;
