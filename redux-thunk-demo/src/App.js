import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./component/Login";
import {Provider} from "react-redux";
import store from "./redux/store";
import User from "./component/User";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/users" element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;