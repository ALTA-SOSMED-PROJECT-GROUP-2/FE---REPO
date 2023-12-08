import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/ui/dropdown-menu";

import Alert from "../alert";

export default function EditComment() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="4"
          viewBox="0 0 24 4"
          fill="none"
          className="mt-2"
        >
          <path
            d="M0 0L0 4H6V0L0 0ZM9 0V4H15V0L9 0ZM18 0V4H24V0L18 0Z"
            fill="#4A4A4A"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-chelsea text-textColor2">
        <Alert
          title="Are you absolutely sure?"
          description="This action cannot be undone."
        >
          <div className="flex items-center gap-2 p-2">
            <img src="/src/assets/🦆 icon _trash_.svg" alt="" />
            <p>Delete</p>
          </div>
        </Alert>
        <DropdownMenuSeparator />
        <div className="flex items-center gap-2 p-2">
          <img src="/src/assets/🦆 icon _pencil_.svg" alt="" />
          <p>Edit</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
