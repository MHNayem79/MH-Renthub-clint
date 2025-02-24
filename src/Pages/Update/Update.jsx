import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../Context/AuthContext/AuthContext";


const Update = () => {
    const car = useLoaderData();
    const navigate=useNavigate();
    const { _id, model, price, available, registration_number, features, description, booking_count, image, location, datePosted } = car;
    const { user } = useContext(AuthContext)
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const model = form.model.value;
        const price = form.price.value;
        const available = form.availability.value;
        const registration_number = form.registrationNumber.value;
        const features = form.features.value;
        const description = form.description.value;
        const booking_count = form.bookingCount.value;
        const image = form.imageUrl.value;
        const location = form.location.value;
        const carAdder = user.email;
        const datePosted = form.datePosted.value;
        const updatedCar = { model, price, available, registration_number, features, description, booking_count, image, location, carAdder, datePosted };
        console.log(updatedCar)
        fetch(`http://localhost:5000/myCars/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Car Updated Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
                navigate('/myCars')
            })
    }
    return (
        <div className="py-16">
            <h2 className="text-5xl font-semibold text-center mb-6">Update Your Car Info</h2>
            <form onSubmit={handleUpdate} className="space-y-1">
                <div>
                    <label className="block text-white font-medium">Car Model</label>
                    <input
                        type="text" name="model"
                        defaultValue={model} placeholder="Enter car model" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Daily Rental Price ($)</label>
                    <input
                        type="text" name="price"
                        defaultValue={price} placeholder="Enter price per day" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Availability</label>
                    <select
                        name="availability" defaultValue={available} required className="w-full p-2 border rounded"
                    >
                        <option value="">Select Availability</option>
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                </div>

                <div>
                    <label className="block text-white font-medium">Vehicle Registration Number</label>
                    <input
                        type="text" name="registrationNumber"
                        defaultValue={registration_number} placeholder="Enter registration number" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Features</label>
                    <input
                        type="text" name="features"
                        defaultValue={features} placeholder="e.g., GPS, AC, Sunroof" className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Description</label>
                    <textarea
                        name="description"
                        defaultValue={description} placeholder="Enter car description" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Booking Count</label>
                    <input
                        type="number" name="bookingCount" defaultValue={booking_count}
                        placeholder="Default: 0" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Image URL</label>
                    <input
                        type="text" name="imageUrl"
                        defaultValue={image} placeholder="Paste image link here" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Location</label>
                    <input
                        type="text" name="location"
                        defaultValue={location} placeholder="City, Country" required className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-white font-medium">Date of Post</label>
                    <input
                        type="date" name="datePosted"
                        defaultValue={datePosted} placeholder="Date of Post" required className="w-full p-2 border rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full p-3 bg-amber-500 text-white font-bold rounded hover:bg-amber-600 transition"
                >
                    Update Car info
                </button>
            </form>

        </div>
    );
};

export default Update;