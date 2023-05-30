import axios from 'axios'

const ncNewsAPI = axios.create({ baseURL: 'https://nc-news-au6b.onrender.com' })

export const getAllArticles = () => {
    return ncNewsAPI.get('/api/articles').then(({data}) => data);
};