import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="navbar bg-base-100 justify-between">
      <a className="font-bold normal-case text-xl underline">V&G Gallery📷</a>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Navbar;
