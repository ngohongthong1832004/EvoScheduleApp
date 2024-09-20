import { Link } from "react-router-dom";

export const ProfileModule = () => {
    return (
      <div className="mt-[100px] p-5 h-[1000px]">
        <div className="">
          <Link
            to="/profile" 
            className="text-sm font-bold"
          > {"->"} PROFILE</Link>
        </div>
      </div>
    );
};
  