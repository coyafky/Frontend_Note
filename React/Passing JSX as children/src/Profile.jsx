import React from 'react';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
      />
    </Card>
  );
}