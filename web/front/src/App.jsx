import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginButton from './Login';
import RecommendationHistoryCardList from './RecommendationHistoryCardList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/api/auth/sessions', { withCredentials: true }) // 쿠키 포함 요청
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

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Hello, MyBasket!</h1>
        </header>
      </div>
      <div>
        <LoginButton isLoggedIn={isLoggedIn} />
      </div>
      <div>
        <RecommendationHistoryCardList isLoggedIn={isLoggedIn} />
      </div>
    </div>
  )
}

export default App;
