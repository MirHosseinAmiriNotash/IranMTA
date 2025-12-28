import { Box, Stack, Text, Group, Image } from "@mantine/core";
import {
  IconShoppingCart,
  IconClockHour4,
  IconTrophy,
} from "@tabler/icons-react";
import classes from "../styles/RightPanel.module.css";
const baseUrl = import.meta.env.BASE_URL;
export function RightPanel() {
  return (
    <Box className={classes.rightPanelContainer}>
      <Box className={classes.battlePassCard}>
        <Box className={classes.contentOverlay}>
          <Group justify="space-between" align="flex-start">
            <Stack gap={0}>
              <Text className={classes.bpTitle}>
                BATTLE
                <br />
                PASS
              </Text>
              <Group gap={5} mt={4}>
                <IconTrophy size={14} color="var(--mta-orange)" />
                <Text size="xs" fw={800} c="dimmed">
                  SEASON 5
                </Text>
              </Group>
            </Stack>

            <Box className={classes.seasonTimer}>
              <IconClockHour4 size={14} color="var(--mta-orange)" />
              <Text size="10px" fw={800} c="white">
                14 DAYS LEFT
              </Text>
            </Box>
          </Group>
        </Box>

        <Box className={classes.imageContainer}>
          <Image
            src={`${baseUrl}battlepass.png`}
            className={classes.bpImage}
          />
        </Box>

        <Box className={classes.contentOverlay}>
          <Stack gap={5}>
            <Group justify="space-between">
              <Text size="xs" fw={900} c="white">
                LVL 12
              </Text>
              <Text size="10px" fw={700} c="white">
                380/500 XP
              </Text>
            </Group>
            <Box
              h={8}
              bg="rgba(0,0,0,0.5)"
              style={{
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Box
                h="100%"
                style={{
                  width: "76%",
                  background: "linear-gradient(90deg, #ff9d00, #ffcc00)",
                  boxShadow: "0 0 10px rgba(255, 157, 0, 0.5)",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>

      <Stack gap="xs">
        <Box className={classes.shopButton}>
          <IconShoppingCart size={20} color="var(--mta-orange)" />
          <Text className={classes.shopText}>SERVER SHOP</Text>
        </Box>
      </Stack>
    </Box>
  );
}
