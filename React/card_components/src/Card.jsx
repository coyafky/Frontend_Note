function Card() {
  return (
    <div className="card">
      {/* 图片 */}
      <img className="card-image" src="https://pbs.twimg.com/media/GXHlxnmbEAA5T8k?format=jpg&name=small" alt="this is a profile picture" width={150} height={150}></img>
      {/* 标题 */}
      <h2 className="card-title"> A xyn</h2>
      {/* 描述 */}
      <p className="card-text">I make a picture gem</p>
    </div>
  );
}

export default Card;
