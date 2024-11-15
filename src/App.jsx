import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); 
  const [IncrValue, setIncrValue] = useState(1);
  const [DecMode, setDecMode] = useState(false); 
  const [showPopup, setShowPopup] = useState(false); 
  const [popupMessage, setPopupMessage] = useState(""); 
  const [bgColor, setBgColor] = useState("white");
  const handleButtonClick = () => {
    if (!DecMode) {
      const Counter = count + IncrValue;
      setCount(Counter);

      if (Counter === 10) {
        setIncrValue(10);
      } else if (Counter === 100) {
        setIncrValue(100);
      } else if (Counter >= 1000) {
        setDecMode(true);
      }
    } else {
      const Counter = count - IncrValue;
      setCount(Counter);

      if (Counter === 100) {
        setIncrValue(10);
      } else if (Counter === 10) {
        setIncrValue(1);
      }
    }
  };

  useEffect(() => {
    if (count === 0) {
      setShowPopup(true);
      setPopupMessage("Welcome In Our Page!");
    } else if (count === 10 || count === 100 || count === 1000) {
      setShowPopup(true);
      setPopupMessage(` Wow The Count Begin is ${count}`);
    } else {
      setShowPopup(false);
    }
  }, [count]);

  useEffect(() => {
    if (count === 10) {
      setBgColor("#090e37");
    } else if (count === 100) {
      setBgColor("#0c1b95");
    } else if (count === 1000) {
      setBgColor("#041de1");
    }
  }, [count]);

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      {showPopup && <div className="popup">{popupMessage}</div>} 

      <h1>Count: {count}</h1>
      <button onClick={handleButtonClick}>
        {DecMode ? `Click Here For Decrece ${IncrValue}` : ` Click Here For  Increase  ${IncrValue}`}
      </button>
    </div>
  );
}

export default App;
