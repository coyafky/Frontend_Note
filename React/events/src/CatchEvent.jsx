function CatchEvent() {
  return (
    <>
      <div
        onClickCapture={() => {
          console.log('Captrued event on the parent div');
        }}
        onClick={() => {
          console.log('Bubbled event on ythe parent div');
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log('Clicked  on the button ');
          }}
        >
          Click me
        </button>
      </div>
    </>
  );
}

export default CatchEvent;
