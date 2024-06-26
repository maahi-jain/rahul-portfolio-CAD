import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './style.css';

const Category = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'rings', selected: true },
        { id: 2, name: 'pendants', selected: false },
        { id: 3, name: 'chain', selected: false },
        { id: 4, name: 'earrings', selected: false }
    ]);

    const selectCategory = (id) => {
        let updatedCategory = categories.map((category) => {
            if (category.id === id) {
                category.selected = true
            } else {
                category.selected = false
            }
            return category;
        });
        setCategories(updatedCategory);
    }

    return (
        <Stack className='chipStack' justifyContent='center' direction='row' spacing={1}>
            {categories.map((category) => (
                <Chip
                    key={category.id}
                    label={category.name}
                    clickable
                    className={category.selected ? 'selectedChip' : ''}
                    color={category.selected ? 'primary' : 'default'}
                    onClick={() => selectCategory(category.id)}
                />
            ))}
        </Stack>
    );
};

export default Category;
