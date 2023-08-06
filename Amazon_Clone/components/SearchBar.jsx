import React, { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';

const CustomSelect = () => {
    const [selectedOption, setSelectedOption] = useState('All');
    const [showDropdown, setShowDropdown] = useState(false);

    const options = [
        { value: '', label: 'All' },
        { value: 'clothing', label: 'Clothing' },
        { value: 'furniture', label: 'Furniture' },
        { value: 'mobiles', label: 'Mobiles' },
        { value: 'electronics', label: 'Electronics' },
        { value: 'apps', label: 'Apps' },
        { value: 'games', label: 'Games' },
        { value: 'books', label: 'Books' },
        { value: 'sports', label: 'Sports' },
        { value: 'movies', label: 'Movies' },
        { value: 'music', label: 'Music' },
    ];

    const handleOptionChange = (option) => {
        setSelectedOption(option.value);
        setShowDropdown(false);
    };

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    return (
        <div className="w-96 xs:w-auto h-9 flex items-center lg:flex-1 ">

            <div className="relative inline-flex">
                <button
                    onClick={toggleDropdown}
                    className="h-9 flex items-center justify-center outline-none cursor-pointer bg-gray-200 text-black border hover:border-amazon_yellow text-xs xl:text-sm rounded-tl-md rounded-bl-md px-2"
                >
                    {selectedOption}
                    <span><BiCaretDown /></span>

                </button>
                {showDropdown && (
                    <div className="absolute w-52 mt-12 text-black bg-white border border-gray-300 rounded-lg shadow">
                        {options.map((option) => (
                            <a
                                key={option.value}
                                href="#"
                                className={`block px-8 py-2 ${selectedOption === option.value ? 'bg-gray-100' : 'hover:bg-blue-500'
                                    }`}
                                onClick={() => handleOptionChange(option)}
                            >
                                {option.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <input
                type="text" className='w-full h-full px-2 placeholder:text-sm text-base text-black border-[3px]
                +border-transparent outline-none focus-visible:border-amazon_yellow' placeholder='Search Amazon.in' />
            <span className='cursor-pointer w-8 sml:w-10 mdl:w-14 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center rounded-tr-md rounded-br-md'>
                <HiOutlineSearch />
            </span>
        </div>
    );
};

export default CustomSelect;
