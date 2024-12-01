const axios = require("axios");

// Define the URL for the request
const url = "http://138.91.174.186:3000/save-data";

let number=0;

function generateRandomData() {
  const names = [
    "Smartphone",
    "Laptop",
    "Headphones",
    "Watch",
    "T-shirt",
    "Sneakers",
    "Coffee Mug",
    "Backpack",
    "Camera",
    "Smartwatch",
    "Bluetooth Speaker",
    "Tablet",
    "Jacket",
    "Jeans",
    "Smart TV",
  ];

  const descriptions = [
    "The latest model with cutting-edge technology.",
    "High performance laptop for professionals.",
    "Noise-cancelling headphones with superior sound quality.",
    "Stylish and durable wristwatch with a leather band.",
    "Comfortable t-shirt made with soft cotton fabric.",
    "Premium sneakers with superior comfort and style.",
    "A sleek and modern coffee mug for your daily brew.",
    "Durable and spacious backpack for daily use.",
    "High-resolution digital camera with zoom functionality.",
    "Waterproof smartwatch with fitness tracking capabilities.",
    "Portable Bluetooth speaker with deep bass.",
    "Compact tablet for on-the-go productivity.",
    "Warm and stylish jacket perfect for the winter season.",
    "Trendy jeans made with stretchable material.",
    "Smart TV with 4K resolution and built-in streaming apps.",
  ];

  // Randomly select values from the arrays
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];
  const randomPrice = parseFloat((Math.random() * 100).toFixed(2)); // Random price between 0 and 100

  return {
    id: number++,
    name: `${randomName}-${(Math.random() * 100).toFixed(0)}`,
    description: randomDescription,
    price: randomPrice,
  };
}

const sendCreateRequest = async () => {
    try {
      const response = await axios.post(url, generateRandomData());
      console.log('New Item:', new Date(), response.data.id);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

// Function to run the request in a loop
const loopCreateRequests = (intervalMs) => {
    setInterval(() => {
      sendCreateRequest();
    }, intervalMs); // Interval in milliseconds
  };

loopCreateRequests(100);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);