import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({username: "", password: ""});
    
    const userlogined = useSelector(state => state.userlogined);
    const setValueForUser = (key, value) => {
        const newVal = {...user, [key]: value};
        setUser(newVal);
    };
    const login = () => {
        dispatch({type: "LOGIN", payload: user});
    };
    useEffect(() => {
        if (userlogined.username) {
            navigate("/users");
        }
    }, [userlogined, navigate]);
    
    return (
        <form>
            <label className="form-label">User name</label>
            <input
                id="username"
                onChange={e => setValueForUser("username", e.target.value)}
                type="text"
                className="form-control"
            />
            <label className="form-label">Password</label>
            <input
                id="password"
                onChange={e => setValueForUser("password", e.target.value)}
                type="password"
                className="form-control"
            />
            <button
                type="button"
                onClick={() => {
                    login();
                }}
                className="btn btn-primary"
            >
                Login
            </button>
        </form>
    );
}

export default Login;