import { useContext } from "react";
import UserContext from "../context/UserContext";

function Intro() {
  let { user } = useContext(UserContext);
  if (!user) return <h1>You are not logged in!</h1>;

  return (
    <div>
      <div className="flex gap-4 items-center">
        <img
          src={user.img}
          className="w-14 h-14 object-cover rounded-full"
          alt=""
        />
        <div className="">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
