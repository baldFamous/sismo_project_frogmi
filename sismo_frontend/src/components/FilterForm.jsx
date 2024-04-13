import React, { useState } from 'react';

const FilterForm = ({ onFilterChange }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);

    const magTypes = ['md', 'ml', 'ms', 'mw', 'me', 'mi', 'mb', 'mlg'];

    const handleTypeChange = (type) => {
        const newSelectedTypes = selectedTypes.includes(type)
        ? selectedTypes.filter(t => t !== type)
        : [...selectedTypes, type];
        setSelectedTypes(newSelectedTypes);
        onFilterChange(newSelectedTypes);
    };

    return (
        <div className="filter-form p-4 bg-white shadow-md rounded-lg flex flex-wrap items-center justify-start gap-2">
            <p className="font-semibold mr-2">Filters:</p>
            {magTypes.map(type => (
                <label key={type} className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleTypeChange(type)}
                    />
                    <span className="text-gray-700 text-sm">{type.toUpperCase()}</span>
                </label>
            ))}
        </div>
    );
    };

export default FilterForm;
