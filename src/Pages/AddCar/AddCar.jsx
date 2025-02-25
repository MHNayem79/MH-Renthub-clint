import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const AddCar = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
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
        const newCar = { model, price, available, registration_number, features, description, booking_count, image, location, carAdder, datePosted };
        // console.log(newCar)
        fetch('https://mh-renthub-server.vercel.app/allCars', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Car Added Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div className="py-16">
            <h2 className="text-5xl font-semibold text-center mb-6">Add a New Car</h2>
            <form onSubmit={handleSubmit} className="space-y-1">
                <div>
                    <label className="block text-white font-medium">Car Model</label>
                    <input
                        type="text" name="model"
                        placeholder="Enter car model" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Daily Rental Price ($)</label>
                    <input
                        type="text" name="price"
                        placeholder="Enter price per day" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Availability</label>
                    <select
                        name="availability" required className="w-full p-2 border rounded"
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
                        placeholder="Enter registration number" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Features</label>
                    <input
                        type="text" name="features"
                        placeholder="e.g., GPS, AC, Sunroof" className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter car description" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Booking Count</label>
                    <input
                        type="number" name="bookingCount" defaultValue="0"
                        placeholder="Default: 0" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Image URL</label>
                    <input
                        type="text" name="imageUrl"
                        placeholder="Paste image link here" required className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-white font-medium">Location</label>
                    <input
                        type="text" name="location"
                        placeholder="City, Country" required className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-white font-medium">Date of Post</label>
                    <input
                        type="date" name="datePosted" defaultValue={'Added'}
                        placeholder="Date of Post" required className="w-full p-2 border rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full p-3 bg-amber-500 text-white font-bold rounded hover:bg-amber-600 transition"
                >
                    Add Car
                </button>
            </form>

        </div>
    );
};

export default AddCar;




