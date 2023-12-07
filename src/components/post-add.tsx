import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/ui/avatar";
import { ChangeEvent, useState } from "react";

import { Button } from "./ui/ui/button";
import { Textarea } from "./ui/ui/textarea";

const PostAdd = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex flex-row items-center justify-center gap-2 md:mx-8">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src="https://s3-alpha-sig.figma.com/img/472e/bc60/e956f4efcca21963fb9d3989db0c5bb7?Expires=1702857600&Signature=Smq369OVUU5Gldb5FtB8J4BVn2CKkm3XotHcV7JDOBgLz1TK5U7t756-qMKdAPsaFNzTEAdJ-pLbOK8Asl~4G1UHaYzacxl7EfPqBlaF~Gm-rYyTSA6RkQ~hzSIxkYDlAhwXzuaHSrUZXG-e~QVVGjD-p3BHJEK6WKlJbZ6zWQnQPJ-9NsUj8IuWPRhCze1JGr23A-eXTunnt2R5A-Drrsj4YOPY~KY-YmRMpj18n1PFhGhech0fqvqbb1XV6NM8Gr7IG2KnWYropyrLdMUPJ8T-eD2emNiGlUFHr91CikBK1kCv9Ea98tejWbB6PUznkHNjDHBpMmwfCzpV-6GWBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="photo profile"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button className="bg-sage3 hover:bg-sage3 w-full rounded-2xl justify-start">
          Create your posting ....
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[40rem] h-[37rem]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-1 mb-3">
            <img
              src="src/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg"
              alt=""
              className="w-20"
            />
            <div>
              <p className="font-chela text-pinky font-light">Cutie_person</p>
              <p className="font-chelsea text-sage1 font-extralight">
                @ur_lover
              </p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col gap-2">
              <Textarea
                className="bg-sage3 h-60 placeholder:text-textColor2 placeholder:text-xl placeholder:font-bold"
                placeholder="Type your message here"
              />
              {selectedImage && (
                <div className=" w-32 h-32">
                    <img
                  src={selectedImage}
                  alt="Selected"
                />
                </div>
              )}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center justify-between">
          <AlertDialogCancel className="bg-sage1 hover:bg-sage2 hover:text-white text-white">
            Cancel
          </AlertDialogCancel>
          <div className="flex items-center">
            <div className="w-20 hover:scale-110">
              <label htmlFor="fileInput" className="cursor-pointer">
                <img
                  src="/src/assets/insert-picture-icon 1.svg"
                  alt=""
                  className=""
                />
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <AlertDialogAction className="bg-sage1 hover:bg-sage2 hover:text-white text-white text-lg">
              Send
            </AlertDialogAction>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PostAdd;
