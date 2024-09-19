// src/Parent.js
import React, { useContext } from 'react';
import FamilyContext from './FamilyContext';
import Children from './Children';

function Parent() {
  const secret = useContext(FamilyContext);

  return (
    <div>
      <h1>Parent</h1>
      <p>{secret.familyName}</p>
      <p>{secret.onlyParentCanSee()}</p>
      <Children />
    </div>
  );
}

export default Parent;