"use server";
export async function getAllWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Islamabad,pk&appid=aac946cf84a0af01f20c9f079f5617a1&units=metric",
    { cache: "no-cache" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
}
