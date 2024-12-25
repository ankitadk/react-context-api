import { useContext } from "react";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";

function App() {
  const { setUser } = useContext(UserContext);

  function loginHandler() {
    setUser({
      name: "Ashish",
      email: "ashish@gmail.com",
      img: "https://media.istockphoto.com/id/1294240827/photo/man-feeling-alone-outdoor-image.jpg?s=612x612&w=0&k=20&c=bp15S8N_kClVVV43QUw67jUCdEqEnsmUHwFSbF3MBPE=",
    });
  }

  return (
    <>
      <div className="border-b py-3 border-neutral-200">
        <div className="max-w-4xl flex justify-between mx-auto">
          <h3 className="">Context API</h3>
          <div className="">
            <button onClick={loginHandler} className="">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <Profile />
      </div>
    </>
  );
}

export default App;
