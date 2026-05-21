import React from 'react';
import LoginFrom from '../Components/LoginFrom';
import Footer from '@/Components/Shared/Footer';

const LoginPage = () => {
    

    return (
        <div>
            <div className='mt-16 min-h-screen'>
                <LoginFrom />
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;