import { Modal, Button, SimpleGrid, Group, Text, ThemeIcon, Badge, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  IconId, IconCarFilled, IconMotorbike, IconPlane, 
  IconShip, IconTarget, IconHammer, IconCheck, IconX 
} from '@tabler/icons-react';
import classes from '../styles/LicenseModal.module.css';

const LICENSES = [
  { label: 'DRIVING', hours: 317, active: true, icon: <IconCarFilled size={20} /> },
  { label: 'RIDING', hours: 260, active: true, icon: <IconMotorbike size={20} /> },
  { label: 'PILOTING', hours: 0, active: false, icon: <IconPlane size={20} /> },
  { label: 'SAILING', hours: 0, active: false, icon: <IconShip size={20} /> },
  { label: 'WEAPON', hours: 217, active: true, icon: <IconTarget size={20} /> },
  { label: 'CRAFTING', hours: 40, active: true, icon: <IconHammer size={20} /> },
];

export function LicenseModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button 
        onClick={open} 
        leftSection={<IconId size={18} />}
        className={classes.triggerButton}
        fullWidth 
      >
        VIEW LICENSES 
      </Button>

      <Modal 
        opened={opened} 
        onClose={close} 
        title={<Text fw={900} tt="uppercase" c="white">Official Documents</Text>}
        centered
        size="lg"
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
        classNames={{
          header: classes.modalHeader,
          body: classes.modalBody,
          content: classes.modalContent
        }}
      >
        <SimpleGrid cols={2} spacing="md">
          {LICENSES.map((item) => (
            <Box 
              key={item.label} 
              className={`${classes.licenseBox} ${item.active ? classes.activeBox : classes.inactiveBox}`}
            >
              <Group justify="space-between">
                <Group>
                  <ThemeIcon 
                    variant={item.active ? "light" : "outline"} 
                    color={item.active ? "orange" : "gray"}
                    size="lg"
                  >
                    {item.icon}
                  </ThemeIcon>
                  <Box>
                    <Text size="sm" fw={700} c={item.active ? "white" : "dimmed"}>{item.label}</Text>
                    <Text size="xs" c="dimmed">{item.hours} Hours Played</Text>
                  </Box>
                </Group>
                
                <Badge 
                  color={item.active ? "green" : "red"} 
                  variant="light" 
                  size="sm"
                  leftSection={item.active ? <IconCheck size={10}/> : <IconX size={10}/>}
                >
                  {item.active ? "VALID" : "N/A"}
                </Badge>
              </Group>
            </Box>
          ))}
        </SimpleGrid>

        <Group justify="flex-end" mt="xl">
            <Button variant="subtle" color="gray" onClick={close}>Close</Button>
        </Group>
      </Modal>
    </>
  );
}
export default LicenseModal;