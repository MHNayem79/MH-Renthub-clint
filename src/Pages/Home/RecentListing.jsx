
import { NavLink } from "react-router-dom";
const recentCars = [
    {
        id: 1,
        image: "https://i.ibb.co.com/QvxNCbHR/mlp-img-perf.webp",
        model: "Toyota Camry 2023",
        price: "$45/day",
        available: true,
        booking_count: 12,
        datePosted: "Added 2 days ago",
    },
    {
        id: 2,
        image: "https://i.ibb.co.com/SwN3w4pZ/trim-Touring.jpg",
        model: "Honda Civic 2022",
        price: "$40/day",
        available: false,
        booking_count: 8,
        datePosted: "Added 5 days ago",
    },
    {
        id: 3,
        image: "https://i.ibb.co.com/PGhjYZ0P/images.jpg",
        model: "Ford Mustang 2023",
        price: "$70/day",
        available: true,
        booking_count: 5,
        datePosted: "Added 1 day ago",
    },
    {
        id: 4,
        image: "https://i.ibb.co.com/3976nWzj/2022-tesla-model-3-sedan-performance-fq-oem-1-1600.jpg",
        model: "Tesla Model 3 2023",
        price: "$90/day",
        available: true,
        booking_count: 20,
        datePosted: "Added 3 days ago",
    },
    {
        id: 5,
        image: "https://i.ibb.co.com/fzhXV5rt/images-1.jpg",
        model: "BMW X5 2022",
        price: "$85/day",
        available: false,
        booking_count: 10,
        datePosted: "Added 4 days ago",
    },
    {
        id: 6,
        image: "https://i.ibb.co.com/gHSwp50/images-2.jpg",
        model: "Mercedes-Benz C-Class 2023",
        price: "$100/day",
        available: true,
        booking_count: 15,
        datePosted: "Added 6 days ago",
    },
];
const RecentListing = () => {
    return (
        <section className="py-16 text-black bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-semibold mb-6">Recent Listings</h2>
                <p className="text-2xl text-gray-600 mb-12">Check out the latest cars added to our platform.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    {recentCars.map((car) => (
                        <div key={car.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                            <img src={car.image} alt={car.model} className="w-full h-52 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
                                <p className="text-gray-700 text-lg font-medium">{car.price}</p>

                                <div className="flex justify-between items-center mt-4">
                                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${car.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {car.available ? "Available" : "Unavailable"}
                                    </span>
                                    <span className="text-sm text-gray-500">Bookings: {car.booking_count}</span>
                                </div>

                                <p className="text-sm text-gray-500 mt-2">{car.datePosted}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecentListing;