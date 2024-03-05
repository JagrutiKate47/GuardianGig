import React from "react";
import { useState } from "react";
function ServerLogic(){
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        rememberMe: false
      });
    
      // Handler for input changes
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
      // Handler for form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        
        const jsonData = JSON.stringify(formData);
        console.log(jsonData); 
      };

      return {formData, handleInputChange, handleSubmit};
}
export default ServerLogic