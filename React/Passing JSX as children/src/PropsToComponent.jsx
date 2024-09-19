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
function PropsToComponent() {
  return (
    <div>
      <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />
    </div>
  );
}

export default PropsToComponent;
