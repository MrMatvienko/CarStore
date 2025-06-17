import axios from "axios";

const BASE_URL = "https://carservice-pgcn.onrender.com/api/v1";
// const BASE_URL = "http://localhost:3000/api/v1";
axios.defaults.baseURL = BASE_URL;

export async function getAllCars({ page = 1, limit = 6, brand = "" }) {
  try {
    const params = { page, limit };
    if (brand) params.brand = brand;

    const response = await axios.get("/cars", { params });
    return response.data.cars;
  } catch (error) {
    console.error("ERROR car list:", error);
    throw error;
  }
}

export async function addNewCar(data) {
  try {
    const response = await axios.post("/cars", data);
    return response.data;
  } catch (error) {
    console.error("ERROR:", error);
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
export async function getAllBrands() {
  try {
    const response = await axios.get("/cars/brands");
    return response.data.brands;
  } catch (error) {
    console.error("ERROR brands list:", error);
    throw error;
  }
}
