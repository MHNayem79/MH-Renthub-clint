import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const MyCars = () => {
    const { user } = useContext(AuthContext)
    const [myCars, setMyCars] = useState([]);
    const [sortType, setSortType] = useState("");
    useEffect(() => {
        fetch(`https://mh-renthub-server.vercel.app/myCars?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyCars(data)
            })
    }, [user.email])

    const handleSort = (type) => {
        setSortType(type);
        let sortedCars = [...myCars];

        if (type === "date-newest") {
            sortedCars.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
        } else if (type === "date-oldest") {
            sortedCars.sort((a, b) => new Date(a.datePosted) - new Date(b.datePosted));
        } else if (type === "price-lowest") {
            sortedCars.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
        } else if (type === "price-highest") {
            sortedCars.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")));
        }

        setMyCars(sortedCars);
    };

    const handleDeleteCar = _id => {
        // console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://mh-renthub-server.vercel.app/myCars/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Car has been deleted.",
                                icon: "success"
                            });
                            const remaining = myCars.filter(car => car._id !== _id)
                            setMyCars(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="overflow-x-auto p-4">
            {
                myCars.length === 0 ? <>
                    <div className="text-center p-4">
                        <p className="text-gray-600 text-5xl font-bold mb-5">No cars added yet.</p>
                        <Link to="/addCar" className="text-blue-500 font-bold text-2xl underline">Add a Car</Link>
                    </div>
                </>
                    : <>
                        <div className="flex justify-end mb-4">
                            <select
                                onChange={(e) => handleSort(e.target.value)}
                                value={sortType}
                                className="border p-2 rounded"
                            >
                                <option value="">Sort By</option>
                                <option value="date-newest">Date Added (Newest First)</option>
                                <option value="date-oldest">Date Added (Oldest First)</option>
                                <option value="price-lowest">Price (Lowest First)</option>
                                <option value="price-highest">Price (Highest First)</option>
                            </select>
                        </div>
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="border p-2">Car Image</th>
                                    <th className="border p-2">Car Model</th>
                                    <th className="border p-2">Daily Rental Price</th>
                                    <th className="border p-2">Booking Count</th>
                                    <th className="border p-2">Availability</th>
                                    <th className="border p-2">Date Added</th>
                                    <th className="border p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myCars.map((car, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="border p-2">
                                            <img src={car.image} alt={car.model} className="h-16 mx-auto" />
                                        </td>
                                        <td className="border p-2">{car.model}</td>
                                        <td className="border p-2">{car.price}</td>
                                        <td className="border p-2">{car.booking_count}</td>
                                        <td
                                            className={`border p-2 font-bold ${car.available ? "text-green-600" : "text-red-600"
                                                }`}
                                        >
                                            {car.available ? "Available" : "Unavailable"}
                                        </td>
                                        <td className="border p-2">{car.datePosted}</td>
                                        <td className="border p-2 flex flex-col gap-3">
                                            <NavLink to={`/update/${car._id}`}
                                                className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                                            >
                                                Update
                                            </NavLink>
                                            <button
                                                onClick={() => handleDeleteCar(car._id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>

            }

        </div >
    )
};

export default MyCars;