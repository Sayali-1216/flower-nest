// import React, { useState } from 'react';

// const Dropdown = ({ options = [], onChange }) => {
//   const [selectedLabel, setSelectedLabel] = useState('Select Category');
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSelect = (option) => {
//     setSelectedLabel(option.label);
//     setIsOpen(false);
//     onChange(option.value); // pass selected value (category_id)
//   };

//   return (
//     <div style={{ position: 'relative', width: '200px' }}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         style={{
//           width: '100%',
//           padding: '10px',
//           // background: '#f0f0f0',
//           border: '1px solid #000',
//           cursor: 'pointer',
//         }}
//       >
//         {selectedLabel}
//       </button>
//       {isOpen && (
//         <ul
//           style={{
//             listStyle: 'none',
//             padding: '0',
//             margin: '0',
//             border: '1px solid #ccc',
//             borderTop: 'none',
//             backgroundColor: '#fff',
//             position: 'absolute',
//             width: '100%',
//             zIndex: 1,
//             maxHeight: '150px',
//             overflowY: 'auto',
//             color:'black'
//           }}
//         >
//           {options.map((option) => (
//             <li
//               key={option.value}
//               onClick={() => handleSelect(option)}
//               style={{
//                 padding: '10px',
//                 cursor: 'pointer',
//                 borderBottom: '1px solid #eee',
//               }}
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;




import React from 'react';

const Dropdown = ({ label, name, value, onChange, options, placeholder }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {/* {label && <label htmlFor={name}>{label}</label>}<br /> */}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        style={{ padding: '8px', width: '100%' }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
