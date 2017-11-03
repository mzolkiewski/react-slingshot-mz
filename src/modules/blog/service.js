import apiService from '../../utils/apiService';

const getPosts = () => apiService.get('/posts');
const getPost = (id) => apiService.get(`/posts/${id}`);
const getComments = (postId) => apiService.get(`/posts/${postId}/comments`);

export default {
  getPosts,
  getPost,
  getComments,
};