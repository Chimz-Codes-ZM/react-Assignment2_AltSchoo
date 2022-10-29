import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate('/users');
  };
  return (
    <div>
      <h1>Welcome! Make yourself at home</h1>
      <h3>Please navigate to our user section by clicking the button below</h3>
      <button onClick={navigateToUsers}>Get Users </button>
    </div>
  );
}

export default Home;
