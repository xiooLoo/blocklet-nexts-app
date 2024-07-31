"use client"

import { MiSpeedDial } from "@/components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled as coreStyled } from "@mui/system";
import './index.scss';

interface IProps {
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
  className?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B364E',
    },
    secondary: {
      main: '#53C419',
    },
    error: {
      main: '#C41D23',
    },
    warning: {
      main: '#FF5923',
    },
    info: {
      main: '#017EC6',
    },
    background: {
      default: 'linear-gradient(45deg, #1E8C4D 30%, #53C419 90%)',
    },
  },
});

export const RootLayout = (props: IProps) => {

  return (
    <ThemeProvider theme={theme}>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-between items-center">
        <MiSpeedDial></MiSpeedDial>
        <Box className='w-full z-[-1]'>{!props.children ? '❓' : props.children}</Box>
      </div>
    </ThemeProvider>
  );
};

const Box = coreStyled('div')({
  backgroundColor: '#f0f0f0',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  fontWeight: '600',
  color: theme.palette.primary.main
})

// const Box = styled.div`
//   background-color: #f0f0f0;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 24px;
//   font-weight: 600;
//   color: #2e78ff;
// `;

export default RootLayout;