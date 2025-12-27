import { Box, Stack, Text } from '@mantine/core';
import classes from '../styles/LeftPanel.module.css';

export function LeftPanel() {
  return (
    <Box className={classes.leftPanelContainer}>
      <Box className={classes.characterCard}>
        
    
        <Box className={classes.contentOverlay}>
          <Stack gap={0}>
            <Text 
              size="xs" 
              fw={800} 
              c="var(--mta-orange)" 
              className={classes.textShadow}
              style={{ letterSpacing: '2px' }}
            >
              WELCOME TO IRAN MTA
            </Text>
            
            <Text 
              size="32px" 
              fw={900} 
              c="white" 
              className={classes.textShadow}
              style={{ lineHeight: 1.1, marginTop: '5px' }}
            >
              HUSSEIN<span style={{ color: 'var(--mta-orange)' }}>_</span>STR
            </Text>
          </Stack>
        </Box>

        <Box 
          style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            height: '100px', 
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            pointerEvents: 'none'
          }} 
        />
      </Box>
    </Box>
  );
}