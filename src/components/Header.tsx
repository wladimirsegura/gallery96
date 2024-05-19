import { HiUser, HiUserAdd } from "react-icons/hi";

const Header = () => {
  // const menu = [
  //   { title: "サインアップ", icon: HiUserAdd },
  //   { title: "サインイン", icon: HiUser },
  // ];
  return (
    <div className="flex">
      <img
        src="src/assets/react.svg"
        alt="logo"
        className="w-[40px] md:w-[80px] object-cover"
      />
      <h2 className="flex">
        <HiUser />
        サインイン
        <HiUserAdd />
        サインアップ
      </h2>
    </div>
  );
};

export default Header;
