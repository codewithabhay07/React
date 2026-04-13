import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    number:""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    
    
  };

  return (
    <div>
      <input type="text" name="name" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <input type="number" name="number" onChange={handleChange} />
      <h2>{user.name}</h2>
      <h2>{user.password}</h2>
      <h2>{user.number}</h2>
    </div>
  );
}
export default App