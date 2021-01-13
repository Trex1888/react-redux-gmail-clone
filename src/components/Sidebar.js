import React from "react";
import "../styles/Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebar__compose">
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={17} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={4} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={3} />
      <SidebarOption Icon={LabelImportant} title="Important" number={5} />
      <SidebarOption Icon={NearMe} title="Sent" number={6} />
      <SidebarOption Icon={Note} title="Drafts" number={1} />
      <SidebarOption Icon={ExpandMore} title="More" number={0} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
