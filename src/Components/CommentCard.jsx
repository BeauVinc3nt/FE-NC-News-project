import moment from "moment";

export default function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>{comment.author}</p>
      <p>{moment(comment.created_at).calendar()}</p>
      <p className="comment-body">{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </div>
  );
}
