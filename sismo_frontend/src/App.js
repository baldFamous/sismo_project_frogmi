import React from 'react';
import FeatureList from './components/FeatureList';
import CommentForm from './components/CommentForm';

function App() {
  return (
    <div>
      <FeatureList />
      <CommentForm featureId={1} /> {/* Cambia esto según la ID de un feature */}
    </div>
  );
}

export default App;