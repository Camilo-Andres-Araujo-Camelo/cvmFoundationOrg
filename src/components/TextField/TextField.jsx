import { React, useState } from 'react';
import './TextField.css';

const TextField = (props) => {
  const { type = 'texto' } = props;

  return (
    <div className={`field field-${type}`}>
      <label htmlFor="name">{props.title}</label>
      <input
        type={type}
        id="name"
        placeholder={props.placeholder}
        required={props.required}
        onChange={(e) => props.updateValue(e.target.value)}
        value={props.value}
      />
    </div>
  );
};

export default TextField;
