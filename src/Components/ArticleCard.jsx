import moment from "moment"; // Used to manipulate time format from JSON time obj => date time format

export default function ArticleCard({ article }) {
  return (
    <div key={article.article_id} className="container">
      <div className="articleInfo">
        <ul>
          <p className="articleTitle"> {article.title} </p>
          <p className="articleAuthor">
            Posted by {article.author} on
            {moment(article.created_at).calendar()} {/* Converting time */}
          </p>
          <p className="articleDesc"> {article.body} </p>
          <p className="articleCommentCount">
            Comment count: {article.comment_count}
          </p>
          <img
            className="articleImages"
            src={article.article_img_url}
            alt="Article related image"
          />
        </ul>
      </div>
    </div>
  );
}
