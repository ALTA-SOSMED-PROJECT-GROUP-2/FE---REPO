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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/ui/dropdown-menu";
import avatar from "@/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg";
import trash from "@/assets/🦆 icon _trash_.svg";
import photoEditing from "@/assets/photo-editing 1 (1).svg";
import insertIcon from "@/assets/insert-picture-icon 1.svg";
import tfto from "@/assets/Twenty five twenty one 1.svg"

import { Textarea } from "../ui/ui/textarea";

export default function EditPostingDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex items-center gap-2">
        <img src={avatar} alt="" />
        <p>Edit</p>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[40rem] h-[37rem]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-1 mb-3">
            <img src={avatar} alt="" className="w-20" />
            <div>
              <p className="font-chela text-pinky font-light">Cutie_person</p>
              <p className="font-chelsea text-sage1 font-extralight">
                @ur_lover
              </p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-2">
            <div>
              <Textarea
                className="bg-sage3 h-40 placeholder:text-textColor2 placeholder:text-xl placeholder:font-bold"
                placeholder="Type your message here"
              />
            </div>
            <div>
              <img src={tfto} alt="" />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center justify-between">
          <AlertDialogCancel className="bg-red-400 hover:bg-sage2 hover:text-white text-white">
            Cancel
          </AlertDialogCancel>
          <div className="flex items-center">
            <div className="w-20 hover:scale-110">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <img src={insertIcon} alt="" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="font-chelsea text-textColor2 flex flex-col">
                  <div className="flex items-center gap-2 p-2">
                    <img src={trash} alt="" />
                    <p>Delete</p>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="flex items-center gap-2 p-2">
                    <img src={photoEditing} alt="" />
                    Change
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
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
