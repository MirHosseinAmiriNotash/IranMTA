import { Box, Text, Progress } from '@mantine/core';
import classes from '../styles/LevelBar.module.css';

export function LevelBar() {
  const currentXP = 450;
  const nextLevelXP = 1000;
  const progressPercent = (currentXP / nextLevelXP) * 100;

  return (
    <Box className={classes.levelContainer}>
      <Box className={classes.levelCircle}>
        <Text className={classes.levelLabel}>LVL</Text>
        <Text className={classes.levelNumber}>24</Text>
      </Box>

    
      <Box className={classes.progressWrapper}>
        <Box className={classes.xpText}>
          <Text className={classes.xpLabel}>PROGRESSION</Text>
          <Text className={classes.xpValue}>{currentXP} / {nextLevelXP} XP</Text>
        </Box>
        
        <Progress 
          value={progressPercent} 
          size="xl" 
          radius="xl" 
          color="#be4bdb"
          styles={{
            root: { backgroundColor: 'rgba(255, 255, 255, 0.05)' },
            section: { 
              boxShadow: '0 0 15px rgba(190, 75, 219, 0.6)',
              backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)' ,
              backgroundSize: '20px 20px'
            }
          }}
        />
      </Box>

    
      <Box style={{ textAlign: 'right', minWidth: '80px' }}>
        <Text size="9px" fw={800} c="dimmed">NEXT REWARD</Text>
        <Text size="xs" fw={700} c="white">500 Gold</Text>
      </Box>
    </Box>
  );
}

export default LevelBar;