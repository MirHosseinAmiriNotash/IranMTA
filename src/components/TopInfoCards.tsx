import { Group, Paper, Text, Stack} from '@mantine/core';

export function TopInfoCards() {
  return (
    <Group grow gap="md">
      {/* Home Cart */}
      <Paper className="mta-glass card-with-image" p="md">
        <Stack gap={0} style={{ zIndex: 2, position: 'relative' }}>
          <Text className="label-sm">YOUR HOUSE</Text>
          <Text size="sm" fw={700} c="white">House #2006</Text>
          <Text size="10px" c="dimmed">Vinewood, Los Santos</Text>
        </Stack>
        
      
        <div className="card-graphic-container">
           <div className="glow-effect orange-glow"></div>
           <img src="../../public/home.png" alt="House" className="card-image" />
        </div>
      </Paper>

      {/* Bussines Cart*/}
      <Paper className="mta-glass card-with-image" p="md">
        <Stack gap={0} style={{ zIndex: 2, position: 'relative' }}>
          <Text className="label-sm">YOUR BUSINESS</Text>
          <Text size="sm" fw={700} c="white">No Business</Text>
          <Text size="10px" c="dimmed">Not Available</Text>
        </Stack>

        <div className="card-graphic-container">
           <div className="glow-effect blue-glow"></div>
           <img src="../../public/Business.png" alt="Business" className="card-image" />
        </div>
      </Paper>
    </Group>
  );
}
export default TopInfoCards;