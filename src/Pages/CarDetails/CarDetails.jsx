import { useLoaderData } from "react-router-dom";


const CarDetails = () => {
    const { model, price, available, features, image, description } = useLoaderData();
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{model}</h1>
                    <p className="py-6">
                        {description}
                    </p>
                    <p>{price}</p>
                    <p>{available}</p>
                    <p className="">{
                        features.map((feature, index) => <button key={index} className="btn btn-sm mr-2 my-3">{feature}</button>)
                    }</p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;