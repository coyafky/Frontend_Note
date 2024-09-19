import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { profileId } = useParams();

  return (
    <div>
      <h1>Profile Page {profileId}</h1>
    </div>
  );
};

export default ProfilePage;