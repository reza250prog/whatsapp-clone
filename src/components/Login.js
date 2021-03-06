import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import "./Login.css";

export default function Login() {
  function login() {
    auth.signInWithRedirect(provider);
  }
  return (
    <div className="app">
      <div className="login">
        <div className="login__container">
          <img alt="Logo" src="./login-logo.png" />
          <div className="login__text">
            <h1>sign in to WhatsApp</h1>
          </div>
          <Button onClick={login}>Sign in with Google</Button>
        </div>
      </div>
    </div>
  );
}
