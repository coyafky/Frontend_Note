import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const profiles = [1, 2, 3, 4, 5];

const ProfilesPage = () => {
  return (
    <div className="flex gap-2">
      <div>
        {profiles.map((profile) => (
          <Link
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => (isActive ? 'text-primary-700' : '')}
          >
            Profile {profile}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilesPage;
