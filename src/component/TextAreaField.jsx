import React from 'react';

const TextAreaField = ({ label, name, value, onChange, placeholder, rows = 4 }) => {
  return (
    <div >
      {/* {label && <label htmlFor={name}>{label}</label>}<br /> */}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        style={{ padding: '8px', width: '100%' }}
      />
    </div>
  );
};

export default TextAreaField;
