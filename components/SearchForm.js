// import React, { useState } from 'react';
// // import inputStyles from '../styles/InputField.module.scss';
// import formStyles from '../styles/SearchForm.module.scss'

// const SearchForm = ({ onSubmit, onClose }) => {
//   const [formData, setFormData] = useState({
//     registerDate: '',
//     customerId: '',
//     customerName: '',
//     companyBusiness: '',
//     location: '',
//     userCount: '',
//     plan: '',
//     payment: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   const handleReset = () => {
//     setFormData({
//       registerDate: '',
//       customerId: '',
//       customerName: '',
//       companyBusiness: '',
//       location: '',
//       userCount: '',
//       plan: '',
//       payment: '',
//     });
//   };

//   return (
//     <form className={formStyles.search_form} onSubmit={handleSubmit}>
//       <h2>Search Companies</h2>
//       <div className={formStyles.form_group}>
//         <label htmlFor="registerDate">Register Date</label>
//         <input
//           type="date"
//           id="registerDate"
//           name="registerDate"
//           value={formData.registerDate}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={formStyles.form_group}>
//         <label htmlFor="customerId">Customer ID</label>
//         <input
//           type="text"
//           id="customerId"
//           name="customerId"
//           value={formData.customerId}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={formStyles.form_group}>
//         <label htmlFor="customerName">Customer Name</label>
//         <input
//           type="text"
//           id="customerName"
//           name="customerName"
//           value={formData.customerName}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={formStyles.form_group}>
//         <label htmlFor="companyBusiness">Company Business</label>
//         <input
//           type="text"
//           id="companyBusiness"
//           name="companyBusiness"
//           value={formData.companyBusiness}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={formStyles.form_group}>
//         <label htmlFor="location">Location</label>
//         <input
//           type="text"
//           id="location"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={formStyles.form_group}>
//         <label htmlFor="userCount">User Count</label>
//         <input
//           type="number"
//           id="userCount"
//           name="userCount"
//           value={formData.userCount}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={formStyles.form_group}>
//         <label htmlFor="plan">Plan</label>
//         <select
//           id="plan"
//           name="plan"
//           value={formData.plan}
//           onChange={handleChange}
//         >
//           <option value="">Select a plan</option>
//           <option value="Free">Free</option>
//           <option value="Pro">Pro</option>
//         </select>
//       </div>
//       <div className={formStyles.form_group}>
//         <label htmlFor="payment">Payment</label>
//         <input
//           type="text"
//           id="payment"
//           name="payment"
//           value={formData.payment}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={formStyles.form_actions}>
//         <button type="button" onClick={handleReset} className={formStyles.button_reset}>Reset</button>
//         <button type="submit" className={formStyles.button_search}>Search</button>
//       </div>
//     </form>
//   );
// };

// export default SearchForm;

import React, { useState } from 'react';
import formStyles from '../styles/SearchForm.module.scss';

const FORM_CONFIGS = {
  company: {
    title: 'Company Search',
    fields: [
      { name: 'registerDate', label: 'Register Date', type: 'date' },
      { name: 'id', label: 'ID', type: 'text' },
      { name: 'name', label: 'Name', type: 'text' },
      { name: 'company', label: 'Company', type: 'text' },
      { 
        name: 'businessType', 
        label: 'Business Type', 
        type: 'select',
        options: [
          { value: '', label: 'Select business type' },
          { value: 'type1', label: 'Type 1' },
          { value: 'type2', label: 'Type 2' }
        ]
      },
      { name: 'location', label: 'Location', type: 'text' },
      { name: 'user', label: 'User', type: 'text' },
      { 
        name: 'plan', 
        label: 'Plan', 
        type: 'select',
        options: [
          { value: '', label: 'Select plan' },
          { value: 'Free', label: 'Free' },
          { value: 'Pro', label: 'Pro' }
        ]
      },
      { 
        name: 'payment', 
        label: 'Payment', 
        type: 'select',
        options: [
          { value: '', label: 'Select payment' },
          { value: 'credit', label: 'Credit Card' },
          { value: 'bank', label: 'Bank Transfer' }
        ]
      }
    ]
  },
  user: {
    title: 'User Search',
    fields: [
      { name: 'registerDate', label: 'Register Date', type: 'date' },
      { name: 'id', label: 'ID', type: 'text' },
      { name: 'email', label: 'E-Mail', type: 'email' },
      { name: 'name', label: 'Name', type: 'text' },
      { name: 'company', label: 'Company', type: 'text' },
      { 
        name: 'businessType', 
        label: 'Business Type', 
        type: 'select',
        options: [
          { value: '', label: 'Select business type' },
          { value: 'type1', label: 'Type 1' },
          { value: 'type2', label: 'Type 2' }
        ]
      },
      { name: 'location', label: 'Location', type: 'text' },
      { name: 'user', label: 'User', type: 'text' },
      { 
        name: 'plan', 
        label: 'Plan', 
        type: 'select',
        options: [
          { value: '', label: 'Select plan' },
          { value: 'Free', label: 'Free' },
          { value: 'Pro', label: 'Pro' }
        ]
      },
      { 
        name: 'payment', 
        label: 'Payment', 
        type: 'select',
        options: [
          { value: '', label: 'Select payment' },
          { value: 'credit', label: 'Credit Card' },
          { value: 'bank', label: 'Bank Transfer' }
        ]
      }
    ]
  },
  access: {
    title: 'Access Log Search',
    fields: [
      { name: 'id', label: 'ID', type: 'text' },
      { name: 'name', label: 'Name', type: 'text' },
      { name: 'action', label: 'Action', type: 'text' },
      { name: 'ipAddress', label: 'IP Address', type: 'text' },
      { 
        name: 'device', 
        label: 'Device', 
        type: 'select',
        options: [
          { value: '', label: 'Select device' },
          { value: 'desktop', label: 'Desktop' },
          { value: 'mobile', label: 'Mobile' },
          { value: 'tablet', label: 'Tablet' }
        ]
      },
      { name: 'browser', label: 'Browser', type: 'text' },
      { name: 'dateFrom', label: 'Date From', type: 'date' },
      { name: 'dateTo', label: 'Date To', type: 'date' },
      { name: 'timeFrom', label: 'Time From', type: 'time' },
      { name: 'timeTo', label: 'Time To', type: 'time' }
    ]
  }
};



const SearchForm = ({ formType, onSubmit, onClose }) => {
  const config = FORM_CONFIGS[formType];
  const initialState = config.fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const renderField = (field) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: formData[field.name],
      onChange: handleChange
    };

    if (field.type === 'select') {
      return (
        <select {...commonProps}>
          {field.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return <input type={field.type} {...commonProps} />;
  };

  return (
    <form className={formStyles.search_form} onSubmit={handleSubmit}>
      <h2>{config.title}</h2>
      {config.fields.map((field) => (
        <div key={field.name} className={formStyles.form_group}>
          <label htmlFor={field.name}>{field.label}</label>
          {renderField(field)}
        </div>
      ))}
      <div className={formStyles.form_actions}>
        <button 
          type="button" 
          onClick={handleReset} 
          className={formStyles.button_reset}
        >
          Reset
        </button>
        <button 
          type="submit" 
          className={formStyles.button_search}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;

