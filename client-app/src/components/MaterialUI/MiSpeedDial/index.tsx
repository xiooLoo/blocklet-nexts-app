import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@/lib/materialUI';
import { Icon_FileCopy, Icon_SaveAlt, Icon_Share, Icon_Print } from '@/lib/materialIcon';
import { styled } from '@mui/system';

const StyledSpeedDial = styled(SpeedDial)(({ theme }: any) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export interface MiSpeedDialProps {
  hidden?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  sx?: any;
}

const actions = [
  { icon: <Icon_FileCopy />, name: 'Copy' },
  { icon: <Icon_SaveAlt />, name: 'Save' },
  { icon: <Icon_Share />, name: 'Share' },
  { icon: <Icon_Print />, name: 'Print' },
];

export const MiSpeedDial = ({
  hidden = false,
  direction = 'left',
  sx = { position: 'absolute', bottom: 50, right: 50, height: 100 }
}: MiSpeedDialProps) => {
  return (
    <Box sx={sx}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
  );
}
