import React from 'react';

function Test(props) {
    const numbers = [5, 10, 15, 22];
    const a = numbers.map(number =>{
        return (
            <div>{number * 2}</div>
        )
    })
    return (
        <div>
            {a}
        </div>
    );
}

export default Test;