import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EmergencyShareIcon from "@mui/icons-material/EmergencyShare";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export function Sidebar() {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {[
          { name: "Data", icon: FolderSharedIcon },
          { name: "Product", icon: Inventory2Icon },
          { name: "Roles and access", icon: VpnKeyIcon },
          { name: "Areas", icon: EmergencyShareIcon },
          { name: "Help", icon: HelpCenterIcon },
        ].map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{ name: "User", icon: AccountBoxIcon }].map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      open
      variant="persistent"
      anchor="left"
    >
      {DrawerList}
    </Drawer>
  );
}
