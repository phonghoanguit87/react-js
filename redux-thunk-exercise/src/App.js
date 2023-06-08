import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Provider} from "react-redux";
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PostList/>}/>
                    <Route path="/new" element={<NewPost/>}/>
                    <Route path="/edit/:id" element={({ match }) => (
                        <EditPost
                            postId={match.params.id}
                            initialTitle="Initial Title"
                            initialContent="Initial Content"
                        />
                    )}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
