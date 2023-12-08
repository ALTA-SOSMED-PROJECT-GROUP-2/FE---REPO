import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/ui/alert-dialog";
import { Input } from "../ui/ui/input";
import { Textarea } from "../ui/ui/textarea";
import avatar from "@/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg"
import insertIcon from '@/assets/insert-picture-icon 1.svg'

export default function CreatePosting() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex items-center justify-center sticky bg-white top-0 w-full py-6 shadow">
        <div>
          <img
            src={avatar}
            alt=""
            className="w-24"
          />
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="w-[40rem] py-8 bg-sage2 placeholder:text-textColor2 placeholder:text-lg rounded-full font-bold"
            placeholder=" What do you think ?..."
          />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[40rem] h-[37rem]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-1 mb-3">
            <img
              src={avatar}
              alt=""
              className="w-20"
            />
            <div>
              <p className="font-chela text-pinky font-light">Cutie_person</p>
              <p className="font-chelsea text-sage1 font-extralight">@ur_lover</p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div>
              <Textarea
                className="bg-sage3 h-96 placeholder:text-textColor2 placeholder:text-xl placeholder:font-bold"
                placeholder="Type your message here"
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center justify-between">
          <AlertDialogCancel className="bg-red-400 hover:bg-sage2 hover:text-white text-white">
            Cancel
          </AlertDialogCancel>
          <div className="flex items-center">
            <div className="w-20 hover:scale-110">
            <img
              src={insertIcon}
              alt=""
              className=""
            />
            </div>

            <AlertDialogAction className="bg-sage1 hover:bg-sage2 hover:text-white text-white text-lg">
              Send
            </AlertDialogAction>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
