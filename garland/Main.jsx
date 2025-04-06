import "./Style.css";
import CategorySection from "./categorySection.jsx";
import Subscription from "./Subcription.jsx";
import BestSeller from "./BestSeller.jsx";
import CustomOrder from "./CustomOrder.jsx";
import Slider from "react-slick";
import WhyChoose from "./WhyChoose.jsx";
import HeroSection from "./HeroSection.jsx";
import Newsletter from "./NewsLetter.jsx";
import Footer from "./Footer.jsx";
function Main() {

    return (
        <div className="container">
            <HeroSection/>
            <BestSeller />
            {/* <CategorySection /> */}
            <WhyChoose/>
            {/* <Subscription /> */}
            <CustomOrder />
            <Newsletter/>
            <Footer/>
           
        </div>
    );
}

export default Main;