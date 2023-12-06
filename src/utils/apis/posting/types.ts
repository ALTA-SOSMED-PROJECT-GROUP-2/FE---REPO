/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Posting {
  id: number;
  fullname: string;
  username: string;
  date: string;
  time: string;
  text: string;
  image: string;
}

export type Response<T = any> = {
  message: string;
  payload: T;
};

export type Payload<T = any> = {
  datas: T;
};
