import { Group } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Typography,
  CircularProgress,
  MenuList, // 1. Імпортуємо MenuList
} from "@mui/material";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";
import { useAccount } from "../../lib/hooks/useAccount";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { uiStore } = useStore();
  const { currentUser } = useAccount();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <MenuList sx={{ display: "flex", p: 0 }}>
              <MenuItemLink to={"/"}>
                <Group fontSize="large" sx={{ mr: 1 }} />
                <Typography
                  sx={{ position: "relative", fontWeight: "bold" }}
                  variant="h4"
                >
                  Reactivities
                </Typography>
                <Observer>
                  {() =>
                    uiStore.isLoading ? (
                      <CircularProgress
                        size={20}
                        thickness={7}
                        sx={{
                          color: "white",
                          position: "absolute",
                          top: "30%",
                          left: "105%",
                        }}
                      />
                    ) : null
                  }
                </Observer>
              </MenuItemLink>
            </MenuList>

            <MenuList sx={{ display: "flex", p: 0 }}>
              <MenuItemLink to={"/activities"}>Activities</MenuItemLink>
              <MenuItemLink to="/counter">Counter</MenuItemLink>
              <MenuItemLink to="/errors">Errors</MenuItemLink>
            </MenuList>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {currentUser ? (
                <UserMenu />
              ) : (
                <MenuList sx={{ display: "flex", p: 0 }}>
                  <MenuItemLink to="/login">Login</MenuItemLink>
                  <MenuItemLink to="/register">Register</MenuItemLink>
                </MenuList>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
