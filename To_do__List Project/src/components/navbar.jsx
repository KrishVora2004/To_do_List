import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex  bg-blue-800 text-white py-2'>
            <div className='font-bold text-xl mx-8'>itask</div>
            <ul className='flex gap-8 mx-8'>
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>Tasks</li>
            </ul>
        </nav>
    );
};

export default Navbar;