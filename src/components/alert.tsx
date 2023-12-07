import { ReactNode } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/ui/alert-dialog";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  onCancel?: () => void;
  onAction?: () => void;
}

const Alert = (props: Props) => {
  const { title, description, children, onAction, onCancel } = props;

  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="font-chelsea font-extralight">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={onCancel}
            className="bg-red-400 hover:bg-sage2 hover:text-white text-white text-lg"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onAction}
            className="bg-sage1 hover:bg-sage2 hover:text-white text-white text-lg"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
