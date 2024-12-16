// App component: App.jsx
import React, { useState, useEffect, createContext } from "react";
import TweetInput from "./Components/TweetInput";
import TweetList from "./Components/TweetList";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import "./App.css";

export const AppContext = createContext();

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    // Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
    // ...
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <Sidebar />
        <button onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <main>
          <Profile />
          <TweetInput addTweet={addTweet} />
          <TweetList tweets={tweets} />
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;
