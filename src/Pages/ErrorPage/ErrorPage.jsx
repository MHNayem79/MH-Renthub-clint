import { NavLink } from 'react-router-dom';
import gif from '../../assets/error gif/error shok.gif'

const ErrorPage = () => {
    return (
        <div className='relative'>
            <img className='w-full h-[800px]' src={gif} alt="" />
            <NavLink to='/' className='btn absolute top-3/4 left-[700px] '>Go Back</NavLink>
        </div>
    );
};

export default ErrorPage;