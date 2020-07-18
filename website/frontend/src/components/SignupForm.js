import React, {useState, useContext} from "react";
import {UserContext} from "../context/UserContext";
import axios from "axios";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import "../css/components/SignupForm.css";


function SignupForm() {
  const {user, setUser} = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    var data = {
      username: username,
      password1: password1,
      password2: password2
    }
    
    axios.post("/api/user/register", data)
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          setError("");
          setUser(res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      })

  }

  return(
    <form className="signup-form-container bg-white" onSubmit={handleClick}>
      <h3>Create an Account</h3>
      <OutlinedInput placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <OutlinedInput placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)}/>
      <OutlinedInput placeholder="Confirm Password" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
      {error ? <p className="error">{error}</p> : null}
      <button className="nav-pill-primary" type="submit">
        Signup
      </button>
    </form>
  )
}

export default SignupForm;