import Alert from "@/components/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/ui/input";
import { Label } from "@/components/ui/ui/label";
import LayoutPage from "@/layouts/layout-page";
import { Link } from "react-router-dom";

export default function EditProfile() {
  return (
    <LayoutPage>
      <div className="flex flex-col font-chelsea items-center min-h-screen justify-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <img
              src="/src/assets/_ᨵ_𝐏𝐧𝐠__づ_ど_-removebg-preview 1.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label className="text-xl font-light text-textColor">
                Fullname
              </Label>
              <Input
                className="w-96 bg-sage3 placeholder:text-textColor2 text-lg"
                placeholder="Full name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label className="text-xl font-light text-textColor">
                Username
              </Label>
              <Input
                className="w-96 bg-sage3 placeholder:text-textColor2 text-lg"
                placeholder="User name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label className="text-xl font-light text-textColor">Email</Label>
              <Input
                className="w-96 bg-sage3 placeholder:text-textColor2 text-lg"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label className="text-xl font-light text-textColor">
                Password
              </Label>
              <Input
                className="w-96 bg-sage3 placeholder:text-textColor2 text-lg"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <Link to="/profile">
                  <Button className="bg-red-400 hover:bg-sage2">Cancel</Button>
                </Link>
                <Button className="bg-sage1 hover:bg-sage2">Save</Button>
              </div>
              <div>
                <Alert
                  title="Are you absolutely sure?"
                  description="This action cannot be undone. This will permanently delete your account an you cannot use your email again."
                >
                  <Button variant="destructive">Delete account</Button>
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
