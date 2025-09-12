import React from 'react';
import { Input as AntInput } from 'antd';

const EmailInput: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '4px' }}>Email</label>
      <AntInput
        type="email"
        name="email"
        value={value}
        onChange={onChange}
        placeholder="Enter your email"
      />
    </div>
  );
};

export default EmailInput;
