import Header from "./components/Header";
import Search from "./routes/Search";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import NotFound from "./routes/NotFound";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getApi } from "./actions/Actions";

const App = () => {

  const inputVal = useSelector((reduxStore) => {
    return reduxStore.inputVal;
  });
  const dispatch = useDispatch();

  

  const fn = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=9852f7d&s=${inputVal}`
    );
    const data = await response.json();
    dispatch(getApi(data.Search));
  };

  useEffect(() => {
    fn();
  }, []);

  const search = () => {
    fn();
  };
  return (
    <div className="App">
      <Header search = {search} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
