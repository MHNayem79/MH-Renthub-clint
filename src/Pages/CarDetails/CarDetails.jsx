import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const CarDetails = () => {
    const { _id, model, price, available, features, image, description } = useLoaderData();
    const [bookingStatus, setBookingStatus] = useState("");

    const handleBookNow = async (e) => {
        e.preventDefault();
        const form = e.target;
        const bookingDate = form.bookingDate.value;

        // Booking data object
        const bookingData = {
            carId: _id, // Unique car ID
            carImage: image,
            carModel: model,
            bookingDate,
            price: price,
            status: "Pending", // Default status
        };
        console.log(bookingData)
        fetch('http://localhost:5000/myBookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Booking Successful!",
                        icon: "success",
                        draggable: true
                    });
                }
            })



    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="flex justify-around gap-20 items-center">
                <div>
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="Car" />
                    <div>
                        <h1 className="text-5xl font-bold">{model}</h1>
                        <p className="py-6">{description}</p>
                        <p>Price: ${price}</p>
                        <p>Available: {available ? "Yes" : "No"}</p>
                        <p>
                            {features.map((feature, index) => (
                                <button key={index} className="btn btn-sm mr-2 my-3">{feature}</button>
                            ))}
                        </p>
                        <form className="" onSubmit={handleBookNow}>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Booking Date</span></label>
                                <br />
                                <input type="datetime-local" name="bookingDate" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Book Now</button>
                            </div>
                        </form>
                        {bookingStatus && <p className="text-green-500">{bookingStatus}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;