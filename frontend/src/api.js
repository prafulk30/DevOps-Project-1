const API_BASE = "http://localhost:5110/api";

export async function fetchMessage() {
  const response = await fetch(`${API_BASE}/message`);
  const data = await response.json();
  return data;
}
