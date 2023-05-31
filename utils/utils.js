import axios from 'axios'

const ncNewsAPI = axios.create({ baseURL: 'https://nc-news-au6b.onrender.com/api' })

export const getAllArticles = () => {
    return ncNewsAPI.get('/articles').then(({data}) => data);
};

export const getAllTopics = () => {
    return ncNewsAPI.get('/topics').then(({data}) => data);
};

export const fetchArticleByArticleId = (articleId) => {
    return ncNewsAPI.get(`/articles/${articleId}`).then(({data}) => data);
}

export const fetchCommentsByArticleId = (articleId) => {
    return ncNewsAPI.get(`/articles/${articleId}/comments`).then(({data}) => data);
}

export const updateVotesByArticleId = (id, inc_votes) => {
    return ncNewsAPI.patch(`/articles/${id}`, { inc_votes }).then(({data}) => data);
}

export const updateVotesByCommentId = (id, inc_votes) => {
    return ncNewsAPI.patch(`/comments/${id}`, { inc_votes }).then(({data}) => data);
}

export const convertDate = (datestamp) => {
    return `${new Date(datestamp).toLocaleString('en-GB', { timeZone: 'UTC' })} UTC`
}