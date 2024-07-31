import { Button  } from '@/lib/materialUI';
import { styled } from '@mui/system';

const StyledButton: any = styled(Button)(({ theme }: any) => ({
  background: '#14203B',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px #898F9D',
  color: '#FFF',
  height: 48,
  padding: '0 30px',
}));

export const MiButton = (props: any) => {
  return (
    <StyledButton { ...props }>{props.children}</StyledButton>
  );
}
