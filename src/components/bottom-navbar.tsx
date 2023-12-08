import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <nav className="w-full bg-white border-t border-r-sage1 flex justify-around items-center p-4 md:hidden">
      <Link to="/" className="w-fit px-3 py-1 flex flex-row items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="36"
          viewBox="0 0 28 36"
          fill="none"
          className="w-6"
        >
          <path
            d="M27.9903 13.9727C27.9903 14.957 27.2611 15.7281 26.4347 15.7281H24.8792L24.9132 24.4891C24.9132 24.6367 24.9035 24.7844 24.8889 24.932V25.8125C24.8889 27.0211 24.0188 28 22.9444 28H22.1667C22.1132 28 22.0597 28 22.0063 27.9945C21.9382 28 21.8701 28 21.8021 28H20.2222H19.0556C17.9813 28 17.1111 27.0211 17.1111 25.8125V24.5V21C17.1111 20.032 16.416 19.25 15.5556 19.25H12.4444C11.584 19.25 10.8889 20.032 10.8889 21V24.5V25.8125C10.8889 27.0211 10.0188 28 8.94444 28H7.77778H6.22708C6.15417 28 6.08125 27.9945 6.00833 27.9891C5.95 27.9945 5.89167 28 5.83333 28H5.05556C3.98125 28 3.11111 27.0211 3.11111 25.8125V19.6875C3.11111 19.6383 3.11111 19.5836 3.11597 19.5344V15.7281H1.55556C0.680556 15.7281 0 14.9625 0 13.9727C0 13.4805 0.145833 13.043 0.486111 12.6602L12.95 0.4375C13.2903 0.0546875 13.6792 0 14.0194 0C14.3597 0 14.7486 0.109375 15.0403 0.382813L27.4556 12.6602C27.8444 13.043 28.0389 13.4805 27.9903 13.9727Z"
            fill="#86A789"
          />
        </svg>
        <p className=" text-tealLagoon">Home</p>
      </Link>
      <Link
        to="/profile"
        className="w-fit px-4 py-2 flex flex-row items-center gap-5 bg-pinky bg-opacity-50 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="w-6"
        >
          <path
            d="M14 0C10.15 0 7 3.92 7 8.75C7 13.58 10.15 17.5 14 17.5C17.85 17.5 21 13.58 21 8.75C21 3.92 17.85 0 14 0ZM6.685 17.5C2.975 17.675 0 20.72 0 24.5V28H28V24.5C28 20.72 25.06 17.675 21.315 17.5C19.425 19.635 16.835 21 14 21C11.165 21 8.575 19.635 6.685 17.5Z"
            fill="#86A789"
          />
        </svg>
        <p className=" text-tealLagoon">Profile</p>
      </Link>
    </nav>
  );
};

export default BottomNavbar;
