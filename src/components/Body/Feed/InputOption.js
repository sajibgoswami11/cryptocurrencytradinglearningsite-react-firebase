import React from 'react'
import './InputOption.css'
import PropTypes from 'prop-types';

function InputOption({Icon,title,color}) {
    return (
        <div className="inputOption">
           <Icon style={{color:color}}/>
           <h4>{title}</h4> 
        </div>
    )
}

InputOption.propTypes = 
{
    Icon: PropTypes.elementType.isRequired,
    title: PropTypes.elementType.isRequired, color: PropTypes.elementType.isRequired
}
export default InputOption
