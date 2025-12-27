import { SimpleGrid, Box, Text, Stack, Group, TextInput, Button } from '@mantine/core';
import { IconGift } from '@tabler/icons-react';
import { LicenseModal } from './LicenseModal';
import classes from '../styles/AccountStats.module.css';

const StatItem = ({ label, value, color = "white" }: { label: string, value: string, color?: string }) => (
  <Stack className={classes.statItemStack}>
    <Text className={classes.statLabel}>{label}</Text>
    <Text className={classes.statValue} c={color}>{value}</Text>
  </Stack>
);

export function AccountStats() {
  return (
    <Box className={classes.statsContainer}>
      <SimpleGrid cols={4} spacing="lg" verticalSpacing="xl">
        <Stack gap="xl">
          <StatItem label="NAME" value="Hussein" />
          <StatItem label="WARNS" value="0/3" />
          <StatItem label="TOTAL PLAYED" value="4410 Hours" />
        </Stack>

        <Stack gap="xl">
          <StatItem label="EMAIL" value="m***9@gmail.com" />
          <StatItem label="LAST LOGIN" value="2025-12-23" />
          <StatItem label="BANK BALANCE" value="$3,254,669" color="#40c057" />
        </Stack>

        <Stack gap="xl">
          <StatItem label="INGAME NUMBER" value="187-0501" />
          <StatItem label="REGISTER DATE" value="17/10/2019" />
          <StatItem label="FACTION" value="Mechanic" color="#40c057" />
        </Stack>

        <Stack gap="xl">
          <StatItem label="REFERRAL" value="9044" />
          <StatItem label="TOKEN" value="120" color="var(--mta-orange)" />
          <StatItem label="JOB" value="None" />
        </Stack>
      </SimpleGrid>

      <Box className={classes.divider} />

      <Group align="flex-end" justify="space-between">
        <Box style={{ flex: 1, maxWidth: '55%' }}>
          <Text className={classes.statLabel} mb={4}>CODE GOLD / TOKEN</Text>
          <Group gap={5}>
            <TextInput 
              placeholder="Enter Code..." 
              leftSection={<IconGift size={14} />}
              classNames={{ input: classes.giftInput }}
              style={{ flex: 1 }}
            />
            <Button className={classes.enterButton}>ENTER</Button>
          </Group>
        </Box>

        <Box w={200}>
            <LicenseModal />
        </Box>
      </Group>
    </Box>
  );
}

export default AccountStats;