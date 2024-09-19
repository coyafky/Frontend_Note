function EventPropagation() {
  return (
    <div
      onClick={() => {
        alert('这个是div组件的相应事件');
      }}
    >
      <button
        onClick={() => {
          alert('paly moving');
        }}
      >play movie</button>

      <button
        onClick={() => {
          alert('have a dinner');
        }}
      >have a dinner</button>
    </div>
  );
}

export default EventPropagation;
