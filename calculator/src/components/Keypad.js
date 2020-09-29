import React from 'react'
import SpecialPad from './SpecialPad'
import Numpad from './Numpad'
import OperatorsPad from './OperatorsPad'

function Keypad(props) {
    return (
        <div className="row" id="keypad">
            <div className="col-9">
                <SpecialPad clearAll={props.clearAll} deleteEl={props.deleteEl} />
                <Numpad pushToExpression={props.pushToExpression} />
            </div>
            <OperatorsPad
                pushToExpression={props.pushToExpression}
                getResult={props.getResult}
            />
        </div>
    );
}

export default Keypad