import { ApiResponse } from "./interfaces";

const BASE_URL = 'https://dummyjson.com'

const getJson = (response: Response): Promise<ApiResponse> => {
  if (response.ok) {
    return response.json();
  }
  return response.json().then((err) => {
    throw new Error(err);
  })
}

export const getUsers = (userName: string): Promise<ApiResponse> =>
  fetch(`${BASE_URL}/users/search?q=${userName}`, {
    method: 'GET',
  }).then(getJson);