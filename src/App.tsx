import { Container, Stack, Box, Flex ,Text} from '@mantine/core';
import HeaderNav from './components/HeaderNav';
import TopInfoCards from './components/TopInfoCards';

function App() {


  return (
    <Container size="xl" h="100vh" py="md">
      <Flex direction="column" h="100%" gap="md">
        
        
        <HeaderNav />

        <Flex flex={1} gap="xl" justify="center" align="stretch">
       
          <Box w="25%" className="mta-glass">
            <Text p="md" size="xl" fw={900}>IRAN MTA</Text>
          </Box>

          
          <Stack w="50%" gap="md">
            <TopInfoCards />
          
            <Box flex={1} className="mta-glass" p="md">
                
                <Text c="dimmed" size="xs">Account Statistics Section...</Text>
            </Box>
          </Stack>

        
          <Box w="25%" className="mta-glass">
            <Text p="md" size="lg" fw={900}>BATTLE PASS</Text>
          </Box>
        </Flex>

        {/* fotter*/}
        <Box h={40} className="mta-glass" style={{ borderRadius: '4px' }} />
      </Flex>
    </Container>
  )
}

export default App
