// import "./Style.css";



// function BestSeller() {

    
//     return (
//         <div className="bestProductContainer">
//             <h1>B E S T S E L L E R </h1>
//             <div className="product-container" >
//                 <div className="bestProduct">
//                     <div className="image-container">
//                         <img src="https://www.24hourscakedelivery.com/wp-content/uploads/2024/11/Rose-Petals-Varmala-or-Jaimala-with-Green-leaf.jpg" alt="Red Flower Garland" />
//                     </div>
//                     <div className="image-content">
//                         <h3>Red Flower Garland</h3>
//                         <p><span>&#8377;</span>700</p>
//                         <button class="add-to-cart">Add to Cart</button>
//                     </div>
//                 </div>
//                 <div className="bestProduct">
//                     <div className="image-container">
//                         <img src="https://floriwish.in/wp-content/uploads/2024/05/floriwish.webp" alt="Red Flower Garland" />
//                     </div>
//                     <div className="image-content">
//                         <h3>Pink rose Jewellary</h3>
//                         <p><span>&#8377;</span>500</p>
//                         <button class="add-to-cart">Add to Cart</button>
//                     </div>
//                 </div>
//                 <div className="bestProduct">
//                     <div className="image-container">

//                         <img src="https://img.freepik.com/premium-photo/marigold-flower-garland-decoration-festive-celebration_935722-5122.jpg" alt="Red Flower Garland" />
//                     </div>
//                     <div className="image-content">
//                         <h3>Marigold Door Toran</h3>
//                         <p><span>&#8377;</span>150</p>
//                         <button class="add-to-cart">Add to Cart</button>
//                     </div>
//                 </div>
//                 <div className="bestProduct">
//                     <div className="image-container">
//                         <img src="https://d1x5473tif8knj.cloudfront.net/media/events/1935/conversions/FD9012-watermark.jpg" alt="Red Flower Garland" />
//                     </div>
//                     <div className="image-content">
//                         <h3>Marigold Event Decoration </h3>
//                         <p><span>&#8377;</span>1000</p>
//                         <button class="add-to-cart">Add to Cart</button>
//                     </div>
//                 </div>

//             </div>


//             <br></br>
//             <hr/>

//         </div>
//     );
// }

// export default BestSeller





















import "./Style.css";

function BestSeller() {
  const bestSellers = [
    {
      img: "https://www.24hourscakedelivery.com/wp-content/uploads/2024/11/Rose-Petals-Varmala-or-Jaimala-with-Green-leaf.jpg",
      name: "Red Flower Garland",
      price: 700,
    },
    {
      img: "https://floriwish.in/wp-content/uploads/2024/05/floriwish.webp",
      name: "Pink Rose Jewellery",
      price: 500,
    },
    {
      img: "https://img.freepik.com/premium-photo/marigold-flower-garland-decoration-festive-celebration_935722-5122.jpg",
      name: "Marigold Door Toran",
      price: 150,
    },
    {
      img: "https://d1x5473tif8knj.cloudfront.net/media/events/1935/conversions/FD9012-watermark.jpg",
      name: "Marigold Event Decoration",
      price: 1000,
    },
  ];

  return (
    <div className="best-seller-section">
      <h2 className="section-title"> Our Best Sellers </h2>
      <div className="best-seller-grid">
        {bestSellers.map((item, index) => (
          <div className="seller-card" key={index}>
            <img src={item.img} alt={item.name} className="card-img" />
            <div className="card-info">
              <h3>{item.name}</h3>
              <p className="price">&#8377; {item.price}</p>
              <button className="card-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
