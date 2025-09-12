import React from 'react';
import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import CountrySelect from '../components/CountrySelect';
import Button from '../components/Button';

const CreateUpdateCrudExample: React.FC<any> = ({
  formData,
  categoryOptions,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
  handleCancelEdit,
  isSubmitting,
  editingRecord,
}) => {
  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
      <h2>{editingRecord ? 'Edit Record' : 'Add New Record'}</h2>

      {/* New fields */}
      <NameInput value={formData.name} onChange={handleInputChange} />
      <EmailInput value={formData.email} onChange={handleInputChange} />
      <CountrySelect
        value={formData.country}
        onChange={(val) =>
          handleSelectChange({ target: { name: 'country', value: val } })
        }
      />

      {/* Your existing form fields (like category, description, etc.) remain here */}

      <div style={{ marginTop: '16px' }}>
        <Button
          text={editingRecord ? 'Update' : 'Save'}
          onClick={handleSubmit}
          loading={isSubmitting}
          variant="primary"
        />
        <Button
          text="Cancel"
          onClick={handleCancelEdit}
          variant="secondary"
          style={{ marginLeft: '8px' }}
        />
      </div>
    </div>
  );
};

export default CreateUpdateCrudExample;
