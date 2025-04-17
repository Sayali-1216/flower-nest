// import "./Style.css";
import "../component/style.css";
import BestSeller from "../component/BestSeller.jsx";
import WhyChoose from "../component/WhyChoose.jsx";
import CustomOrderBanner from "../component/CustomBanner.jsx";
import HeroSection from "../component/HeroSection.jsx";
import Newsletter from "../component/NewsLetter.jsx";
import Footer from "../component/Footer.jsx";
function Main() {

    return (
        <div className="container">
            <HeroSection/>
            <BestSeller />
            <WhyChoose/>
            <CustomOrderBanner/>
            <Newsletter/>
            <Footer/>
           
        </div>
    );
}

export default Main;