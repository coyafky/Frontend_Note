// src/Grandson.js
import React, { useContext } from 'react';
import FamilyContext from './FamilyContext';

function Grandson() {
  const secret = useContext(FamilyContext);

  return (
    <div>
      <h3>Grandson</h3>
      <p>{secret.familyName}</p>
      <p>{secret.onlyGrandchildrenShouldKnow()}</p>
    </div>
  );
}

export default Grandson;