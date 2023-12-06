import { Comments, sampleDataComments} from ".";
import { Payload, Response } from "../posting/types";

export const getComments = async () => {
  return new Promise<Response<Payload<Comments[]>>>((reslove) => {
    setTimeout(() => {
      const response: Response<Payload<Comments[]>> = {
        message: "Comments found",
        payload: {
          datas: sampleDataComments
        },
      };
      reslove(response);
    }, 1000);
  });
};
