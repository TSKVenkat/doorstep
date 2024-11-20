import { createRoot } from 'react-dom/client';
// import React, { useEffect, useState } from "react";

/* function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching API:", error));
  }, []);
  

  return (
    <div>
      <h1>React + Node.js Full Stack App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App; */

function App() {

  // Clear the existing HTML content
  document.body.innerHTML = `<div id="app" style="background-color:whitesmoke;position:absolute;top:0px;left:0px;width:100%;height:15%;"></div><div class="wrapper">
  <div class="item item1"></div>
  <div class="item item2"></div>
  <div class="item item3"></div>
  <div class="item item4"></div>
  <div class="item item5"></div>
  <div class="item item6"></div>
  <div class="item item7"></div>
  <div class="item item8"></div></div>`;
}
export default App;