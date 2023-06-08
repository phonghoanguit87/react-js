import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../redux/action';

const EditPost = ({ postId, initialTitle, initialContent }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPost = {
            title,
            body: content,
        };
        dispatch(updatePost(postId, updatedPost));
    };
    
    return (
        <div>
            <h2>Edit Post</h2>
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
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditPost;
