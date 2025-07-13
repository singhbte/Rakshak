
import React from 'react';
import Button from './components/ui/button';
import Card from './components/ui/card';

const App = () => {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Welcome to Rakshak</h1>

      <Card title="Send Rakhi" description="Click below to tie Rakhi to your brother." />
      
      <Button text="Tie Rakhi 🎀" onClick={() => alert('Rakhi tied!')} />
    </div>
  );
};

export default App;
