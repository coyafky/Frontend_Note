import imageUrl from './assets/Text.jpeg';

function ProfilePicture() {
  const handleClick = () => {
    console.log('OCHO!');
  };
  return (
    <>
      <img onClick={handleClick} src={imageUrl} alt="text" />
    </>
  );
}

export default ProfilePicture;