export default function ArticleCard({ article }) {
  return (
    <div key={article.article_id} className="articleCard">
      <div className="articleInfo">
        <ul>
          <p className="articleTitle"> {article.title} </p>
          <p className="articleAuthor"> Posted by {article.author} at </p>
          <p className="articleDesc"> {article.body} </p>
          <p className="articleCommentCount">
            Comment count: {article.comment_count}
          </p>
        </ul>
      </div>
    </div>
  );
}
