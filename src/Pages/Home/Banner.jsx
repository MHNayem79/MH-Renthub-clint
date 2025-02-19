import { NavLink } from "react-router-dom";
import banner from '../../assets/banner/banner.jpg'


const Banner = () => {
    return (
        <div className='relative'>
            <img className='w-full md:h-[700px] md:object-cover my-4' src={banner} alt="Banner img" />
            <div className='absolute inset-0 bg-black opacity-40 flex items-center justify-center'>
                <div className=' text-center text-white px-10 py-10 '>
                    <h2 className='text-5xl font-bold shadow-2xl mb-4'>Drive Your Dreams Today!</h2>
                    <NavLink to='/availableCars' className='btn bg-white text-black px-6 py-2 rounded-lg shadow-lg hover:bg-amber-500'>Available Cars</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Banner;