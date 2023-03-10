import { Dropdown } from "react-bootstrap";

export const DetailsDropdown = ({ name }) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">{name}</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">User 2</Dropdown.Item>
          <Dropdown.Item href="#/action-2">User 3</Dropdown.Item>
          <Dropdown.Item href="/">Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
