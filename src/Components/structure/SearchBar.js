import React, {useState} from 'react';
import './searchBar.css';
import useGetProperties from '../Hooks/useGetProperties'

const SearchBar = ({placeholder, handleFilterClick}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("")
    const {property} = useGetProperties()

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord)
        const newFilter = property.filter((value) => {
            return value.Location.toLowerCase().includes(searchWord.toLowerCase())
        })

        if(searchWord === ''){
            setFilteredData([])
        }
        else{
            setFilteredData(newFilter)
        }
    }

  return (
    <div className='search'>
        <div className='search-filter'>
        <div className='search-inputs'>
            <input
                type='text'
                placeholder={placeholder}
                onChange={handleFilter}
                value={wordEntered}
                />
                <div className='search-icon'>
                    <i class="bi bi-search"></i>
                </div>
        </div>
        <div>
            <button className='filter-button' onClick={handleFilterClick}><i class="bi bi-filter"></i> Filter</button>
        </div>
        </div>
            { 
                filteredData.length !== 0 && ( 
                <div className='data-results'>
                        {filteredData.slice(0,4).map((prop,key) => ( 
                            <div className='location'>
                                <p className='data-item'><i class="bi bi-geo-alt locate"></i>{prop.Location}</p> 
                            </div>))}
                </div>) }
            </div>
  )
}

export default SearchBar