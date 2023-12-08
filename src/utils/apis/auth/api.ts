import { LoginSchema, RegisterSchema } from ".";

import axios from "axios";

export const postLogin = async (body: LoginSchema) => {
  try {
    const response = await axios.get(
      `https://virtserver.swaggerhub.com/HANAFIBAGAS4/sosmed/1.0.0/login?username=${body.username}&password=${body.password}`
    );

    return response.data as { username: string; token: string };
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const postRegister = async (body: RegisterSchema) => {
  try {
    const response = await axios.post(
      `https://virtserver.swaggerhub.com/HANAFIBAGAS4/sosmed/1.0.0/register`,
      body
    );

    return response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
