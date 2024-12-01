const axios = require("axios");

// Define the URL for the request
const url = "http://34.168.171.77/api/items";

// Function to send a request
const sendRequest = async () => {
  try {
    const response = await axios.get(url, {
      httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }), // Disables SSL verification (equivalent to --insecure in curl)
    });

    // Log the response
    console.log("Items:", new Date(), response.data.length);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

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
    name: `${randomName}-${(Math.random() * 100).toFixed(0)}`,
    description: randomDescription,
    price: randomPrice,
  };
}

const sendCreateRequest = async () => {
    try {
      const response = await axios.post(url, generateRandomData());
      // sendDeleteRequest(response.data);
      console.log('New Item:', new Date(), response.data.id);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const sendDeleteRequest = async (data) => {
    try {
      const response = await axios.delete(`${url}/${data.id}`);
      console.log('New delete:', new Date(), response.data.id);
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

// Function to run the request in a loop
const loopRequests = (intervalMs) => {
  setInterval(() => {
    sendRequest();
  }, intervalMs); // Interval in milliseconds
};

// loopCreateRequests(10);
// loopCreateRequests(10);
// loopCreateRequests(100);
// loopCreateRequests(250);
// loopCreateRequests(400);
// loopCreateRequests(5000);
// loopRequests(1);
// loopRequests(1);
// loopRequests(1);


// loopCreateRequests(500);
loopCreateRequests(10);
loopCreateRequests(1);
// loopRequests(500);
// loopRequests(900);
// loopCreateRequests(2000);
// loopRequests(900);
// loopCreateRequests(1);
// loopCreateRequests(1);
// loopCreateRequests(1);
// loopCreateRequests(1);

/*
loopCreateRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);

loopRequests(1);
loopRequests(1);
loopRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopRequests(1);
loopRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);

loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);


loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);


loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

loopRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);
loopCreateRequests(1);

*/