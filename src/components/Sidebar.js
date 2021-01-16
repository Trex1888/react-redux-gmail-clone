import React from "react";
import "../styles/Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import {
  AccessTime,
  Add,
  CheckCircleOutline,
  DeleteOutline,
  Duo,
  ErrorOutline,
  ExpandMore,
  Inbox,
  LabelImportant,
  Mail,
  NearMe,
  Note,
  Person,
  Phone,
  Schedule,
  StarOutline,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={12} selected={true} />
      <SidebarOption Icon={StarOutline} title="Starred" number={4} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={3} />
      <SidebarOption Icon={LabelImportant} title="Important" number={5} />
      <SidebarOption Icon={NearMe} title="Sent" number={6} />
      <SidebarOption Icon={Schedule} title="Scheduled" number={0} />
      <SidebarOption Icon={CheckCircleOutline} title="Outbox" number={3} />
      <SidebarOption Icon={Note} title="Drafts" number={1} />
      <SidebarOption Icon={Mail} title="All mail" number={16} />
      <SidebarOption Icon={ErrorOutline} title="Spam" number={1} />
      <SidebarOption Icon={DeleteOutline} title="Trash" number={4} />
      <SidebarOption Icon={ExpandMore} title="More" />

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
