function UserGreeting(props) {
  // if (props.isLoggedIn) {
  //   return <h2>welcome {props.username}</h2>;
  // }
  // else{
  //   return <p>Please Login to Continute</p>
  // }
  const welcome =<h2 className="welcome-message">welcome {props.username}</h2>
  const loginPrompt=  <h2 className="login-prompt">Please Login to Continute</h2>
  return props.isLoggedIn ? welcome:loginPrompt
}

export default UserGreeting;
