import { Comments } from "@/utils/apis/comments";

interface Props {
  data: Comments;
}

export default function CardComments(props: Props) {
  const { data } = props;
  return (
    <div className="flex mb-10 gap-4 border-b border-b-sage1 py-6 w-full px-10">
      <div>
        <img src="/src/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg" alt="" />
      </div>
      <div className="flex flex-col gap-4 w-fit">
        <div className="">
          <div className="flex items-center gap-1">
            <p className="font-chela text-pinky text-xl">{data.fullname}</p>
            <p className="text-sage1">{data.username}</p>
            <p className="text-sage1">{data.time}</p>
          </div>
          <p className="text-sm text-sage1 font-light">{data.date}</p>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-justify">{data.text}</p>
        </div>
      </div>
    </div>
  );
}
