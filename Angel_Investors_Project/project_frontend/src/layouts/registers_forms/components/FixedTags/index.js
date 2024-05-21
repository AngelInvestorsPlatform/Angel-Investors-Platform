import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FixedTags({ onSelectedValueChange, placeholder }) {
/* 
    If you want to add a fixed value that the user cannot change,
     we use fixedOptions and specify the index for this value

    Then we call the following code:
    disabled={fixedOptions.indexOf(option)!== -1} */

  const fixedOptions = [sectors[8]];
  const [value, setValue] = React.useState([...fixedOptions, sectors[0]]); //The two values inside this box are for specifying initial default values

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onSelectedValueChange(newValue);
  };

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      //size="small"
      limitTags={3}
      value={value}
      onChange={handleChange}
      options={sectors}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            key={index}
            label={option.title}
            {...getTagProps({ index })}
            //disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} placeholder= {placeholder} />
      )}
    />
  );
}

FixedTags.propTypes = {
  onSelectedValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const sectors = [
    { title: 'ML' },
    { title: 'AI' },
    { title: 'Biotech' },
    { title: 'Adtech' },
    { title: 'Analytics' },
    { title: 'Market' },
    { title: 'Agriculture & Food Processing' },
    { title: 'Information Technology' },
    { title: 'ICT' },
    { title: 'Health' },
    { title: 'Finance' },
    { title: 'Education' },
    { title: 'Real Estate' },
    { title: 'Construction' },
    { title: 'Energy' },
    { title: 'Sustainability' },
    { title: 'EdTech' },
    { title: 'Fintech' },
    { title: 'Fashion' },
    { title: 'Retail' },
    { title: 'Telecommunications' },
    { title: 'Media' },
    { title: 'Automotive' },
    { title: 'Environmental' },
    { title: 'Green Tech' },
    { title: 'Cybersecurity' },
    { title: 'Sports' },
    { title: 'Entertainment' },
    { title: 'Pharmaceuticals' },
    { title: 'Logistics' },
    { title: 'Supply Chain' },
    { title: 'Luxury Goods' },
    { title: 'High-End Retail' },

    { title: 'Others'},
];
