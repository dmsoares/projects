import React from 'react';

function Slider(props) {
    function handleChange(event) {
        const bpm = event.target.value;
        const root = document.documentElement;

        props.changeBpm(bpm);
        root.style.setProperty('--animationPeriod', `${60 / bpm}s`)
    }

    return (
        <div className='form-group'>
            <input
                onChange={handleChange}
                type='range'
                id='slider'
                min='20'
                max='220'
                value={props.bpm} />
            <label id='slider-label' htmlFor='slider'>{props.bpm} bpm</label>
        </div>
    )
}

export default Slider;