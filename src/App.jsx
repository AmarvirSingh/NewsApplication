import { useContext, useEffect, useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AllNews from "./components/pages/AllNews";
import Latest from "./components/pages/Latest";
import Political from "./components/pages/Political";
import Technology from "./components/pages/Technology";
import { NewsContext } from "./Context";

function App() {
  const [allNews, setAllnews] = useState([]);

  const [search, setSearch] = useState("");
  // const [pol, setPol] = useState([]);

  useEffect(() => {
    const Top_Headlines = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      import.meta.env.VITE_APIKEY
    }`;
    fetch(Top_Headlines)
      .then((response) => response.json())
      .then((data) => setAllnews(data.articles));
  }, []);

  return (
    <NewsContext.Provider value={{ allNews, setAllnews, search, setSearch }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Latest />} />
        <Route path="/political" element={<Political />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/search" element={<AllNews />} />
      </Routes>
    </NewsContext.Provider>
  );
}

export default App;
