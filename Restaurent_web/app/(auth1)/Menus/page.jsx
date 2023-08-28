import React from 'react';
import FoodCategory from '../FoodCategories/page';
import { foodCategories } from '../Data/page';
const Menu = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold mb-8 p-2 text-center">Main Course</h1>
            <div className="grid md:grid-cols-2 mt-8 gap-12 text-center text-[12px] md:text-sm">
                {foodCategories.map(category => (
                    <FoodCategory key={category.id} name={category.name} items={category.items} />
                ))}
            </div>
        </>
    );
};

export default Menu;
