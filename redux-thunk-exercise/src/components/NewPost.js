import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/action';

const NewPost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body: content,
        };
        dispatch(addPost(newPost));
        setTitle('');
        setContent('');
    };
    
    return (
        <div>
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default NewPost;
