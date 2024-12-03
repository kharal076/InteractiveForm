import React from 'react';

const FormFieldRenderer = ({ field }) => {
  switch (field.type) {
    case 'text':
      return <input type="text" placeholder={field.placeholder || 'Enter text'} />;
    case 'select':
      return (
        <select>
          {field.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    case 'radio':
      return (
        <div>
          {field.options.map((option, index) => (
            <label key={index}>
              <input type="radio" name={field.label} value={option} />
              {option}
            </label>
          ))}
        </div>
      );
    case 'checkbox':
      return (
        <div>
          {field.options.map((option, index) => (
            <label key={index}>
              <input type="checkbox" name={field.label} value={option} />
              {option}
            </label>
          ))}
        </div>
      );
    case 'textarea':
      return <textarea placeholder={field.placeholder || 'Enter detailed text'} />;
    case 'date':
      return <input type="date" />;
    default:
      return null;
  }
};

export default FormFieldRenderer;
