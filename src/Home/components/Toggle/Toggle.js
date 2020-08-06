import React from 'react';
import { Radio } from 'semantic-ui-react'

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <Radio toggle checked={checked} onChange={onChange}/>
    {/* <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    /> */}
  </span>
);

export default Toggle;
