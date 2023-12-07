import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/ui/avatar";

import { Button } from "@/components/ui/ui/button";
import LayoutPage from "@/layouts/layout-page";
import PostCard from "@/components/post-card";
import { Separator } from "@/components/ui/ui/separator";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <LayoutPage>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center md:gap-10">
          <div className="flex flex-col items-center">
            <Avatar className="w-32 h-32">
              <AvatarImage
                src="https://s3-alpha-sig.figma.com/img/472e/bc60/e956f4efcca21963fb9d3989db0c5bb7?Expires=1702857600&Signature=Smq369OVUU5Gldb5FtB8J4BVn2CKkm3XotHcV7JDOBgLz1TK5U7t756-qMKdAPsaFNzTEAdJ-pLbOK8Asl~4G1UHaYzacxl7EfPqBlaF~Gm-rYyTSA6RkQ~hzSIxkYDlAhwXzuaHSrUZXG-e~QVVGjD-p3BHJEK6WKlJbZ6zWQnQPJ-9NsUj8IuWPRhCze1JGr23A-eXTunnt2R5A-Drrsj4YOPY~KY-YmRMpj18n1PFhGhech0fqvqbb1XV6NM8Gr7IG2KnWYropyrLdMUPJ8T-eD2emNiGlUFHr91CikBK1kCv9Ea98tejWbB6PUznkHNjDHBpMmwfCzpV-6GWBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="photo profile"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-pinky font-chelsea">cutie person ^^</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-12">
              <p className="font-chelsea">ur_lover</p>
              <Link to="/profile/edit">
                <Button size="sm" className="bg-sage1 hover:bg-sage2">
                  Edit Profile
                </Button>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-col items-center">
                <p className="text-tealLagoon">Followers</p>
                <p className="font-chelsea text-xl">2</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-tealLagoon">Following</p>
                <p className="font-chelsea text-xl">2</p>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-4 max-w-xl bg-sage1" />
        <div className="flex flex-col lg:w-1/2">
          <div className="flex flex-row items-center gap-2 md:mx-8">
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
          </div>
          <Separator className="my-4 bg-sage1 px-6" />
          <div className="flex flex-col gap-3 md:mx-8">
            <p className="text-lg">Recent Posting</p>
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Profile;
