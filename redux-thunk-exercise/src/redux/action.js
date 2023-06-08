import * as types from './types';
import api from '../api';

export const fetchPostsSuccess = (posts) => ({
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const addPostSuccess = (post) => ({
    type: types.ADD_POST_SUCCESS,
    payload: post,
});

export const updatePostSuccess = (post) => ({
    type: types.UPDATE_POST_SUCCESS,
    payload: post,
});

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await api.get('/posts');
        dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

export const addPost = (post) => async (dispatch) => {
    try {
        const response = await api.post('/posts', post);
        dispatch(addPostSuccess(response.data));
        alert('Post added successfully');
    } catch (error) {
        console.error('Error adding post:', error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const response = await api.put(`/posts/${id}`, post);
        dispatch(updatePostSuccess(response.data));
        alert('Post updated successfully');
    } catch (error) {
        console.error('Error updating post:', error);
    }
};
