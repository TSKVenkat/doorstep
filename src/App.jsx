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

import React, { useState } from "react";

function App() {

  const [hoveredButton, setHoveredButton] = useState(null);

  // Function to handle hover
  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  // Function to handle button click
  const handleClick = (buttonName) => {
    if(buttonName === "Sign In"){
      window.location.href = "/auth";
    }
  };

  // Button default styles
  const buttonStyle = {
    width: "100%", // Set width to fit content properly
    height: "60px", // Adjust the height for better alignment
    border: "0px",
    fontFamily: "Host Grotesk",
    fontSize: "2rem", // Reduce font size for better appearance
    fontWeight: "bold",
    background: "transparent", // Button background stays white
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: "#005197", // Default text color
    overflow: "hidden",
    position: "relative",
    display: "flex", // Use flexbox for centering content
    alignItems: "center", // Vertically center the text
    justifyContent: "center", // Horizontally center the text
  };

  // Text style for button with conditional hover effect
  const textStyle = (isHovered) => ({
    position: "relative",
    zIndex: 2,
    color: isHovered ? "transparent" : "#005197", // Default or transparent
    backgroundImage: isHovered
      ? "linear-gradient(to bottom, #ff6600, #FF8C06, transparent)" // Gradient when hovered
      : "none",
    backgroundSize: "cover",
    WebkitBackgroundClip: isHovered ? "text" : "none",
    MozBackgroundClip: isHovered ? "text" : "none",
    backgroundClip: isHovered ? "text" : "none",
    transition: "all 0.3s ease",
  });

  return (
    <div>
      <div
        id="app"
        style={{
          backgroundColor: 'whitesmoke',
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '15%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}

      ><div style={{ "alignSelf": "center", 'backgroundColor': 'transparent', 'width': '90%', 'height': '90%', 'display': 'flex', 'flexDirection': 'row-reverse' }}>
          <div style={{ 'alignSelf': 'center', 'backgroundColor': 'transparent', 'width': '40%', 'height': '60%', 'display': 'flex', 'justifyContent': 'space-evenly' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              {['Features', 'Contact', 'Sign In'].map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(button)}
                  onMouseEnter={() => handleMouseEnter(button)}
                  onMouseLeave={handleMouseLeave}
                  style={buttonStyle}
                >
                  <span style={textStyle(hoveredButton === button)}>{button}</span>
                </button>
              ))}
            </div></div>
        </div>
      </div>
      <div className='tagline'>
        <div>
          <p className="tag1">Deal.</p>
          <p className="tag2">Sealed.</p>
          <p className="tag3">Delivered.</p>
        </div>
        <div className="Home-para1">Your ultimate online shopping destination! At DoorStep, we bring the world of convenience to your fingertips, offering a wide range of products to suit your every need. From the latest fashion trends and cutting-edge electronics to everyday essentials and unique home decor, we’ve got it all covered. Shop with ease, enjoy seamless delivery, and experience exceptional customer service—all from the comfort of your home. At <strong>DoorStep</strong>, we’re committed to making your shopping experience fast, reliable, and hassle-free.</div>
      </div>
      <div className="wrapper">
        <div className="item item1"><p>Sheesh</p></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
        <div className="item item4"></div>
        <div className="item item5"></div>
        <div className="item item6"></div>
        <div className="item item7"></div>
        <div className="item item8"></div>
      </div>
    </div >
  )
}

export default App;