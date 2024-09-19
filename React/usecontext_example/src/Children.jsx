// src/Children.js
import React, { useContext } from 'react';
import FamilyContext from './FamilyContext';
import Grandson from './Grandson';
import Granddaughter from './Granddaughter';

function Children() {
  const secret = useContext(FamilyContext);

  return (
    <div>
      <h2>Children</h2>
      <p>{secret.familyName}</p>
      <Grandson />
      <Granddaughter />
    </div>
  );
}

export default Children;