import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import './Login.css'
function Login(){
    return(
        <div className="login">
        <form action="">
          <div className="title">Login</div>
          <div className='login-form'>
          <label htmlFor="username"> <FaUser/> Username</label>
          <input className="input-data" type='text' required /> <br />
          <label htmlFor="pass"><RiLockPasswordFill/> Password</label>
          <input type='password'  className='input-data' required/>
           <button id="btn">Login</button>
         <p className="signup-link" >Not yet a member ? <Link to='/signup'>Signup</Link></p>
           </div>
        </form>
    </div>
    )
}

export default Login;