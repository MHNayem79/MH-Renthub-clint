import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTh, FaList } from "react-icons/fa";

const AvailableCars = () => {
    const [availableCars, setAvailableCars] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // Search state
    const [viewType, setViewType] = useState("grid"); // Grid/List view state
    const [sortType, setSortType] = useState(""); // Sort state

    // Fetch car data from the backend
    useEffect(() => {
        fetch('https://mh-renthub-server.vercel.app/allCars')
            .then((res) => res.json())
            .then((data) => {
                setAvailableCars(data);
            })
            .catch((err) => console.error("Error fetching cars:", err));
    }, []);

    // Filter cars based on the search query
    const filteredCars = availableCars.filter((car) =>
        (car.model?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
        (car.brand?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
        (car.location?.toLowerCase() || "").includes(searchQuery.toLowerCase())
    );

    const sortedCars = filteredCars.sort((a, b) => {
        const priceA = a.price ? parseFloat(String(a.price).replace(/[^\d.-]/g, '')) : 0;
        const priceB = b.price ? parseFloat(String(b.price).replace(/[^\d.-]/g, '')) : 0;

        if (sortType === "price-lowest") {
            return priceA - priceB;
        }
        if (sortType === "price-highest") {
            return priceB - priceA;
        }
        return 0;
    });

    return (
        <section className="py-16 text-black bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-semibold mb-6">Available Cars</h2>
                <p className="text-2xl text-gray-600 mb-12">Check out the latest cars added to our platform.</p>

                {/* Search Bar and Sort Dropdown */}
                <div className="flex justify-between mb-4">
                    {/* View Toggle Button */}
                    <button
                        onClick={() => setViewType(viewType === "grid" ? "list" : "grid")}
                        className="p-2 border rounded"
                    >
                        {viewType === "grid" ? <FaList size={20} /> : <FaTh size={20} />}
                    </button>
                    <input
                        type="text"
                        placeholder="Search by Model, Brand, or Location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border p-2 rounded w-2/4"
                    />

                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        value={sortType}
                        className="border p-2 rounded"
                    >
                        <option value="">Sort By</option>
                        <option value="price-lowest">Price (Lowest First)</option>
                        <option value="price-highest">Price (Highest First)</option>
                    </select>
                </div>

                {/* Display Cars */}
                <div
                    className={
                        viewType === "grid"
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
                            : "space-y-4 px-6"
                    }
                >
                    {sortedCars.length > 0 ? (
                        sortedCars.map((car, index) => {
                            const cardClass = viewType === "list" ? "flex items-center p-4 bg-white shadow-lg rounded-lg" : "bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl";
                            const imgClass = viewType === "list" ? "h-24 w-32 object-cover mr-4" : "w-full h-52 object-cover";

                            return (
                                <div key={index} className={cardClass}>
                                    {/* Car Image */}
                                    <img src={car.image} alt={car.model} className={imgClass} />

                                    {/* Car Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
                                        <p className="text-gray-700 text-lg font-medium">${car.price}</p>

                                        <div className="flex justify-between items-center mt-4">
                                            <span
                                                className={`px-3 py-1 text-sm font-semibold rounded-full ${car.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                                            >
                                                {car.available ? "Available" : "Unavailable"}
                                            </span>
                                            <span className="text-sm text-gray-500">Bookings: {car.booking_count}</span>
                                        </div>

                                        <p className="text-sm text-gray-500 mt-2">{car.datePosted}</p>
                                        <NavLink to={`/carDetails/${car._id}`} className="btn btn-primary mt-4">
                                            Book Now
                                        </NavLink>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center text-gray-500 text-xl">No cars found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AvailableCars;
