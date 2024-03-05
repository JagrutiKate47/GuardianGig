import users from "./users";
import { useState } from "react";
function ValidateUser(email, password) {
  const user = users.find(user => user.email === email);
  if (!user) {
    return { success: false, message: 'User not found' };
  }
  if (user.password !== password) {
    return { success: false, message: 'Invalid password' };
  }
  else{
    return { success: true, user };
  }
}
function LoginResult(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = ValidateUser(email, password);
    if (result.success) {
      // User authenticated, perform desired action (e.g., redirect to dashboard)
      console.log('User authenticated:', result.user);
    } else {
      setError(result.message);
    }
  };
  return {email, password,error,handleSubmit, setEmail,setPassword}
}


export default LoginResult;
