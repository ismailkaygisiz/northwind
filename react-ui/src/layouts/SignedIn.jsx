import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC"
        />
        <Dropdown pointing="top left" text="İsmail">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              text="Çıkış Yap"
              icon="sign-out"
              onClick={props.signOut}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
