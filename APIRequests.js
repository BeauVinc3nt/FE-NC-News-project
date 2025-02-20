import axios from "axios";
const baseURL = "https://fe-nc-reddit-clone.onrender.com/api";

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
