/**
 * MiMenu
 * 
 */
import { Menu, MenuList, MenuItem, Paper  } from '@/lib/materialUI';
import { styled } from '@mui/system';

/**
 * TODO: remember to complete with next step...
 * [Theme]
 */
const StyledMenu: any = styled(Menu)(({ theme }: any) => ({
  background: 'linear-gradient(45deg, #1E8C4D 30%, #53C419 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(30, 140, 77, .3)',
  color: 'linear-gradient(45deg, #1E8C4D 30%, #53C419 90%)',
  height: 48,
  padding: '0 30px',
}));

export const MiMenu = (props: any) => {
  return (
    <StyledMenu { ...props }>{props.children}</StyledMenu>
  );
}

export const MiMenuList = MenuList;
export const MiMenuItem = MenuItem;
export const MiPaper = Paper;