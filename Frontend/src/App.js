import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Login from "./components/Login"
import Register from "./components/Signup"
// import { useState } from 'react';

function App() {
  // const [ user, setLoginUser] = useState({})
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
        {/* <Route exact path="/">
            {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />}/>
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
