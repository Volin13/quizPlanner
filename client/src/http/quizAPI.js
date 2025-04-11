import { API } from ".";



export const getQuantity = async () => {
  try {
    const response = await API.get('/quiz/quantity');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
 
  };