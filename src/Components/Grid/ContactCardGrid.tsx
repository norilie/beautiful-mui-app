import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  List,
  ListSubheader,
  Typography,
} from '@mui/material'
import { contactData } from '../Data/ContactData'
import { useState } from 'react'

const ContactCardGrid = () => {
  const [open, setOpen] = useState(true)
  return (
    // <Box m={1} display='flex' flexDirection='row' justifyContent='center' alignItems='flex-end'>
    <Box m={1}>
      <Button sx={{ marginBottom: 3 }} variant='contained' onClick={() => setOpen(!open)}>
        Collapse
      </Button>
      <Grid container spacing={2} sx={{ width: 700 }}>
        {contactData.map(contact => {
          return (
            <Grid item key={contact.name}>
              <Card sx={{ width: 300 }}>
                <CardHeader
                  title={contact.name}
                  subheader={contact.role}
                  avatar={<Avatar>{contact.name?.substring(0, 1).toUpperCase() || 'A'}</Avatar>}
                />
                <Collapse
                  in={open}
                  // timeout={2000}
                  // orientation='horizontal'
                >
                  <CardContent>
                    <Typography>
                      <b>Start Date: </b>
                      {contact.startDate}
                    </Typography>
                    <Typography>
                      <b>Work Preference: </b>
                      {contact.preference}
                    </Typography>
                    <List
                      sx={{ listStyle: 'list-item', listStyleType: 'circle', paddingLeft: 2 }}
                      subheader={
                        <ListSubheader
                          sx={{ right: 16, position: 'inherit', fontSize: '1.25rem', color: 'black', paddingLeft: 0 }}
                        >
                          Skills:
                        </ListSubheader>
                      }
                    >
                      {contact.skills.map(skill => {
                        return (
                          <li key={skill} style={{ paddingBottom: '2px' }}>
                            {skill}
                          </li>
                        )
                      })}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ContactCardGrid
