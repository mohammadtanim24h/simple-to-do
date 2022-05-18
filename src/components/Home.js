import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className='display-6 fw-normal text-center mt-3 text-success'>Welcome to my simple TO-DO app </h2>
            <h5 className='text-center'>In this app, you can add your to-dos and keep track of them.</h5>
            <div className='text-center mt-3'>
                <button onClick={() => navigate('/todo')} className='btn btn-success px-4 py-2'>Go to TO-DO</button>
            </div>
        </div>
    );
};

export default Home;