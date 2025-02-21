import axios from "axios";
export const baseURL = "https://fe-nc-reddit-clone.onrender.com/api";

export const getArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const getSingleArticle = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleID = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      // console.log("Api response", data);
      return data.comments;
    });
};

export const createCommentOnArticle = (article_id) => {
  return (
    axios.post(`${baseURL}/articles/${article_id}/comments`),
    then(({ data }) => {
      return data.article;
    })
  );
};
