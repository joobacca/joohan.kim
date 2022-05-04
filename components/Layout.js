import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);

  const router = useRouter();

  return (
    <>
      <Box position="relative" sx={{ height: '100%' }}>
        <IconButton aria-label="menu" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Container maxWidth="md" sx={{ height: '100%' }}>
          {children}
        </Container>
      </Box>
      <Drawer anchor="left" open={open} onClose={closeDrawer}>
        <Box width={250} onClick={closeDrawer}>
          <List>
            <ListItem onClick={() => router.push('/')} button key="home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              onClick={() => router.push('/projects')}
              button
              key="projects"
            >
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Layout;
