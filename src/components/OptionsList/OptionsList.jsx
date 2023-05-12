import React from 'react';
import './OptionsList.css';

const OptionsList = (props) => {
  return (
    <div className="options-List">
      <label htmlFor="teams">{props.title}</label>
      <select
        name="teams"
        id="teams"
        onChange={(e) => props.updateValue(e.target.value)}
      >
        <option value="" hidden>
          {props.value}
        </option>
        {props.teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsList;
