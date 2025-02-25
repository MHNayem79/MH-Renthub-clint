import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const BookingUpdate = () => {
    const updatedData = useLoaderData();
    const navigate = useNavigate();
    const { _id, bookingDate } = updatedData;
    const handleBookNow = (e) => {
        e.preventDefault();
        const form = e.target;
        const bookingDate = form.bookingDate.value;
        const bookingUpdate = { bookingDate };
        console.log(bookingUpdate)
        fetch(`https://mh-renthub-server.vercel.app/myBookings/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Booking Successful!",
                        icon: "success",
                        draggable: true
                    });
                    navigate('/myBookings')
                }
            })



    };
    return (

        <form className="" onSubmit={handleBookNow}>
            <div className="form-control">
                <label className="label"><span className="label-text">Booking Date</span></label>
                <br />
                <input type="datetime-local" defaultValue={bookingDate} name="bookingDate" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Update Booking</button>
            </div>
        </form>
    );
};

export default BookingUpdate;