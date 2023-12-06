import { Posting } from "@/utils/apis/posting";
import { Link } from "react-router-dom";

interface Props {
  data: Posting;
}

export default function CardPosting(props: Props) {
  const { data } = props;
  return (
    <div className="border-b border-b-sage1 py-10">
      <div className="flex pb-4 px-10 gap-4">
        <div>
          <img src="/src/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg" alt="" />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="">
            <div className="flex items-center gap-2">
              <p className="font-chela text-pinky text-xl">{data.fullname}</p>
              <p className="text-sage1">{data.username} . </p>
              <p className="text-sage1">{data.time}</p>
            </div>
            <p className="text-sm text-sage1 font-light">{data.date}</p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-justify">{data.text}</p>
            <div className="flex flex-col gap-2">
              <div className="w-full">
                <img src={data.image} alt="" className="rounded-lg" />
              </div>
              <Link
                to={`/comments/${data.id}`}
                className="hover:bg-sage3 w-fit rounded-full p-1"
              >
                <img src="/src/assets/comment (1) 2.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
