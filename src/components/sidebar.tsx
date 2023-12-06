import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen flex flex-col border-r border-r-sage1 py-5">
      <div>
        <img src="/src/assets/Chirpy.svg" alt="chirphy" className="w-[35rem]" />
      </div>
      <div className="w-full px-20 flex flex-col grow py-20 gap-4">
        <Link to="/">
          <div className="flex items-center gap-4 hover:bg-sage3 w-fit p-2 rounded-lg">
            <img src="/src/assets/house-solid 2.svg" alt="home" />
            <p className="text-lg text-textColor">Home</p>
          </div>
        </Link>
        <div className="flex items-center gap-4 hover:bg-sage3 w-fit p-2 rounded-lg">
          <img src="/src/assets/🦆 icon _person_.svg" alt="" />
          <p className="text-lg text-textColor">Profile</p>
        </div>
      </div>
      <div>
        <div className="px-20">
          <Link to="/login">
            <div className="flex items-center gap-4 hover:bg-sage3 p-2 rounded-lg w-fit">
              <img src="/src/assets/enter 2.svg" alt="" />
              <p className="text-lg text-textColor">Sign up</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
