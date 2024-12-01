import * as React from "react";
import Avatar from "@mui/material/Avatar";
import account from "../Images/acc.webp";

export default function AvatarComponent() {
  return (
    <Avatar
      sx={{
        height: 50,
        width: 50,
      }}
      alt="Remy Sharp"
      src={account}
    />
  );
}
