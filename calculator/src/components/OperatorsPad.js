import React from 'react'

function OperatorsPad(props) {
    function handleClick(event) {
        switch (event.target.id) {
            case "divide":
                props.pushToExpression("/");
                break;
            case "multiply":
                props.pushToExpression("*");
                break;
            case "subtract":
                props.pushToExpression("-");
                break;
            case "add":
                props.pushToExpression("+");
                break;
            case "equals":
                props.getResult();
                break;
            default:
                return;
        }
    }

    return (
        <div className="col-3" id="operators">
            <i
                onClick={handleClick}
                className="fas fa-divide button col-12"
                id="divide"
            ></i>
            <i
                onClick={handleClick}
                className="fas fa-times button col-12"
                id="multiply"
            ></i>
            <i
                onClick={handleClick}
                className="fas fa-minus button col-12"
                id="subtract"
            ></i>
            <i onClick={handleClick} className="fas fa-plus button col-12" id="add"></i>
            <i onClick={handleClick} className="fas fa-equals button col-12" id="equals">
                <span style={{ color: "#4d3e3e" }}>=</span>
            </i>
        </div>
    );
}

export default OperatorsPad