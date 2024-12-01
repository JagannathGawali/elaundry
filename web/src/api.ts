
const API_URL = '/api'; // Use environment variable
// const API_URL = 'http://myapp.local/api'; /// Use environment variable

export const fetchGreeting = async () => {
  const response = await fetch(`${API_URL}/msg`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.text();
};

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

export const fetchItems = async (): Promise<Item[]> => {
  const response = await fetch(`${API_URL}/items`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const addItem = async (item: Omit<Item, "id">): Promise<Item> => {
  const response = await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const deleteItem = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export const deleteAllItems = async (): Promise<void> => {
  const response = await fetch(`${API_URL}/items`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
