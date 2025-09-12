import React from 'react';
import { Select } from 'antd';

const CountrySelect: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '4px' }}>Country</label>
      <Select
        name="country"
        placeholder="Select a country"
        value={value || undefined}
        onChange={onChange}
        style={{ width: '100%' }}
        options={[
          { label: 'Azerbaijan', value: 'az' },
          { label: 'Turkey', value: 'tr' },
          { label: 'USA', value: 'us' },
        ]}
      />
    </div>
  );
};

export default CountrySelect;
