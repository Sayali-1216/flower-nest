import React from 'react';

const InputField = ({ label, type = 'text', name, value, onChange, placeholder }) => {
  return (
    // <div >
    //   {label && <label htmlFor={name}>{label}</label>}<br />
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ padding: '8px', width: '100%' }}
      />
    // </div>

  );
};

export default InputField;