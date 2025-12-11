export const API_BASE = "https://ghibliapi.vercel.app";

export async function getFilms() {
  const res = await fetch(`${API_BASE}/films`);
  return res.json();
}
