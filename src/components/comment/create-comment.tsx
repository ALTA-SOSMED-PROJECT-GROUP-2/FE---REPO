import { Input } from "../ui/ui/input";
import avatar from "@/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg"


export default function CreateComment() {
  return (
    <div className="flex items-center justify-center sticky bg-white border-t border-t-sage1 bottom-0 w-full py-4">
      <div>
        <img src={avatar} alt="" className="w-24"/>
      </div>
      <div className="flex items-center gap-2">
        <Input className="w-[40rem] py-6 bg-sage2 placeholder:text-black rounded-lg font-bold"placeholder="Type your comment..."/>
        <button className="bg-sage1 py-3 px-4 rounded-lg text-white">Send</button>
      </div>
    </div>
  );
}
