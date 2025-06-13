// export const products = [
//   { id: 1, name: "Pink Rose Wedding Garland", price: "₹2,490", image: "https://5.imimg.com/data5/GJ/DH/WH/SELLER-32786584/weddingmarriage-garland-3-.jpg", category: "Wedding Garlands", description: "Elegant pink rose garland, perfect for traditional wedding ceremonies." },
//   { id: 2, name: "Golden Marigold Garland", price: "₹2,905", image: "https://c3t6b9h6.delivery.rocketcdn.me/wp-content/uploads/2021/10/Chendupoo-Needle-Garland-1.png", category: "Wedding Garlands", description: "Bright and festive marigold garland for joyful wedding decor." },
//   { id: 3, name: "Jasmine Gajara", price: "₹3,320", image: "https://www.shutterstock.com/image-photo/gajra-made-beautiful-smelling-jasmine-260nw-2506203405.jpg", category: "Wedding Garlands", description: "Fragrant jasmine gajara, ideal for bridal hairstyles and rituals." },
//   { id: 4, name: "Orchid Flower Gajra", price: "₹3,735", image: "https://m.media-amazon.com/images/I/81IqjhX6VSL._AC_UF350,350_QL80_.jpg", category: "Wedding Garlands", description: "Graceful orchid garland to enhance bridal elegance." },
//   { id: 5, name: "Diwali Marigold Garland", price: "₹2,075", image: "https://i.ebayimg.com/images/g/ErkAAOSwbwli978B/s-l400.jpg", category: "Festival Garlands", description: "Traditional marigold garland for brightening Diwali celebrations." },
//   { id: 6, name: "Marigold Flower Rangoli ", price: "₹2,325", image: "https://previews.123rf.com/images/adsniks/adsniks1810/adsniks181000166/109426843-marigold-flower-rangoli-design-for-diwali-festival-indian-festival-flower-decoration.jpg", category: "Festival Garlands", description: "Vibrant garland designed to complement the colors of Holi." },
//   { id: 7, name: "Christmas Pinecone Garland", price: "₹2,655", image: "https://ifyousayido.com/cdn/shop/products/Christmas_Front_Door_Hanging_Artificial_Wreath_Garland_9.jpg?v=1645931619", category: "Festival Garlands", description: "Festive pinecone and greenery garland for Christmas décor." },
//   { id: 8, name: "Marigold Flower Toran", price: "₹2,490", image: "https://i.ytimg.com/vi/kaQvZk0ZPRE/sddefault.jpg", category: "Festival Garlands", description: "Stylish golden garland to welcome the new year in style." },
//   { id: 9, name: "Temple Mango Leaf Garland", price: "₹2,905", image: "https://i.pinimg.com/564x/7f/75/73/7f75736989db50e760674aa6932c94ba.jpg", category: "Temple Garlands", description: "Sacred mango leaf garland for temple and puja use." },
//   { id: 10, name: "Sacred Lotus Garland", price: "₹3,155", image: "https://sagarflorist.com/wp-content/uploads/2025/03/img_8273.jpeg", category: "Temple Garlands", description: "Beautiful lotus garland symbolizing purity for religious rituals." },
//   { id: 11, name: "Sandalwood Temple Garland", price: "₹2,407", image: "https://m.media-amazon.com/images/I/618XscG+k1L._AC_UF894,1000_QL80_.jpg", category: "Temple Garlands", description: "Fragrant sandalwood garland often used in temple ceremonies." },
//   { id: 12, name: "Tulsi Garland", price: "₹3,735", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/354695851/JN/AZ/KK/193586530/tulsi-temple-garland.jpg", category: "Temple Garlands", description: "Holy tulsi garland known for its spiritual and healing properties." },
//   { id: 13, name: "White Rose Home Decor", price: "₹2,241", image: "https://www.flovery.com/cdn/shop/products/image_37b07dde-9e81-4261-854d-1be1aaa86dee.jpg?v=1663439924", category: "Home Decor Garlands", description: "Delicate white rose garland for serene home decor." },
//   { id: 14, name: "Red Roses ", price: "₹1,826", image: "https://d1ixo36kppfedg.cloudfront.net/faceview/db/ge/d7i/d1c/imgs/46ba3ef0-435e-4a05-b188-2396b379e317_32386431-xlgnm400x400.jpg?productId=P-22420238", category: "Home Decor Garlands", description: "Minimalist green leaf garland for natural wall accents." },
//   { id: 15, name: "Door Decoration", price: "₹1,660", image: "https://assets-news.housing.com/news/wp-content/uploads/2022/11/25112142/image6-63.png", category: "Home Decor Garlands", description: "Simple yet stylish garland perfect for everyday decoration." },
//   { id: 16, name: "Luxury Floral Garland", price: "₹2,490", image: "https://i0.wp.com/petalsedge.com/wp-content/uploads/2020/11/PEWashInn-55-scaled-e1680893335671.jpg?ssl=1", category: "Home Decor Garlands", description: "Luxurious floral arrangement for elegant interior styling." },
//   { id: 17, name: "Wedding Flower Hair Garland ", price: "₹4,150", image: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/656/849/new_large/1000061131.jpg", category: "Custom Garlands", description: "Customized bridal hair garland for traditional ceremonies." },
//   { id: 18, name: "Real Floral Jewellery for Hand", price: "₹4,565", image: "https://i.pinimg.com/736x/80/a0/90/80a090abde62d5ab74d585dd75122e57.jpg", category: "Custom Garlands", description: "Delicate floral bracelet ideal for bridal and festive wear." },
//   { id: 19, name: "Floral Jewellary", price: "₹3,735", image: "https://www.floristchain.com/wp-content/uploads/2024/11/2-4.png", category: "Custom Garlands", description: "Handmade garland designed for birthdays and special events." },
//   { id: 20, name: "Flower Dupatta", price: "₹4,980", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBs7XTV_DRxBQuvyrPIXDXSe7yhxkbtYooDU2s7Z5680_oGcC6Ctuib2G7EKmr2tZAHU&usqp=CAU", category: "Custom Garlands", description: "Personalized garland with initials, perfect for weddings." },
//   { id: 21, name: "Bridal Hair Accessory", price: "₹1,494", image: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/04/Floral-Tiaras-acccessories.jpg", category: "Floral Accessories", description: "Floral tiara accessory for bridal hair styling." },
//   { id: 22, name: "Rose Boutonniere", price: "₹1,245", image: "https://cdn.atwilltech.com/flowerdatabase/c/corsage-boutonniere-set-6440703f03b764.10863937.211.jpeg", category: "Floral Accessories", description: "Elegant rose boutonniere for grooms or formal events." },
//   { id: 23, name: "Wedding Chair Garland", price: "₹2,075", image: "https://www.brides.com/thmb/34YMnuvm1K5HCPb3HzgX_WXF2fg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2018__07__30__5b5f419913b1127f1175da82_larry-nance-jr-wedding22-28572f8836224774a9bdad4962aabf37.jpg", category: "Floral Accessories", description: "Charming chair garland for weddings and receptions." },
//   { id: 24, name: "Floral Wrist Corsage", price: "₹996", image: "https://i0.wp.com/bridalmusings.com/wp-content/uploads/2012/10/Bridal-Musings-200.jpg?resize=1140%2C1000&quality=89", category: "Floral Accessories", description: "Wrist corsage for bridesmaids or prom nights." },
//   { id: 25, name: "Decorative Garden Garland", price: "₹2,905", image: "https://www.fnp.com/images/pr/l/v20170818124731/yellow-n-orange-marigold-decoration_1.jpg", category: "Home Decor Garlands", description: "Decorative garland for garden parties and home entrances." },
//   { id: 26, name: "Wedding Entry Garland", price: "₹3,320", image: "https://i.pinimg.com/736x/0c/7a/ec/0c7aec2887a90d6128776245ef9f8bfd.jpg", category: "Wedding Garlands", description: "Grand floral garland for wedding stage and entryway." },
//   { id: 27, name: "Ganesh Puja Garland", price: "₹2,655", image: "https://i.pinimg.com/564x/4c/26/4c/4c264cb27d1451234e4444ff0079d9ab.jpg", category: "Temple Garlands", description: "Traditional garland for Ganesh puja and temple rituals." },
//   { id: 28, name: "Custom Party Garland", price: "₹2,325", image: "https://artstreet.in/cdn/shop/products/91P6QxBOKkL_e916294a-b912-4444-b2a2-7badbb43de2a_700x700.jpg?v=1683544297", category: "Custom Garlands", description: "Versatile party garland customized for any occasion." },
//   { id: 29, name: "Floral Dupatta Garland", price: "₹4,150", image: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/008/681/673/new_medium/ClipDown.App_452873835_514552357907981_4784781221804222391_n_%281%29.jpg?1725301774", category: "Floral Accessories", description: "Stunning dupatta-style garland for mehndi or haldi functions." },
//   { id: 30, name: "Ethnic Wedding Garland", price: "₹4,565", image: "https://images.squarespace-cdn.com/content/v1/5e6a1b18fd3b1d0590c83749/1630922527047-1REKOGDCUZ8POLF7ODCG/Capture.JPG", category: "Wedding Garlands", description: "Richly designed ethnic garland perfect for traditional weddings." }
// ];


export const category_options=[
    {
    label:'wedding garlands',
    value:'1'
    },
    {
    label:'festival garlands',
    value:'2'
    },
    {
    label:'Temple Rituals',
    value:'3'
    },
    {
    label:'Home Decor',
    value:'4'
    },
    {
    label:'Bouquets',
    value:'5'
    },
    {
    label:'Floral Accessories',
    value:'2'
    }
]
