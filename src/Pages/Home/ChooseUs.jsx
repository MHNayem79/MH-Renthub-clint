import { FaCarSide } from "react-icons/fa6";
import { IoPricetagSharp } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";
import { TbBrandBooking } from "react-icons/tb";


const ChooseUs = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center px-5">
                <h2 className="text-5xl font-semibold text-black mb-6">Why Choose Us?</h2>
                <p className="text-2xl text-gray-600 mb-12">Discover the unique benefits of our car rental service</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* <!-- Wide Variety of Cars --> */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <FaCarSide className="w-16 h-16 mb-4"></FaCarSide>
                        <h3 className="text-xl font-medium text-gray-800 mb-2">Wide Variety of Cars</h3>
                        <p className="text-gray-600 text-center">From budget-friendly options to luxury vehicles.</p>
                    </div>
                    {/* <!-- Affordable Prices --> */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <IoPricetagSharp className="w-16 h-16 mb-4"></IoPricetagSharp>
                        <h3 className="text-xl font-medium text-gray-800 mb-2">Affordable Prices</h3>
                        <p className="text-gray-600 text-center">Competitive daily rates you can count on.</p>
                    </div>
                    {/* <!-- Easy Booking Process --> */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <TbBrandBooking className="w-16 h-16 mb-4"></TbBrandBooking>
                        <h3 className="text-xl font-medium text-gray-800 mb-2">Easy Booking Process</h3>
                        <p className="text-gray-600 text-center">Seamlessly book your ride in just a few clicks.</p>
                    </div>
                    {/* <!-- Customer Support --> */}
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <SlSupport className="w-16 h-16 mb-4"></SlSupport>
                        <h3 className="text-xl font-medium text-gray-800 mb-2">Customer Support</h3>
                        <p className="text-gray-600 text-center">24/7 assistance for all your queries.</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ChooseUs;