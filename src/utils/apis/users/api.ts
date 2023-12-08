/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosWithConfig from "../axiosWithConfig";

export const getProfile = async () => {
  try {
    const response = await axiosWithConfig.get(
      "https://virtserver.swaggerhub.com/HANAFIBAGAS4/sosmed/1.0.0/users"
    );

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
