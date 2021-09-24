import React, { Fragment } from 'react'
import ReactDOMServer from 'react-dom/server'
import { writeFileSync } from 'fs'

export function render( Component ){
    writeFileSync( './resources/index.gui', ReactDOMServer.renderToStaticMarkup( <Component /> ) );
}

export function forRange( from, to, a_step, a_fun ){
    const fun = a_fun || a_step,
        step = a_fun ? a_step : 1;

    const res = [];

    for( let i = from; i <= to; i += step ){
        const element = fun( i );
        element && res.push( element );
    }

    return res;
}

export const GRotate = ({ angle, children, ...rest }) =>
    angle ? 
        <g transform={`rotate(${ angle })`} {...rest}>
            { children }
        </g>
    :
        <g {...rest}>
            { children }
        </g>

export const Number = ({ id, size, x,y, color }) =>
    <text id={ id + '-int' } x={x} y={y} textAnchor="middle" fill={color}/>