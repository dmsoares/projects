import React from 'react'

function Numpad(props) {
    function handleClick(event) {
        props.pushToExpression(event.target.innerHTML);
    }

    return (
        <div className="row" id="numpad">
            <div onClick={handleClick} className="button col-4" id="seven">
                7
      </div>
            <div onClick={handleClick} className="button col-4" id="eight">
                8
      </div>
            <div onClick={handleClick} className="button col-4" id="nine">
                9
      </div>
            <div onClick={handleClick} className="button col-4" id="four">
                4
      </div>
            <div onClick={handleClick} className="button col-4" id="five">
                5
      </div>
            <div onClick={handleClick} className="button col-4" id="six">
                6
      </div>
            <div onClick={handleClick} className="button col-4" id="one">
                1
      </div>
            <div onClick={handleClick} className="button col-4" id="two">
                2
      </div>
            <div onClick={handleClick} className="button col-4" id="three">
                3
      </div>
            <div onClick={handleClick} className="button col-4" id="zero">
                0
      </div>
            <div onClick={handleClick} className="button col-4" id="decimal">
                .
      </div>
        </div>
    );
}

export default Numpad