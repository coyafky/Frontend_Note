// src/App.js
import React from 'react';
import FamilyContext from './FamilyContext';
import Family from './Family';

function App() {
  const familySecret = {
    familyName: 'Smiths',
    onlyParentCanSee: () => 'Only parent can see this secret message',
    onlyGrandchildrenShouldKnow: () => 'Only grandchildren should know this secret message'
  };

  return (
    <FamilyContext.Provider value={familySecret}>
      <Family />
    </FamilyContext.Provider>
  );
}

export default App;