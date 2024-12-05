import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Acc from "../Images/acc.webp";
import avatar2 from "../Images/avatar2.webp";
import avatar3 from "../Images/avatar3.webp";
import avatar4 from "../Images/avatar4.webp";
import avatar5 from "../Images/avatar5.webp";
import avatar6 from "../Images/avatar6.webp";
import avatar7 from "../Images/avatar7.webp";
import avatar8 from "../Images/avatar8.webp";
import avatar9 from "../Images/avatar9.webp";
import avatar10 from "../Images/avatar10.webp";
import { useTheme } from "@emotion/react";

export default function Third_Row_Avatar({ secondAvatar }) {
  const theme = useTheme();
  return (
    <>
      {secondAvatar ? (
        <AvatarGroup>
          <Avatar
            alt="Remy Sharp"
            src={avatar6}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
          <Avatar
            alt="Travis Howard"
            src={avatar7}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
          <Avatar
            alt="Cindy Baker"
            src={avatar8}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
          <Avatar
            alt="Agnes Walker"
            src={avatar9}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
          <Avatar
            alt="Trevor Henderson"
            src={avatar10}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
        </AvatarGroup>
      ) : (
        <AvatarGroup>
          <Avatar
            alt="Remy Sharp"
            src={Acc}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
          <Avatar
            alt="Travis Howard"
            src={avatar2}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
          <Avatar
            alt="Cindy Baker"
            src={avatar3}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
          <Avatar
            alt="Agnes Walker"
            src={avatar4}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
          <Avatar
            alt="Trevor Henderson"
            src={avatar5}
            sx={{
              width: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
              height: {
                mobile: "44px",
                laptop: "56px",
                desktop: "44px",
              },
            }} // Large size
          />
        </AvatarGroup>
      )}
    </>
  );
}
