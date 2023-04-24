import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import {
  darkSKillsItemTextStyle,
  skillItemStyles,
  skillsItemIconStyle,
  skillsItemTextStyle,
} from "./styles";

interface Props {
  name: string;
  icon: string;
}

const SkillsItem: React.FC<Props> = ({ name, icon }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Box sx={skillItemStyles}>
      <img src={icon} style={skillsItemIconStyle} alt={`${name} icon`} />
      <Typography sx={darkMode ? darkSKillsItemTextStyle : skillsItemTextStyle}>
        {name}
      </Typography>
    </Box>
  );
};

export default SkillsItem;
