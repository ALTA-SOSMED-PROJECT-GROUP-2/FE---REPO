import { Avatar, AvatarFallback, AvatarImage } from "./ui/ui/avatar";

import EditPosting from "./Posting/edit-posting";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <div className="w-full flex flex-row gap-3">
      <Avatar className="w-16 h-16">
        <AvatarImage
          src="https://s3-alpha-sig.figma.com/img/472e/bc60/e956f4efcca21963fb9d3989db0c5bb7?Expires=1702857600&Signature=Smq369OVUU5Gldb5FtB8J4BVn2CKkm3XotHcV7JDOBgLz1TK5U7t756-qMKdAPsaFNzTEAdJ-pLbOK8Asl~4G1UHaYzacxl7EfPqBlaF~Gm-rYyTSA6RkQ~hzSIxkYDlAhwXzuaHSrUZXG-e~QVVGjD-p3BHJEK6WKlJbZ6zWQnQPJ-9NsUj8IuWPRhCze1JGr23A-eXTunnt2R5A-Drrsj4YOPY~KY-YmRMpj18n1PFhGhech0fqvqbb1XV6NM8Gr7IG2KnWYropyrLdMUPJ8T-eD2emNiGlUFHr91CikBK1kCv9Ea98tejWbB6PUznkHNjDHBpMmwfCzpV-6GWBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="photo profile"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="w-full flex flex-col mt-2 gap-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row gap-1">
              <p className="text-pinky font-chelsea">cutie person ^^</p>
              <p className=" text-gray-400">@ur_lover</p>
              <p className=" text-gray-400">. 3 hour</p>
            </div>
            <p className=" text-gray-400">3 Des 23</p>
          </div>
          <EditPosting />
        </div>

        <p className=" text-justify">Every love story has its own end.</p>
        <img
          className="rounded-md shadow-md w-full max-h-96"
          src="https://s3-alpha-sig.figma.com/img/ddca/8100/4f751af9cadbd98a0e2ac80ddf36e4b5?Expires=1702857600&Signature=Df~uwZ6GQq~nlM5sXdqHVGb9SwUKZO0QhWbKTmHGob6XibO~wHAOlAf-Y2hul4YcCitQxJgu3PMtn07YI0T8YEnUR4sGJxA6U1l7zsCFIbyZDiU4Yl9GJQi31ahsSYKOkaGhqiiVLWEO20rCoeCmIq4Fd1WmNgm~q1m3-gXmrrxXIvLQhrHeMlK20JjZ52fC8JnYUB~tiZ2iN~4keqQk53sBQYpt~tE83ZIGCN74TPHt6Y~827ULBdEUswJcvERLLI6XTd~tdHcugcVyT753oic5ePU1rf57uCBRhOCVeutffjs6lsvQ0ok2AE3G5VwKu1evO~~sAKEQ6UgYnvMEJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <div className="flex flex-row items-center gap-1">
          <Link
            to={`/comments/1`}
            className="hover:bg-sage3 w-fit rounded-full p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              fill="#86A789"
            >
              <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
            </svg>
          </Link>
          <p className="text-pinky font-light">3</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
