import axios from "axios";

export const BASE_URL = "https://carservice-1a2n.onrender.com/api/v1";
axios.defaults.baseURL = BASE_URL;

export async function getAllCars() {
  try {
    const response = await axios.get("/cars");
    return response.data.cars;
  } catch (error) {
    console.error("ERROR car list:", error);
    throw error;
  }
}

export async function addNewCar(data) {
  try {
    const response = await axios.post("/cars", data);
    console.log("Успішно додано:", response.data);
    return response.data;
  } catch (error) {
    console.error("Помилка при додаванні авто:", error);
    throw error;
  }
}
export async function deleteCar(article) {
  try {
    const response = await axios.delete(`/cars/${article}`);
    console.log("Success delete:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error delete:", error);
    throw error;
  }
}
