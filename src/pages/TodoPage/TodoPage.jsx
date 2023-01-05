import { Navbar } from "../../components/Navbar/Navbar";

export const TodoPage = ({ userId }) => {
  return (
    <div className="main-wrapper">
      <div className="navbar-wrapper" style={{ width: "22%" }}>
        <Navbar userId={userId} />
      </div>
    </div>
  );
};
