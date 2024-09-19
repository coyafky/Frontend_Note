import React, { useState } from 'react';
function LogicConditional() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setIsLoading(!isLoading);
          }}
        >
          {' '}
          {isLoading ? 'Stop Loading' : 'Start Loading'}
        </button>
      </div>
      <LoadIndicator isLoading={isLoading} />
    </>
  );
}

function LoadIndicator({ isLoading }) {
  return <div>{isLoading && <p>Loading....</p>}</div>;
}

export default LogicConditional;
