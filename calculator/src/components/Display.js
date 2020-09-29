import React from 'react'

function Display(props) {
    return (
        <div id="outer-display">
            <div id="expression-display">
                {props.expression.length > 0 ? props.expression : "0"}
            </div>
            <div id="display">
                {props.expression.length > 0 ? props.expression.slice(-1) : "0"}
            </div>
        </div>
    );
}

export default Display