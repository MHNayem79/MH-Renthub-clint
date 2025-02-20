import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            review: "Excellent service! The car was in perfect condition, and the process was smooth and hassle-free.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            review: "Great customer support and affordable pricing. Highly recommended!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 3,
            name: "Michael Smith",
            review: "Very satisfied with my rental. The pickup and drop-off process was seamless.",
            rating: 4,
            image: "https://randomuser.me/api/portraits/men/55.jpg",
        },
    ];
    return (
        <div className="bg-gray-100 text-black py-16">
            <div className="text-center mx-auto">
                <h2 className="font-bold text-5xl py-5">What Our Customers Say</h2>
                <p className="text-2xl font-bold mb-12">Real experiences from our happy customers.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    {/* <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center"
                        > */}
                    {
                        testimonials.map(testimonial => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-lg shadow-2xl p-6 text-center flex flex-col items-center"
                            >
                                <img className="w-16 h-16 rounded-full mb-4" src={testimonial.image} alt={testimonial.name} />
                                <h3 className="font-bold text-xl">{testimonial.name}</h3>
                                <div className="flex justify-center my-2">
                                    {
                                        [...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-amber-500 text-lg"></FaStar>
                                        ))
                                    }
                                </div>
                                <p className="text-gray-600 mb-10">{testimonial.review}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default Testimonials;