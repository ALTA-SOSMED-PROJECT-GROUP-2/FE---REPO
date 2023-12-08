import EditComment from "./edit-comment";

export default function EditCommentCard() {
  return (
    <div className="flex mb-10 gap-4 border-b border-b-sage1 py-6 w-full px-20">
      <div>
        <img src="/src/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg" alt="" />
      </div>
      <div className="flex flex-col gap-4 w-fit">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="font-chela text-pinky text-xl">Cutie_lover</p>
              <p className="text-sage1">@ur_lover</p>
              <p className="text-sage1">3 Hour</p>
            </div>
            <EditComment/>
          </div>
          <p className="text-sm text-sage1 font-light">01 Des 23</p>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            That hike looks challenging but totally worth it for that view!
            Amazing shot! 🌄👏
          </p>
        </div>
      </div>
    </div>
  );
}
