import { AppBar, Drawer, List, ListItem, Toolbar, Typography } from '@mui/material'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ContactForm from '../Form/ContactForm'
import ContactCardGrid from '../Grid/ContactCardGrid'
import ContactTable from '../Table/ContactTable'
import ContactDataGrid from '../DataGrid/ContactDataGrid'

import { useTheme, Theme, ThemeProvider } from '@mui/material/styles'
import { BeautifulTheme } from '../../Theme/BeautifulTheme'

const drawerWidth = 240

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      padding: '15px',
    },
  }
}
const simpleStyles = {
  drawer: {
    width: drawerWidth,
    '& .MuiBackdrop-root': {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(120,120,120, 0.2)',
  },
  content: {
    marginLeft: drawerWidth,
    padding: 3,
    maxWidth: 720,
  },
}

const NaviDrawer = () => {
  const theme = useTheme()
  return (
    <BrowserRouter>
      <div>
        <AppBar position='fixed' sx={themedStyles(theme).appBar}>
          <Typography variant='h6' noWrap>
            Advanced Material UI Styling
          </Typography>
        </AppBar>
        <Drawer
          disableEnforceFocus //bug?
          variant='temporary'
          open={true}
          sx={simpleStyles.drawer}
          PaperProps={{
            sx: simpleStyles.drawerPaper,
            elevation: 9,
          }}
        >
          <Toolbar />
          <List>
            {[
              { text: 'input Form', route: '/form' },
              { text: 'Contact Card Grid', route: '/grid' },
              { text: 'Contact Table', route: '/table' },
              { text: 'Contact Data Grid', route: '/datagrid' },
            ].map((nav, index) => (
              <ListItem key={nav.text}>
                <Link to={nav.route}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main style={simpleStyles.content}>
          <Toolbar />
          <ThemeProvider theme={BeautifulTheme}>
            <Routes>
              <Route path={'/'} element={<ContactForm />} />
              <Route path={'/form'} element={<ContactForm />} />
              <Route path={'/grid'} element={<ContactCardGrid />} />
              <Route path={'/table'} element={<ContactTable />} />
              <Route path={'/datagrid'} element={<ContactDataGrid />} />
            </Routes>
          </ThemeProvider>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default NaviDrawer
