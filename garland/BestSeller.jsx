import "./Style.css";
// import { ecomContext } from "./Home.jsx";



function BestSeller() {

    //   const { products, handleAddToCart } = useContext(ecomContext);
    
    return (
        <div className="bestProductContainer">
            <h1>B E S T S E L L E R </h1>
            <div className="product-container" >
                <div className="bestProduct">
                    <div className="image-container">
                        <img src="https://www.24hourscakedelivery.com/wp-content/uploads/2024/11/Rose-Petals-Varmala-or-Jaimala-with-Green-leaf.jpg" alt="Red Flower Garland" />
                    </div>
                    <div className="image-content">
                        <h3>Red Flower Garland</h3>
                        <p><span>&#8377;</span>700</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                <div className="bestProduct">
                    <div className="image-container">
                        <img src="https://floriwish.in/wp-content/uploads/2024/05/floriwish.webp" alt="Red Flower Garland" />
                    </div>
                    <div className="image-content">
                        <h3>Pink rose Jewellary</h3>
                        <p><span>&#8377;</span>500</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                <div className="bestProduct">
                    <div className="image-container">

                        <img src="https://img.freepik.com/premium-photo/marigold-flower-garland-decoration-festive-celebration_935722-5122.jpg" alt="Red Flower Garland" />
                    </div>
                    <div className="image-content">
                        <h3>Marigold Door Toran</h3>
                        <p><span>&#8377;</span>150</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                <div className="bestProduct">
                    <div className="image-container">
                        <img src="https://d1x5473tif8knj.cloudfront.net/media/events/1935/conversions/FD9012-watermark.jpg" alt="Red Flower Garland" />
                    </div>
                    <div className="image-content">
                        <h3>Marigold Event Decoration </h3>
                        <p><span>&#8377;</span>1000</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>

            </div>


            <br></br>
            <hr/>

        </div>
    );
}

export default BestSeller