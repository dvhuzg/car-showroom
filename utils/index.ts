export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "adc85a2fc8mshea7fc579ba3725ep143b50jsn9565dd8da28c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers },
  );
  return await response.json();
}
