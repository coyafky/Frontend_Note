function Avatar({ person, size = 100 }) {
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


function DefinePropsValue() {
             
  return (
    <div>
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
    />
  </div>
  );
}

export default DefinePropsValue;