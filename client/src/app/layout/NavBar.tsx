import { Group } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Typography,
  Button,
} from "@mui/material";

type Props = {
  openForm: () => void;
};

export default function NavBar({ openForm }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                <Group fontSize="large" />
                Reactivities
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "inherit",
                }}
              >
                Activities
              </Button>
              <Button
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "inherit",
                }}
              >
                About
              </Button>
              <Button
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "inherit",
                }}
              >
                Contacts
              </Button>
            </Box>
            <Button
              size="large"
              variant="contained"
              color="warning"
              onClick={openForm}
            >
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
