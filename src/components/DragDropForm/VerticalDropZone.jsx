import React from 'react';
import FormFieldRenderer from './FormFieldRenderer';

const VerticalDropZone = ({ formFields, onDropField }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const fieldData = JSON.parse(e.dataTransfer.getData('field'));
    onDropField(fieldData);
  };

  return (
    <div
      className="vertical-drop-zone"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {formFields.length > 0 ? (
        formFields.map((field) => (
          <div key={field.id} className="drop-zone-item">
            <FormFieldRenderer field={field} />
          </div>
        ))
      ) : (
        <p>Drag and drop fields here</p>
      )}
    </div>
  );
};

export default VerticalDropZone;
