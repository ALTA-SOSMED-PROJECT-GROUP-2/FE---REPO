import { Input } from "./ui/ui/input";

export default function CreatePosting() {
  return (
    <div className="flex items-center justify-center sticky bg-white top-0 w-full py-6 shadow">
      <div>
        <img
          src="/src/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg"
          alt=""
          className="w-24"
        />
      </div>
      <div className="flex items-center gap-2">
        <Input
          className="w-[40rem] py-8 bg-sage2 placeholder:text-black rounded-full"
          placeholder="What do you think ?..."
        />
      </div>
    </div>
  );
}
