import React, { useState } from 'react';
import "../structure/form.css"
const FilterForm = ({ onFilterChange, isActive, close }) => {
  const [Service, setService] = useState(''); // Empty string for "All"
  const [mainPrice, setMainPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [Bedroom, setBedroom] = useState('');
  const [State, setState] = useState('');

  const handleFilter = () => {
    // Filter logic - you can replace this with your actual filtering logic
    console.log('Filter values:', { Service, mainPrice, maxPrice, Bedroom, State });
    onFilterChange({ Service, mainPrice, maxPrice, Bedroom, State });
    console.log('changed');
  };

  const handleServiceChange = (type) => {
    setService(type);
  };

  const handleBedroomChange = (numBedrooms) => {
    setBedroom(numBedrooms);
  };

  const handleLocationChange = (selectedState) => {
    setState(selectedState);
  };

  const handleReset = () => {
    setService('');
    setMainPrice('');
    setMaxPrice('');
    setBedroom('');
    setState('');
    handleFilter(); // Optionally call the filter logic after resetting
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter(); // Call your filter logic here
  };

  return (
    <form onSubmit={handleSubmit} className={`slide-form ${isActive ? 'active' : ''}`}>
      <div className='filter-top'>
      <h1>Filters</h1>
      <i class="bi bi-x-circle-fill close" onClick={close}></i>
      </div>
      <div>
        <label>
          Property Type:
          <select value={Service} onChange={(e) => handleServiceChange(e.target.value)}>
            <option value="">All</option>
            <option value="For sale">For Sale</option>
            <option value="For rent">For Rent</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Main Price:
         
        </label>
        <input type="number" value={mainPrice} onChange={(e) => setMainPrice(e.target.value)} />
      </div>

      <div>
        <label>
          Max Price:
        </label>
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>

      <div>
        <label>Bedrooms:</label>
        <div>
          {[1, 2, 3, 4].map((numBedrooms) => (
            <button
              key={numBedrooms}
              type="button"
              onClick={() => handleBedroomChange(numBedrooms)}
              className={numBedrooms === Bedroom ? 'selected' : ''}
              id='bed-btn'
            >
              {numBedrooms}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label>Location:</label>
        <div className='radio-buttons'>
          <label className='radio-label'>
            <input
              type='radio'
              value='Gold State'
              checked={State === 'Gold State'}
              onChange={() => handleLocationChange('Gold State')}
            />
            Gold State
          </label>
          <label className='radio-label'>
            <input
              type='radio'
              value='Blue State'
              checked={State === 'Blue State'}
              onChange={() => handleLocationChange('Blue State')}
            />
            Blue State
          </label>
          <label className='radio-label'>
            <input
              type='radio'
              value='Marquess State'
              checked={State === 'Marquess State'}
              onChange={() => handleLocationChange('Marquess State')}
            />
            Marquess State
          </label>
          <label className='radio-label'>
            <input
              type='radio'
              value='Grey State'
              checked={State === 'Grey State'}
              onChange={() => handleLocationChange('Grey State')}
            />
            Grey State
          </label>
        </div>
      </div>

      <div>
        <button type='submit' className='apply'>Apply</button>
        <button type='button' className='apply' onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
