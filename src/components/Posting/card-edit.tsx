import { Link } from "react-router-dom";
import EditPosting from "./edit-posting";

export default function CardEdit() {
  return (
    <div className="border-b border-b-sage1 py-10 px-10">
      <div className="flex pb-4 px-10 gap-4">
        <div>
          <img src="/src/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <p className="font-chela text-pinky text-xl">Cutie_lover</p>
                <p className="text-sage1">@ur_lover . </p>
                <p className="text-sage1">3 Hour</p>
              </div>
              <EditPosting />
            </div>
            <p className="text-sm text-sage1 font-light">03 Des 23</p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-justify">Every love story has its own end.</p>
            <div className="flex flex-col gap-2">
              <div className="w-full">
                <img
                  src="/src/assets/Twenty five twenty one 1.svg"
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <Link
                to="/comments/3"
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
