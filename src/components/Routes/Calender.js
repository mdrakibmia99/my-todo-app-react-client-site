import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [selected, setSelected] = useState(new Date());

    let footer = <p className='text-indigo-600 font-bold text-2xl'>Please pick a day.</p>;
    if (selected) {
        footer = <p className='text-indigo-600 font-bold text-2xl'>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div className='flex justify-center align-center mt-52' style={{ height: "100vh" }}>

            <div >
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                />
            </div>
        </div>
    );
};

export default Calender;