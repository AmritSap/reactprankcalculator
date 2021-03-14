import logo from './logo.svg';
import {Display} from './components/display/Display'
import {Buttons} from './components/buttonContainer/Buttons'
import {useState} from 'react'
import './App.css';

const App= () => {

  // declare local vairable for display text
  const [displayText, setdisplayText] = useState("");
  const [History, setHistory] = useState("");
  const [total, settotal] = useState();
  const [calculatorOn, setcalculatorOn] = useState(true);
  // receive value when button is clicked
  const handleOnButtonClick= buttonValue =>{
    //  if there is something in total then settotal will be zero
    if (total){
      settotal(null);
    }
    // total and return
    if (buttonValue === "="){
      const ttl=eval(displayText);
      // make total prank
      let extra=Math.ceil(Math.random()*10)
      {
        extra=0;
      }
      setHistory(displayText);
      setdisplayText("")
         return settotal(ttl + extra);
    }

    // turn calculator off and on
    if (buttonValue=== "OFF"){
   
      return setcalculatorOn(false);
    }

    // backspace on c click
    if (buttonValue=== "C"){
      const str = displayText.slice(0,-1)
      return setdisplayText(str);
    }
    // empty display on Ac click
    if (buttonValue=== "AC"){
   
      return setdisplayText("");
    }
    // concat the valuews
   setdisplayText(displayText + buttonValue);
  }
  
  return (
    <div className="App">
      <h1 style={{textAlign:"center",color:"blue"}}>Prank Calculator</h1>
   <div className="container">
     <div className="calculator">
       <div style={{textAlign:"right",margin:"5px"}}>
         {total && History}
       </div>
    <Display txtDisp={displayText}
    totalValue={total}/>
    {calculatorOn ?(<Buttons buttonClick={handleOnButtonClick}/>)
    :(
      <button className="btnOn" onClick={()=> setcalculatorOn(true)}>
        ON
      </button>
    )
    }
     </div>
   </div>
    </div>
  );
}

export default App;
