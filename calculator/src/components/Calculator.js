import React, { useState, useEffect } from 'react'
import Keypad from './Keypad'
import Display from './Display'

function Calculator() {
    const [expression, setExpression] = useState([]);

    function clearAll() {
        setExpression([]);
    }

    function deleteEl() {
        setExpression((prev) => [...prev.slice(0, -1)]);
    }

    function pushToExpression(char) {
        setExpression((prev) => {
            const lastIndex = prev.length - 1;

            if (/[0-9.]/.test(char)) {
                if (prev[lastIndex - 1] === "=") return char;
                if (prev[lastIndex] && prev[lastIndex].length > 9) return prev;
                if (prev.length < 1) return [char];
                if (/[/*\-+]/.test(prev[lastIndex - 1]) && prev[lastIndex] === "-")
                    return [...prev.slice(0, -1), prev[lastIndex] + char];
                if (/[/*\-+](?!.)/.test(prev[lastIndex])) return [...prev, char];
                else {
                    if (char === "." && prev[lastIndex].includes(".")) {
                        return prev;
                    }
                    if (
                        char === "0" &&
                        prev[lastIndex][0] === "0" &&
                        prev[lastIndex].length === 1
                    )
                        return prev;
                    return [...prev.slice(0, -1), prev[lastIndex] + char];
                }
            }
            if (/[/*\-+]/.test(char)) {
                if (prev[lastIndex - 1] === "=") return [prev[lastIndex], char];
                if (/[/*\-+](?!.)/.test(prev[lastIndex])) {
                    if (prev[lastIndex] === "-") {
                        if (/[/*\-+](?!.)/.test(prev[lastIndex - 1]))
                            return [...prev.slice(0, -2), char];
                        else return [...prev.slice(0, -1), char];
                    }
                    if (char === "-") {
                        return [...prev, char];
                    }
                    return [...prev.slice(0, -1), char];
                }
                if (prev.length > 0) return [...prev, char];
                else return prev;
            } else return prev;
        });
    }

    function operation(operator, operand1, operand2) {
        switch (operator) {
            case "/":
                return operand1 / operand2;
            case "*":
                return operand1 * operand2;
            case "-":
                return operand1 - operand2;
            case "+":
                return operand1 + operand2;
            default:
                return;
        }
    }

    function getResult() {
        let array = [...expression];
        let index;

        ["/", "*", "-", "+"].forEach((operator) => {
            while (array.includes(operator)) {
                console.log(array.indexOf(operator));
                index = array.indexOf(operator);
                array = [
                    ...array.slice(0, index - 1),
                    operation(
                        operator,
                        Number(array[index - 1]),
                        Number(array[index + 1])
                    ),
                    ...array.slice(index + 2)
                ];
            }
        });
        setExpression((prev) => {
            let result;

            if (/\..{4,}/.test(String(array[0]))) {
                result = String(array[0].toFixed(4));
            } else result = String(array[0]);

            return prev[prev.length - 2] !== "=" ? [...prev, "=", result] : prev;
        });
    }

    useEffect(() => {
        console.log("expression:", expression);
    }, [expression]);

    return (
        <div className="container" id="calculator">
            <Display expression={expression} />
            <hr />
            <Keypad
                clearAll={clearAll}
                pushToExpression={pushToExpression}
                getResult={getResult}
                deleteEl={deleteEl}
            />
        </div>
    );
}

export default Calculator