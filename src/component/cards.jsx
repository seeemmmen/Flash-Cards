import Header from '../component/header.jsx';
import Containercards from "../component/containercards.jsx";
import {useState} from "react";
import '../style/flashcards.css'
export default function Fleshcards(){
    const [counter, setCounter] = useState(0);
    const [answer, setAnswer] = useState(false);




    const toggleChecked = () => setAnswer(answer => !answer);

    const incrementCounter = () => {
        if(counter < 19){
            setCounter(counter + 1);
        }
        else{
            setCounter(0);
        }
        console.log(answer);


    };

    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
        else{
            setCounter(19);
        }
    };
    return (
      <>


          <div className="flashcards">
              <Header id={counter}/>
              <div className="cards">
                  <div className="quastions">
                      <Containercards id={counter} answer={answer}/>
                      <p>{answer}</p>
                  </div>
                  <div className="navigation">
                      <button onClick={decrementCounter}> Previous</button>
                      <p onClick={toggleChecked}>{answer?"Show Answer":"Hide Answer"}</p>
                      <button onClick={ incrementCounter}> Next</button>
                  </div>
              </div>
          </div>

      </>
    );
}