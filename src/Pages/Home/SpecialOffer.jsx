
import { motion } from "framer-motion";


const SpecialOffer = () => {
    const offers = [


        {
            id: 1,
            title: "Get 15% off for weekend rentals!",
            description: "Book your weekend ride now and enjoy exclusive savings!",
            bgImage: "https://i.ibb.co.com/93fJGV8K/DALL-E-2025-02-20-03-00-44-A-promotional-banner-advertising-Get-15-off-for-weekend-rentals-with-a-lu.webp"
        },
        {
            id: 2,
            title: "Luxury cars at $99/day this holiday season!",
            description: "Drive in style with our special holiday discounts.",
            bgImage: "https://i.ibb.co.com/xKVSz2GW/DALL-E-2025-02-20-03-01-20-A-promotional-banner-advertising-Luxury-cars-at-99-day-this-holiday-seaso.webp",
        },
    ];
    return (
        <section className="py-16 bg-gray-100 text-black">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-semibold mb-6">Special Offers</h2>
                <p className="text-2xl text-gray-600 mb-12">Check out our latest discounts and deals.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                    {offers.map((offer, index) => (
                        <motion.div
                            key={offer.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                            className="relative bg-cover bg-center bg-no-repeat rounded-lg h-96 w-full"
                            style={{ backgroundImage: `url(${offer.bgImage})` }}
                        >
                            <div>


                                <div className="absolute inset-0 bg-black opacity-70 flex flex-col justify-center items-center p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                                    <p className="text-lg mb-4">{offer.description}</p>
                                    <button
                                        className="bg-white text-black px-6 py-2 rounded-lg shadow-lg hover:bg-amber-500 transition duration-300"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;