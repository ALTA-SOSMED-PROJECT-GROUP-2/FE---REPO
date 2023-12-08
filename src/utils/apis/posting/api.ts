import { sampleDataPosting } from ".";
import { Payload, Posting, Response } from "./types";

export const getPosting = async () => {
  return new Promise<Response<Payload<Posting[]>>>((reslove) => {
    setTimeout(() => {
      const response: Response<Payload<Posting[]>> = {
        message: "Postings found",
        payload: {
          datas: sampleDataPosting,
        },
      };
      reslove(response);
    }, 1000);
  });
};
