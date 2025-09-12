import { useState } from 'react';
import { message } from 'antd';

export default function useCrudExample() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    category: '',
    description: '',
  });

  // Dropdown options for category
  const categoryOptions = [
    { label: 'Technology', value: 'tech' },
    { label: 'Science', value: 'science' },
    { label: 'Art', value: 'art' },
  ];

  // State for all records
  const [records, setRecords] = useState<any[]>([]);
  const [editingRecord, setEditingRecord] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle text input changes (name, email, description)
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle dropdown/select changes (category, country)
  const handleSelectChange = (e: any) => {
    // If triggered manually (like for country)
    if (e.target) {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      // For Ant Design Select component
      setFormData((prev) => ({ ...prev, country: e }));
    }
  };

  // Handle form submit (create or update record)
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.country) {
      message.error('Please fill in Name, Email, and Country!');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      if (editingRecord) {
        // Update existing record
        setRecords((prev) =>
          prev.map((rec) =>
            rec.key === editingRecord.key ? { ...rec, ...formData } : rec
          )
        );
        message.success('Record updated successfully!');
      } else {
        // Add new record
        const newRecord = {
          key: Date.now(),
          ...formData,
        };
        setRecords((prev) => [...prev, newRecord]);
        message.success('Record added successfully!');
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        country: '',
        category: '',
        description: '',
      });
      setEditingRecord(null);
      setIsSubmitting(false);
    }, 800);
  };

  // Handle edit
  const handleEdit = (record: any) => {
    setFormData(record);
    setEditingRecord(record);
  };

  // Handle delete
  const handleDelete = (key: number) => {
    setRecords((prev) => prev.filter((rec) => rec.key !== key));
    message.success('Record deleted successfully!');
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setFormData({
      name: '',
      email: '',
      country: '',
      category: '',
      description: '',
    });
    setEditingRecord(null);
  };

  // Table columns config
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Country', dataIndex: 'country', key: 'country' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <>
          <a onClick={() => handleEdit(record)} style={{ marginRight: 8 }}>
            Edit
          </a>
          <a onClick={() => handleDelete(record.key)} style={{ color: 'red' }}>
            Delete
          </a>
        </>
      ),
    },
  ];

  return {
    formData,
    categoryOptions,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancelEdit,
    columns,
    records,
    editingRecord,
    setEditingRecord,
    isSubmitting,
    setIsSubmitting,
  };
}
