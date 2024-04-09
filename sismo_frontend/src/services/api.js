const API_BASE_URL = 'http://localhost:3000/api'; // Asegúrate de usar la URL correcta de tu API

async function fetchFromAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}/${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
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