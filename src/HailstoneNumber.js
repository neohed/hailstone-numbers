import React, {useRef, useLayoutEffect, useState} from 'react'
import {generateHailstoneNumbers} from './hailstoneNumbers'
import {scale, generatePath} from './svg'

const HailstoneNumber = ({n, clickHandler, selected}) => {
    const me = useRef(null);
    const [{width, height}, setDimensions] = useState({ width: 120, height: 120 });
    const {max, numbers} = generateHailstoneNumbers(n);

    const viewBoxWidth = 1200;
    const viewBoxHeight = 1200;

    const scaleX = scale(viewBoxWidth / numbers.length);
    const scaleY = scale(viewBoxHeight / max);

    useLayoutEffect(() => {
        if (selected) {
            const {top, left, bottom, right} = me.current.getBoundingClientRect();
            setDimensions({
                width: right - left,
                height: bottom - top
            });
        } else {
            setDimensions({
                width: 120,
                height: 120
            });
        }
    }, [selected]);

    return (
        <div onClick={() => clickHandler(n)} className={selected ? 'full' : ''} ref={me}>
            <svg width={width} height={height} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} style={{backgroundColor: 'white'}}>
                <g transform={`translate(0, ${viewBoxHeight}) scale(1, -1)`}>
                    <path
                        d={generatePath(n, numbers, scaleX, scaleY)}
                        style={{stroke: '#000', fill: 'none', strokeWidth: '6px'}}
                    />
                </g>
            </svg>
        </div>
    )
};

export default HailstoneNumber;
