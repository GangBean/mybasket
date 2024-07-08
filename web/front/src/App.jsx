import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

export const HOME_URL = "http://localhost";
export const Pages = {
  MAIN: "main",
  LOGIN: "login",
  MyPAGE: "myPage",
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [page, setPage] = useState(Pages.MAIN);

  useEffect(getSessionState, []);

  return (
    // <div>
    //   <div className="App">
    //     <header className="App-header">
    //       <h1>Hello, MyBasket!</h1>
    //     </header>
    //   </div>
    //   <div>
    //     <LoginButton isLoggedIn={isLoggedIn} />
    //   </div>
    //   <div>
    //     <RecommendationHistoryCardList isLoggedIn={isLoggedIn} />
    //   </div>
    // </div>
    <>
      <Header isLoggedIn={isLoggedIn}></Header>
      <Body isLoggedIn={isLoggedIn} state={page}></Body>
      <Footer isLoggedIn={isLoggedIn}></Footer>
    </>
  )
};

const getSessionState = () => {
  axios.get('http://localhost:8080/api/auth/sessions', { withCredentials: true })
    .then(response => {
      if (response.data.loggedIn) {
        setIsLoggedIn(response.data.loggedIn);
        console.log("logged in!" + response.data.loggedIn)
      }
    })
    .catch(error => {
      console.error("Error checking login status", error);
    });
};

export default App;
