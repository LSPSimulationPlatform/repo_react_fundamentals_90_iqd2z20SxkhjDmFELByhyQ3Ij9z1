import React from 'react';
import { Input as AntInput } from 'antd';

const NameInput: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '4px' }}>Name</label>
      <AntInput
        name="name"
        value={value}
        onChange={onChange}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default NameInput;
