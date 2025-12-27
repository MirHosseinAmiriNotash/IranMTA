import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import classes from "./styles/ControlButtons.module.css";
import {
  Container,
  Stack,
  Box,
  Flex,
  Text,
  UnstyledButton,
} from "@mantine/core";
import HeaderNav from "./components/HeaderNav";
import TopInfoCards from "./components/TopInfoCards";
import { AccountStats } from "./components/AccountStats";
import { LevelBar } from "./components/LevelBar";
import { RightPanel } from "./components/RightPanel";
import { LeftPanel } from "./components/LeftPanel";
function App() {
  return (
    <Container
      size="xl"
      h="100vh"
      py="md"
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto", 
        overflowX: "hidden",
      }}
    >
      <Flex direction="column" h="100%" gap="md">
        <Box className={classes.topControlsWrapper}>
          <Box className={classes.controlGroup}>
            <UnstyledButton
              className={classes.keyBtn}
              onClick={() => console.log("Prev Tab")}
            >
              <Text className={classes.keyIcon}>Q</Text>
              <IconChevronLeft size={14} color="#aaa" />
            </UnstyledButton>

            <UnstyledButton
              className={classes.keyBtn}
              onClick={() => console.log("Next Tab")}
            >
              <IconChevronRight size={14} color="#aaa" />
              <Text className={classes.keyIcon}>E</Text>
            </UnstyledButton>
          </Box>

          <Box className={classes.controlGroup}>
            <UnstyledButton
              className={classes.keyBtn}
              onClick={() => alert("Help Menu")}
            >
              <Text className={classes.keyIcon}>F1</Text>
              <Text className={classes.keyText}>HELP</Text>
            </UnstyledButton>

            <UnstyledButton
              className={`${classes.keyBtn} ${classes.closeBtn}`}
              onClick={() => console.log("Closing UI...")}
            >
              <Text className={classes.keyText}>CLOSE</Text>
              <IconX size={16} color="#e74c3c" />
            </UnstyledButton>
          </Box>
        </Box>
        <HeaderNav />

        <Flex
          flex={1}
          gap={{ base: "md", xl: "xl" }}
          direction={{ base: "column", lg: "row" }}
          justify="center"
          align="stretch"
        >
          <Box style={{ flex: 1, minWidth: "250px" }}>
            <LeftPanel />
          </Box>

          <Stack style={{ flex: 2, minWidth: "400px" }} gap="md">
            <TopInfoCards />
            <AccountStats />
          </Stack>

          <Box style={{ flex: 1, minWidth: "250px" }}>
            <RightPanel />
          </Box>
        </Flex>

        <Box mt="auto">
          <LevelBar />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
