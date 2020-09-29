import React from 'react'

function SpecialPad(props) {
    function handleClick(event) {
        switch (event.target.id) {
            case "delete":
                props.deleteEl();
                break;
            case "clear":
                props.clearAll();
                break;
            default:
                return;
        }
    }

    return (
        <div className="row clear">
            <div onClick={handleClick} className="button col-4" id="clear">
                AC
      </div>
            <i
                onClick={handleClick}
                className="fas fa-backspace button col-4"
                id="delete"
            ></i>
        </div>
    );
}

export default SpecialPad