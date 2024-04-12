import React, { useState } from 'react';

function CommentForm({ featureId }) {
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!body.trim()) return; // Validar que el comentario no esté vacío
    try {
        const response = await fetch(`http://localhost:3000/api/features/${featureId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: { body } }),
        });
        const data = await response.json();
        if (response.ok) {
        console.log('Comentario añadido:', data);
        setBody(''); // Limpiar el formulario
        } else {
        throw new Error(data.message || 'Error al añadir comentario');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
    };

    return (
    <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Escribe un comentario..."
        required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Enviar Comentario
        </button>
    </form>
    );
}

export default CommentForm;