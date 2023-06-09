import axios from 'axios'

const ncNewsAPI = axios.create({ baseURL: 'https://nc-news-au6b.onrender.com/api' })

export const getAllArticles = (topic, {sort_by, order, limit, p}) => {
    if (!topic) {
        return ncNewsAPI.get(`/articles?sort_by=${sort_by}&order=${order}&limit=${limit}&p=${p}`).then(({data}) => data);
    } else {
        return ncNewsAPI.get(`/articles?topic=${topic}&sort_by=${sort_by}&order=${order}&limit=${limit}&p=${p}`).then(({data}) => data);
    }
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

export const deleteArticleByArticleId = (id) => {
    return ncNewsAPI.delete(`/articles/${id}`).then((d)=>d);
}

export const postNewArticle = (newArticle) => {
    if (newArticle.article_img_url === "") {
        newArticle.article_img_url = "/default_illustration.jpg";
    }
    return ncNewsAPI.post('/articles/', newArticle).then(({data}) => data);
}

export const updateVotesByCommentId = (id, inc_votes) => {
    return ncNewsAPI.patch(`/comments/${id}`, { inc_votes }).then(({data}) => data);
}

export const postNewCommentByArticleId = (id, newComment) => {
    return ncNewsAPI.post(`articles/${id}/comments`, newComment).then(({data}) => data);
}

export const fetchAllUsers = () => {
    return ncNewsAPI.get('/users').then(({data}) => data);
}

export const getUserByUsername = (username) => {
    return ncNewsAPI.get(`/users/${username}`).then(({data}) => data);
}

export const updateUserByUsername = (user) => {
    return ncNewsAPI.put(`/users/${user.username}`, {...user}).then(({data}) => data);
}

export const createNewUser = (newUser) => {
    return ncNewsAPI.post(`/users`, newUser).then(({data}) => data);
}

export const deleteCommentByCommentId = (comment_id) => {
    return ncNewsAPI.delete(`/comments/${comment_id}`).then((d)=>d);
}

export const convertDate = (datestamp) => {
    return `${new Date(datestamp).toLocaleString('en-GB', { timeZone: 'UTC' })} UTC`
}