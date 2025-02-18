const mongoose = require("mongoose")
const Restaurants = require("./models/restaurants.models")

const {initializeDatabase} = require("./db/db.connect")
initializeDatabase()

const newRestaurant = {
    name: "Cha Cha",
    cuisine: ["Spanish"],
    location: "123 Main Street, Anytown",
    rating: 4.0,
    reviews: [],
    website: "https://example.com",
    phoneNumber: "+1234567890",
    openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
    priceRange: "$$ (11-30)",
    reservationsNeeded: true,
    isDeliveryAvailable: true,
    menuUrl: "https://example.com/menu",
    photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
  };

async function createRestaurant(newRestaurant) {
    try{
        const restaurant = new Restaurants(newRestaurant)
        await restaurant.save()
        console.log("Restaurant saved")
    } 
    catch(error){
        throw error
    }
}

createRestaurant(newRestaurant)