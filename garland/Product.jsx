const products = [
    // Wedding Garlands
    { id: 1, name: "Royal Red Rose Garland", category: "Wedding Garlands", price: 25.99, image: "https://example.com/wedding1.jpg", description: "Elegant red rose garland for weddings." },
    { id: 2, name: "Classic White Jasmine Garland", category: "Wedding Garlands", price: 22.99, image: "https://example.com/wedding2.jpg", description: "Traditional jasmine garland for ceremonies." },
    { id: 3, name: "Luxury Floral Mix Garland", category: "Wedding Garlands", price: 29.99, image: "https://example.com/wedding3.jpg", description: "Premium floral mix for special occasions." },
    { id: 4, name: "Golden Thread Wedding Garland", category: "Wedding Garlands", price: 30.99, image: "https://example.com/wedding4.jpg", description: "Handmade with gold thread detailing." },
    { id: 5, name: "Pearl White Rose Garland", category: "Wedding Garlands", price: 27.99, image: "https://example.com/wedding5.jpg", description: "White rose garland with pearl accents." },
    { id: 6, name: "Pink & Red Dual-Tone Garland", category: "Wedding Garlands", price: 24.99, image: "https://example.com/wedding6.jpg", description: "A stunning dual-tone garland for brides & grooms." },
    { id: 7, name: "Lavender & Orchid Garland", category: "Wedding Garlands", price: 32.99, image: "https://example.com/wedding7.jpg", description: "Luxury wedding garland with lavender & orchids." },

    // Festival Garlands
    { id: 8, name: "Bright Yellow Marigold Garland", category: "Festival Garlands", price: 19.99, image: "https://example.com/festival1.jpg", description: "Traditional marigold garland for festivals." },
    { id: 9, name: "Orange & Yellow Floral Garland", category: "Festival Garlands", price: 20.99, image: "https://example.com/festival2.jpg", description: "Beautiful orange and yellow floral garland." },
    { id: 10, name: "Eco-Friendly Cotton Garland", category: "Festival Garlands", price: 18.99, image: "https://example.com/festival3.jpg", description: "Handmade cotton garland for eco-conscious celebrations." },
    { id: 11, name: "Lotus & Mango Leaf Garland", category: "Festival Garlands", price: 21.99, image: "https://example.com/festival4.jpg", description: "Perfect for Diwali and Pooja rituals." },
    { id: 12, name: "Rangoli Flower Garland", category: "Festival Garlands", price: 22.50, image: "https://example.com/festival5.jpg", description: "Colorful garland for festive decorations." },

    // Temple Garlands
    { id: 13, name: "Sacred White Jasmine Garland", category: "Temple Garlands", price: 15.99, image: "https://example.com/temple1.jpg", description: "Pure jasmine garland for temple offerings." },
    { id: 14, name: "Holy Red Rose Garland", category: "Temple Garlands", price: 16.99, image: "https://example.com/temple2.jpg", description: "Red rose garland for deity worship." },
    { id: 15, name: "Lotus & Tulsi Garland", category: "Temple Garlands", price: 17.50, image: "https://example.com/temple3.jpg", description: "Spiritual garland for temple use." },

    // Home Decor Garlands
    { id: 16, name: "Artificial Tulip Garland", category: "Home Decor Garlands", price: 12.99, image: "https://example.com/home1.jpg", description: "Beautiful artificial tulip garland for decor." },
    { id: 17, name: "LED Light Floral Garland", category: "Home Decor Garlands", price: 14.99, image: "https://example.com/home2.jpg", description: "LED-powered garland for home decoration." },

    // Custom Garlands
    { id: 18, name: "Handcrafted Bead & Flower Garland", category: "Custom Garlands", price: 28.99, image: "https://example.com/custom1.jpg", description: "Custom bead and flower garland for unique designs." },
    { id: 19, name: "Personalized Name Garland", category: "Custom Garlands", price: 30.99, image: "https://example.com/custom2.jpg", description: "Custom name garland with floral touch." },

    // Floral Accessories
    { id: 20, name: "Floral Hair Band", category: "Floral Accessories", price: 10.99, image: "https://example.com/accessory1.jpg", description: "Flower hair band for traditional occasions." },
    { id: 21, name: "Flower Wrist Bracelet", category: "Floral Accessories", price: 8.99, image: "https://example.com/accessory2.jpg", description: "Elegant floral wrist accessory." },

    // Additional Products to reach 50
    ...Array(29).fill().map((_, i) => ({
        id: 22 + i,
        name: `Exclusive Garland ${i + 1}`,
        category: ["Wedding Garlands", "Festival Garlands", "Temple Garlands", "Home Decor Garlands", "Custom Garlands", "Floral Accessories"][Math.floor(Math.random() * 6)],
        price: (15 + Math.random() * 20).toFixed(2),
        image: `https://example.com/random${i + 1}.jpg`,
        description: "A unique handcrafted garland for all occasions."
    }))
];

export default products;
