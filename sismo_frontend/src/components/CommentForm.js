import React, { useState } from 'react';

function CommentForm({ featureId }) {
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = { feature_id: featureId, body };

    fetch('http://localhost:3000/api/features/' + featureId + '/comments', {  // Usa la URL correcta
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment }),
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave a Comment</h2>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;