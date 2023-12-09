import React, { useRef } from "react";
import { useStackState } from "rooks";


function App() {

  const numberToPushRef = useRef(0);
  const [
      list,
      { push, pop, peek, length },
      listInReverse,
  ] = useStackState([]);

  function addToStack() {
      numberToPushRef.current =
          numberToPushRef.current + 1;
      push(numberToPushRef.current);
  }



  return (
    <>
<div className="container">
<div className="box">
<h1>
                Stack LIFO (Last In First Out)
            </h1>
            <div
            >
                {listInReverse.map((item) => {
                    return (
                        <div className="result"
        
                            key={item}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
            <div className="buttons">
            <button className="button"

                onClick={addToStack}
            >
                Push
            </button>
            <button className="button"
                onClick={pop}
            >
                Pop
            </button>
            </div>
            <p className="text"
            >
                Last In : {peek()}
            </p>
 
            <p className="text"
            >
                Stack Size : {length}
            </p>
            </div>

            </div>

    </>
  )
}

export default App
