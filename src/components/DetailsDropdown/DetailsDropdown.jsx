import { Dropdown } from "react-bootstrap";

export const DetailsDropdown = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">User 1 name</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">User 2</Dropdown.Item>
          <Dropdown.Item href="#/action-2">User 3</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Sign Out Button</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
