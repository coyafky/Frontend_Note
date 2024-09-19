import React from 'react';

function UserInfo() {
  const user = {
    name: 'coya',
    email: 'coya20020824@gmail.com',
    imageUrl:
      'https://pbs.twimg.com/media/GWtV8G3XoAAq_45?format=jpg&name=small',
    imageSize: 150,
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email:{user.email}</p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}

export default UserInfo;
