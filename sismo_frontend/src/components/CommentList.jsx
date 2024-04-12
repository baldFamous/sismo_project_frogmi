import React, { useEffect, useState } from 'react';

function CommentList({ featureId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/features/${featureId}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error("Error loading comments:", err));
  }, [featureId]);

  if (!comments.length) return <p>No hay comentarios aún.</p>;

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  );
}

export default CommentList;