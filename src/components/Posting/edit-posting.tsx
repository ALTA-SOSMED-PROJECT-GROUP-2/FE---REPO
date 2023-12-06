import Alert from "../alert";
import EditPostingDialog from "./edit-posting-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/ui/dropdown-menu";

export default function EditPosting() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img src="/src/assets/down-arrow 1 (1).svg" alt="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-chelsea text-textColor2">
        <Alert
          title="Are you absolutely sure?"
          description="This action cannot be undone. This will permanently delete your account an you cannot use your email again."
        >
          <div className="flex items-center gap-2 p-2">
            <img src="/src/assets/🦆 icon _trash_.svg" alt="" />
            <p>Delete</p>
          </div>
        </Alert>
        <DropdownMenuSeparator />
        <div className="flex items-center gap-2 p-2">
          <EditPostingDialog />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
