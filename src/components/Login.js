import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { error, login } = useAuth();

    const handleChange = ({target: {name, value}}) => {
        // console.log(e.target.name, e.target.value);
        // console.log(name, value);
        setUser({...user, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user.email, user.password);
        
    }

    return (
      <div>
        {error.loginError && <p>{error.loginError}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="youremail@company.com" onChange={handleChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="**************" onChange={handleChange}/>
          <button>Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;