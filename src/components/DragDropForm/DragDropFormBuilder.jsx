import React, { useState } from 'react';
import FieldLibrary from './FieldLibrary';
import VerticalDropZone from './VerticalDropZone';
import './styles.css';

const DragDropFormBuilder = () => {
  const [formFields, setFormFields] = useState([]);

  const onDropField = (field) => {
    setFormFields((prev) => [...prev, { ...field, id: Date.now() }]);
  };

  return (
    <div className="form-builder">
      <FieldLibrary />
      <VerticalDropZone
        formFields={formFields}
        onDropField={onDropField}
      />
    </div>
  );
};

export default DragDropFormBuilder;
