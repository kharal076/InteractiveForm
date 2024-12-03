import React from 'react';

const fieldTypes = [
  { type: 'text', label: 'Text Field', placeholder: 'Enter text' },
  { type: 'select', label: 'Dropdown', options: ['Option 1', 'Option 2'] },
  { type: 'radio', label: 'Radio Buttons', options: ['Yes', 'No'] },
  { type: 'checkbox', label: 'Checkboxes', options: ['Option A', 'Option B'] },
];

const FieldLibrary = () => {
  const handleDragStart = (e, field) => {
    e.dataTransfer.setData('field', JSON.stringify(field));
  };

  return (
    <div className="field-library">
      <h3>Field Library</h3>
      {fieldTypes.map((field) => (
        <div
          key={field.type}
          className="draggable-item"
          draggable
          onDragStart={(e) => handleDragStart(e, field)}
        >
          {field.label}
        </div>
      ))}
    </div>
  );
};

export default FieldLibrary;
