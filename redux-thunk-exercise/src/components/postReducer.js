import * as types from '../redux/types';

const initialState = {
    posts: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            };
        case types.ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case types.UPDATE_POST_SUCCESS:
            const updatedPost = action.payload;
            const updatedPosts = state.posts.map((post) =>
                post.id === updatedPost.id ? updatedPost : post
            );
            return {
                ...state,
                posts: updatedPosts,
            };
        default:
            return state;
    }
};

export default postReducer;