import Footer from '@/Components/Shared/Footer';
import RegisterForm from '../Components/RegisterForm';

const RegisterPage = () => {
    return (
        <div>
            <div className='mt-16 min-h-screen'>
                <RegisterForm />
            </div>
            <Footer />
        </div>
    );
};

export default RegisterPage;