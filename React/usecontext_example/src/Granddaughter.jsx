
// src/Granddaughter.js
import React, { useContext } from 'react';
import FamilyContext from './FamilyContext';

function Granddaughter() {
  const secret = useContext(FamilyContext);

  return (
    <div>
      <h3>Granddaughter</h3>
      <p>{secret.familyName}</p>
      <p>{secret.onlyGrandchildrenShouldKnow()}</p>
    </div>
  );
}

export default Granddaughter;