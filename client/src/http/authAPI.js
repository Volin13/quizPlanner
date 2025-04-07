import { API } from ".";


export const login = async (username, password) => {
    const response = await API.post('/auth/login', { username, password });
    return response.data.accessToken;
  };
  
  export const refresh = async () => {
    const response = await API.post('/auth/refresh');
    return response.data.accessToken;
  };
  
  export const getMe = async (accessToken) => {
    const response = await API.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  };

