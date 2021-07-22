import api from "./apiConfig";

export const getAllSunscreens = async () => {
  try {
    const response = await api.get("/sunscreens");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getOneSunscreen = async (id) => {
  try {
    const response = await api.get(`/sunscreens/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createSunscreen = async (sunscreen) => {
  try {
    const response = await api.post("/sunscreens", sunscreen);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const editSunscreen = async (id, sunscreen) => {
  try {
    const response = await api.put(`/sunscreens/${id}`, sunscreen);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteSunscreen = async (id) => {
  try {
    const response = await api.delete(`/sunscreens/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
