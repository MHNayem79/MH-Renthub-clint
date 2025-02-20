import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import RecentListing from "./RecentListing";
import SpecialOffer from "./SpecialOffer";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChooseUs></ChooseUs>
            <RecentListing></RecentListing>
            <Testimonials></Testimonials>
            <SpecialOffer></SpecialOffer>
        </div>

    );
};

export default Home;