import React from "react";
// import "./Style.css";
// import "./cate"

const categories = [
    { id: 1, name: "Wedding Garlands", image: "https://t3.ftcdn.net/jpg/12/74/96/44/360_F_1274964458_Hqp75qCp0EQDvQk5DCXuXV6FvyWzuXN5.jpg" },
    { id: 2, name: "Festival Garlands", image: "https://img.freepik.com/premium-photo/orange-marigold-flower-garland-decoration_935722-5077.jpg" },
    { id: 3, name: "Temple Garlands", image: "https://t3.ftcdn.net/jpg/00/95/35/66/360_F_95356603_CTTbKTzCL7Aavkk1BixR0dhKw7UP1Fi4.jpg" },
    { id: 4, name: "Home Decor Garlands", image: "https://media.istockphoto.com/id/1200452667/photo/colorful-flower-garlands-are-sold-near-the-temple-for-traditional-ceremonies.jpg?s=612x612&w=is&k=20&c=Fqt2lLK1JCXG6uBRbCVPZ0CJSi21j8j3FUatmjNut9Q=" },
    { id: 5, name: "Custom Garlands", image: "https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg" },
    { id: 6, name: "Floral Accessories", image: "https://images.prismic.io/framemakerindia/39548dde-f3cf-4145-9b63-91ed950ecf92_12.+floral+dupatta.jpg?auto=compress,format&rect=0,0,1080,1350&w=740&h=925" }
];

const ModernCategory = () => {
    return (
        <section className="modern-category-section">
            <h1 className="modern-category-heading">🌸 Discover Our Unique Garlands 🌸</h1>
            <div className="modern-category-grid">
                {categories.map((category) => (
                    <div key={category.id} className="modern-category-card">
                        <img src={category.image} alt={category.name} />
                        <div className="modern-category-overlay">
                            <h2>{category.name}</h2>
                            <p>Explore now →</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ModernCategory;
