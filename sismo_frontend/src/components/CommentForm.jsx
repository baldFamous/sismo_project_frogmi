import React, { useState, useEffect } from 'react';
import { getComments, sendComment } from '../services/api';

function CommentForm({ featureId, onClose }) {
    const [comments, setComments] = useState([]);
    const [body, setBody] = useState('');

    useEffect(() => {
        getComments(featureId)
            .then(data => {
                setComments(data);
            })
            .catch(error => console.error('Error loading comments:', error));
    }, [featureId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!body.trim()) return;
        try {
            const newComment = await sendComment(featureId, body);
            setComments([...comments, newComment]);
            setBody('');
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg relative">

            <h2 className="text-lg font-semibold mb-2">Comentarios</h2>
            <ul className="mb-4">
                {comments.map(comment => (
                    <li key={comment.id} className="pl-4 border-l-2 border-gray-200 my-2">
                        - {comment.body}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="mt-4">
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Escribe un comentario..."
                    rows="3"
                />
                <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Enviar Comentario
                </button>
            </form>
        </div>
    );
}

export default CommentForm;
