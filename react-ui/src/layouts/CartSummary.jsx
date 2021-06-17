import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      {" "}
      <Dropdown item text="Sepet Özeti">
        <Dropdown.Menu>
          <Dropdown.Item>X</Dropdown.Item>
          <Dropdown.Item>Y</Dropdown.Item>
          <Dropdown.Item>Z</Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
