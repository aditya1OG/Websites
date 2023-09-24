'use client';

import React, { useState, useRef } from 'react';
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineUnderline,
    AiOutlineUnorderedList,
} from 'react-icons/ai';
import { LuSubscript, LuSuperscript } from 'react-icons/lu';
import { BsTextRight, BsTextLeft, BsTextCenter } from 'react-icons/bs';
import { BiFontColor } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import Select from 'react-select';
import { ChromePicker } from 'react-color';

const TextEditor = () => {
    const [text, setText] = useState('');
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [fontSize, setFontSize] = useState('16px');
    const [fontFamily, setFontFamily] = useState('Arial');
    const [alignment, setAlignment] = useState('left');
    const [bulletedList, setBulletedList] = useState(false);
    const [textColor, setTextColor] = useState('#000000');
    const [subscript, setSubscript] = useState(false);
    const [superscript, setSuperscript] = useState(false);
    const [colorPickerOpen, setColorPickerOpen] = useState(false);
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

    const fontSizes = [
        { label: '12px', value: '12px' },
        { label: '16px', value: '16px' },
        { label: '20px', value: '20px' },
    ];

    const emojis = [
        { label: 'Smile 😀', emoji: '😀' },
        { label: 'Heart ❤️', emoji: '❤️' },
        { label: 'Thumbs Up 👍', emoji: '👍' },
        { label: 'Clapping Hands 👏', emoji: '👏' },
        { label: 'Tears of Joy 😂', emoji: '😂' },
        { label: 'Winking Face 😉', emoji: '😉' },
        { label: 'Fire 🔥', emoji: '🔥' },
        { label: 'Rocket 🚀', emoji: '🚀' },
        { label: 'Rainbow 🌈', emoji: '🌈' },
        { label: 'Pizza 🍕', emoji: '🍕' },
    ];

    const fontFamilies = [
        { label: 'Arial', value: 'Arial, sans-serif' },
        { label: 'Times New Roman', value: 'Times New Roman, serif' },
        { label: 'Courier New', value: 'Courier New, monospace' },
    ];

    const alignments = [
        { label: 'Left', value: 'left', icon: <BsTextLeft /> },
        { label: 'Center', value: 'center', icon: <BsTextCenter /> },
        { label: 'Right', value: 'right', icon: <BsTextRight /> },
    ];

    const colorPickerButtonRef = useRef(null);

    const handleBold = () => {
        setBold(!bold);
    };

    const handleItalic = () => {
        setItalic(!italic);
    };

    const handleUnderline = () => {
        setUnderline((prevState) => !prevState);
    };

    const handleFontSizeChange = (selectedOption) => {
        setFontSize(selectedOption.value);
    };

    const handleFontFamilyChange = (selectedOption) => {
        setFontFamily(selectedOption.value);
    };

    const handleAlignmentChange = (selectedOption) => {
        setAlignment(selectedOption.value);
    };

    const handleToggleBulletedList = () => {
        setBulletedList(!bulletedList);
    };

    const toggleColorPicker = () => {
        const buttonRect = colorPickerButtonRef.current.getBoundingClientRect();
        const top = buttonRect.bottom + window.scrollY + 5;
        const left = buttonRect.left + window.scrollX;
        setColorPickerPosition({ top, left });
        setColorPickerOpen((prevState) => !prevState);
    };

    const toggleEmojiPicker = () => {
        setEmojiPickerOpen((prevState) => !prevState);
    };

    const handleTextColorChange = (color) => {
        setTextColor(color.hex);
    };

    const handleSubscript = () => {
        setSubscript(!subscript);
        if (subscript) setSuperscript(false);
    };

    const handleSuperscript = () => {
        setSuperscript(!superscript);
        if (superscript) setSubscript(false);
    };

    const insertEmoji = (emoji) => {
        setText(text + emoji);
        setEmojiPickerOpen(false);
    };

    const [colorPickerPosition, setColorPickerPosition] = useState({ top: 0, left: 0 });

    return (
        <div className="pr-12 border-none flex flex-wrap w-[95%] lg:w-[85%] xl:w-[75%]">
            <div className="flex mb-2 flex-wrap gap-3">
                <button
                    className={`px-2 py-1 mr-2 ${bold ? 'bg-blue-500 text-white' : ''}`}
                    onClick={handleBold}
                >
                    <AiOutlineBold />
                </button>
                <button
                    className={`px-2 py-1 mr-2 ${italic ? 'bg-blue-500 text-white' : ''}`}
                    onClick={handleItalic}
                >
                    <AiOutlineItalic />
                </button>
                <button
                    className={`px-2 py-1 mr-2 ${underline ? 'bg-blue-500 text-white' : ''}`}
                    onClick={handleUnderline}
                >
                    <AiOutlineUnderline />
                </button>
                <Select
                    className="w-24 mx-2"
                    options={fontSizes}
                    onChange={handleFontSizeChange}
                    defaultValue={fontSizes[1]}
                />
                <Select
                    className="w-32"
                    options={fontFamilies}
                    onChange={handleFontFamilyChange}
                    defaultValue={fontFamilies[0]}
                />
                {alignments.map((alignOption) => (
                    <button
                        key={alignOption.value}
                        className={`px-2 py-1 ${alignment === alignOption.value ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => handleAlignmentChange(alignOption)}
                    >
                        {alignOption.icon}
                    </button>
                ))}
                <button
                    className={`px-2 py-1 ${bulletedList ? 'bg-blue-500 text-white' : ''}`}
                    onClick={handleToggleBulletedList}
                >
                    <AiOutlineUnorderedList />
                </button>
                <button
                    className={`px-2 py-1`}
                    onClick={toggleColorPicker}
                    ref={colorPickerButtonRef}
                >
                    <BiFontColor style={{ color: textColor }} />
                </button>
                <button
                    className={`px-2 py-1`}
                    onClick={handleSubscript}
                >
                    <LuSubscript
                        style={{ verticalAlign: subscript ? 'baseline' : 'unset' }}
                    />
                </button>
                <button
                    className={`px-2 py-1`}
                    onClick={handleSuperscript}
                >
                    <LuSuperscript
                        style={{ verticalAlign: superscript ? 'super' : 'unset' }}
                    />
                </button>
                <button
                    className={`px-2 py-1`}
                    onClick={toggleEmojiPicker}
                >
                    <GrEmoji />
                </button>
            </div>
            {emojiPickerOpen && (
                <div className="emoji-picker">
                    {emojis.map((emojiObj) => (
                        <button
                            key={emojiObj.emoji}
                            onClick={() => insertEmoji(emojiObj.emoji)}
                            className="emoji-button"
                        >
                            {emojiObj.emoji}
                        </button>
                    ))}
                </div>
            )}
            {colorPickerOpen && (
                <div
                    className="color-picker-container"
                    style={{ top: colorPickerPosition.top, left: colorPickerPosition.left }}
                >
                    <ChromePicker
                        className="mt-2"
                        color={textColor}
                        onChangeComplete={(color) => handleTextColorChange(color)}
                    />
                </div>
            )}
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={`mt-3 p-2 w-full h-48 border rounded-lg text-sm 
                    ${bold ? 'font-bold' : ''}
                    ${italic ? 'italic' : ''}
                    ${underline ? 'underline' : ''}
                `}
                style={{
                    fontSize,
                    fontFamily,
                    color: textColor,
                    verticalAlign: subscript ? 'sub' : superscript ? 'super' : 'unset',
                }}
                placeholder="Add description (Optional)"
            ></textarea>
            <button className='mt-5 w-full rounded-full text-white font-bold py-4 bg-gradient-to-tr from-purple-400 to-purple-600'>Continue</button>
        </div>
    );
};

export default TextEditor;

