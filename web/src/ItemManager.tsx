/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, FormEvent } from "react";
import { fetchItems, addItem, deleteItem, deleteAllItems } from "./api"; // Import API functions

// Type definitions
interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ItemManager: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Omit<Item, "id">>({
    name: "",
    description: "",
    price: 0,
  });
  const [error, setError] = useState<string>("");
  const loadItems = async () => {
    try {
      const items = await fetchItems();
      setItems(items);
    } catch (err) {
      setError("Failed to fetch items");
      console.error(err);
    }
  };
  useEffect(() => {
 
    loadItems();
  }, []);

  const handleAddItem = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const addedItem = await addItem(newItem);
      setItems([...items, addedItem]);
      setNewItem({ name: "", description: "", price: 0 }); // Clear form
    } catch (err) {
      setError("Failed to add item");
      console.error(err);
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      setError("Failed to delete item");
      console.error(err);
    }
  };

  // Function to generate random data with more attributes
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

  // Function to send random data to the API
  async function sendRandomData() {
    const randomData = generateRandomData(); // Generate random data

    try {
      const addedItem = await addItem(randomData);
      setItems((prev)=> [...prev, addedItem]);
    } catch (error) {
      console.error("Error connecting to API:", error);
    }
  }

  const [intervalFuc, setIntervalFunc] = useState<number | null>(null);
  const [timeDelay, setTimeDelay] = useState<number>(5000);
  const setRadomData = async () => {
    const clearInterval = setInterval(sendRandomData, timeDelay);
    setIntervalFunc(clearInterval as any);
  };

  // Function to clear the interval
  const clearRandomData = () => {
    if (intervalFuc !== null) {
      clearInterval(intervalFuc);
    }
    setIntervalFunc(null);
  };

  const deleteAll = async () => {
    try {
      await deleteAllItems();
      loadItems();
    } catch (error) {
      console.error("Error connecting to API:", error);
    }
  };

  // Set an interval to send random data every 5 seconds (5000 milliseconds)
  // setInterval(sendRandomData, 5000);

  return (
    <div>
      {/* Error handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Item Listing */}
      <h2>Item List</h2>
      <ul key={items?.length}>
        {items?.slice(-20)?.map((item) => (
          <li key={item.id}>
            {item.name}: {item.description} - ${item.price}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Genarate New Item</h2>
      <input
        type="number"
        value={timeDelay}
        onChange={(e) => setTimeDelay(parseInt(e.target.value))}
        required
      />
      <button onClick={setRadomData}>Genarate Items</button>
      <button onClick={clearRandomData} disabled={!intervalFuc}>Stop Items</button>
      <button onClick={deleteAll}>Delete All Items</button>


        {/* Add Item Form */}
        <h2>Add New Item</h2>
      <form onSubmit={handleAddItem}>
        <label>
          Name:
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={newItem.price}
            onChange={(e) =>
              setNewItem({ ...newItem, price: parseFloat(e.target.value) })
            }
            required
            step="0.01" // Allows for decimal values
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ItemManager;
