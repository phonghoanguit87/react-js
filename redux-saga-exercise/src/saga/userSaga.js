import axios from "axios";
import {put, takeLatest} from "redux-saga/effects";
import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCESS
} from "../redux/action";

// const BaseURL = "https://my-json-server.typicode.com/phonghoanguit87/fake-api-demo";
const BaseURL = "http://localhost:3004";

function* getUser(action) {
    try {
        const response = yield axios.get(`${BaseURL}/users`);
        yield put({type: FETCH_USER_SUCCESS, payload: response.data});
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}

function* authSagaFun(action) {
    const user = action.payload;
    if (user.username === "admin" && user.password === "admin") {
        yield put({type: LOGIN_SUCCESS, payload: user});
        yield put({type: FETCH_USER, payload: {}});
    }
}

function* deleteUser(action) {
    try {
        const user = action.payload;
        yield axios.delete(`${BaseURL}/users/${user.id}`);
        const response = yield axios.get(`${BaseURL}/users`);
        yield put({type: DELETE_USER_SUCCESS, payload: response.data});
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}

export default function* rootSaga() {
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
    yield takeLatest(DELETE_USER, deleteUser);
}