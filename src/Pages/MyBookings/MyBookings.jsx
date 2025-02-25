import { useContext, useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Import Chart.js and react-chartjs-2
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import AuthContext from "../../Context/AuthContext/AuthContext";

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/myBookings?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setBookings(data);
            });
    }, [user.email]);

    // ✅ Cancel Booking Logic
    const handleCancel = (bookingId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel the reservation!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setBookings((prevBookings) =>
                    prevBookings.map((booking) =>
                        booking._id === bookingId ? { ...booking, status: "Canceled" } : booking
                    )
                );
                Swal.fire("Canceled!", "Your booking has been canceled.", "success");
            }
        });
    };

    // ✅ Open Modify Date Modal
    const handleModifyDate = (booking) => {
        setSelectedBooking(booking);
        setStartDate(new Date(booking.bookingDate)); // Set default start date
    };

    // ✅ Confirm Date Change
    const confirmDateChange = () => {
        if (selectedBooking) {
            setBookings((prevBookings) =>
                prevBookings.map((booking) =>
                    booking._id === selectedBooking._id
                        ? { ...booking, bookingDate: startDate.toISOString() }
                        : booking
                )
            );
            setSelectedBooking(null);
            Swal.fire("Updated!", "Booking date has been modified.", "success");
        }
    };

    // Prepare data for the chart
    const chartData = {
        labels: bookings.map((booking) => booking.carModel),
        datasets: [
            {
                label: "Daily Rental Price",
                data: bookings.map((booking) => parseFloat(booking.price.replace('$', '').replace('/day', ''))),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Car Daily Rental Price",
            },
            legend: {
                position: "top",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-4">My Bookings</h2>


            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 shadow-lg">
                    <thead>
                        <tr className="bg-amber-500">
                            <th className="px-4 py-2">Car Image</th>
                            <th className="px-4 py-2">Car Model</th>
                            <th className="px-4 py-2">Booking Date</th>
                            <th className="px-4 py-2">Total Price</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr
                                key={booking._id}
                                className="border-b hover:bg-amber-300 transition duration-200"
                            >
                                <td className="px-4 py-2">
                                    <img
                                        src={booking.carImage}
                                        alt="Car"
                                        className="w-16 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2">{booking.carModel}</td>
                                <td className="px-4 py-2">
                                    {new Date(booking.bookingDate).toLocaleString()}
                                </td>
                                <td className="px-4 py-2 font-semibold">{booking.price}</td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-3 py-1 rounded text-white 
                                        ${booking.status === "Pending" ? "bg-yellow-500"
                                                : booking.status === "Canceled" ? "bg-gray-500"
                                                    : "bg-green-500"}`}
                                    >
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="">
                                    <div className="join join-vertical">
                                        <button
                                            onClick={() => handleModifyDate(booking)}
                                            className="btn join-item bg-blue-600"
                                        >
                                            <SlCalender /> Modify Date
                                        </button>

                                        <button
                                            onClick={() => handleCancel(booking._id)}
                                            className={`btn join-item ${booking.status === "Canceled" ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"}`}
                                            disabled={booking.status === "Canceled"}
                                        >
                                            <ImCancelCircle />
                                            {booking.status === "Canceled" ? "Canceled" : "Cancel"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* ✅ Car Rental Price Chart */}
            <div className="mb-6">
                <Bar data={chartData} options={chartOptions} />
            </div>

            {/* Modify Date Modal */}
            {selectedBooking && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Modify Booking Date</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700">Choose Date:</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="border p-2 w-full"
                                dateFormat="dd-MM-yyyy"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setSelectedBooking(null)}
                                className="px-4 py-2 bg-gray-400 text-white rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDateChange}
                                className="px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookings;