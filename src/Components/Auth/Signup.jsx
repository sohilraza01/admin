import { Link } from 'react-router-dom';
import './Signup.css'
function Signup() {
    return ( 
        <div className="signup">
        <form  action="">
          <div className="title">Sign Up</div>
          <div className="signup-form">
            <label htmlFor="username">Username</label>
          <input type='text' name='username' required  />
          <label htmlFor="email">Email</label>
          <input type='email' name='email' required />
          <label htmlFor="password">Password</label>
          <input type='password' name='password' required />
           <label htmlFor="password">Confirm-Password</label>
           <input type="password" name="password" required />
           <label htmlFor="role">Role</label>
           <select className='role'> 
           
            <option>Admin</option>
            <option>Agent</option>
            <option>Donor</option>
           </select>
           <button id="btn">Sign-up</button>
           <p>Already have an Account ? <Link to='/login'>Login</Link></p>
           </div>
        </form>
     </div> 
     );
}

export default Signup;