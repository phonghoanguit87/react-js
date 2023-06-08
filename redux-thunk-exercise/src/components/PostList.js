import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/action';
import {useNavigate} from "react-router-dom";

const PostList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const addNewPost = () => {
        navigate("/new");
    }
    
    const editPost = (id) => {
        navigate("/edit/" + id);
    }
    
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    
    return (
        <div className="container">
            <div className="row mt-2 mb-3">
                <div className="col-md-8">
                    <h2>Post</h2>
                </div>
                <div className="col-md-4">
                    <button onClick={addNewPost}>Add new Post</button>
                </div>
            </div>
    
            {posts.map((post) => (
                <div className="row mb-3" key={post.id}>
                    <div className="col-md-8 border border-primary">
                        <div className="row">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button onClick={ () => {editPost(post.id)}}>Edit</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;
