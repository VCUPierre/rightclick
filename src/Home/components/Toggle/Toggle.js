import React from 'react';
import { Radio } from 'semantic-ui-react';

const Toggle = ({ checked, onChange }) => (
    <span className="toggle-control">
        <Radio toggle checked={checked} onChange={onChange} />
    </span>
);

export default Toggle;
