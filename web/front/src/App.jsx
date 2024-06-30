import React, { useEffect, useState } from 'react';
import LoginButton from './LoginButton';
import Recipe from './Recipe';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipeNo, setRecipeNo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/auth/check', { withCredentials: true }) // 쿠키 포함 요청
      .then(response => {
        if (response.data.loggedIn) {
          setIsLoggedIn(response.data.loggedIn);
          console.log("logged in!" + response.data.loggedIn)
        }
      })
      .catch(error => {
        console.error("Error checking login status", error);
      });
  }, []);

  // 레시피 번호 입력 핸들러
  const handleRecipeNoChange = (e) => {
    setRecipeNo(e.target.value);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Hello, MyBasket!</h1>
        </header>
      </div>
      <div>
        {isLoggedIn ? (
          <h2>Welcome!</h2>
        ) : (
          <LoginButton />
        )}
      </div>
      <div>
        <form>
          <label>
            Enter Recipe Number:
            <input type="text" value={recipeNo} onChange={handleRecipeNoChange} />
          </label>
        </form>
        {recipeNo && <Recipe recipeNo={recipeNo} />}
      </div>
    </div>
  );
}

export default App;
