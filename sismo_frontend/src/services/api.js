const API_BASE_URL = process.env.API_BASE_URL || 'http://127.0.0.1:3000/api'; // Use the API base URL from environment variables if available, otherwise fallback to default

async function fetchFromAPI(endpoint, options = {}) {
        try {
            const url = `${API_BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`API request failed: ${response.statusText}`);
            }
            return response.json();
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            throw error;
        }
    }

export async function getFeatures(page = 1, perPage = 25) {
    return fetchFromAPI(`features?page=${page}&per_page=${perPage}`);
}

export async function sendComment(featureId, body) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: { feature_id: featureId, body } }),
    };
    return fetchFromAPI(`features/${featureId}/comments`, options);
}

export async function getComments(featureId) {
    return fetchFromAPI(`features/${featureId}/comments`);
}

