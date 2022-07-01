import React from 'react';

const Footer = () => {
   
     const year = new Date().getFullYear();
    return (
        <div className='shadow-md w-full fixed bottom-0 '>
            <div className='text-center bg-indigo-600 text-white py-5 text-lg mt-5 ' >
            All right reserved, Copyright &copy; {year}
        </div>
        </div>
    );

  
};

export default Footer;