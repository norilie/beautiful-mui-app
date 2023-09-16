import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { contactData } from '../Data/ContactData'

const borderColor = {
  borderBottomColor: 'primary.main',
}

const ContactTable = () => {
  return (
    <TableContainer sx={{ borderRadius: 1, boxShadow: 4, margin: 1, width: 'calc(100%-16px)' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'grid.main' }}>
            <TableCell sx={{ ...borderColor, width: '30%' }}>Name</TableCell>
            <TableCell sx={{ ...borderColor, width: '17%' }}>Role</TableCell>
            <TableCell sx={{ ...borderColor, width: '17%' }}>Skills</TableCell>
            <TableCell sx={{ ...borderColor, width: '17%' }}>Start Date</TableCell>
            <TableCell sx={{ ...borderColor, width: '19%' }}>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map(contact => {
            return (
              <TableRow key={contact.name}>
                {Object.entries(contact).map(([key, value]) => {
                  if (key === 'skills') {
                    return (
                      <TableCell key={contact.id + key} sx={{ ...borderColor }}>
                        {(value as string[]).join(', ')}
                      </TableCell>
                    )
                  }
                  if (key === 'name') {
                    return (
                      <TableCell
                        key={contact.id + key}
                        sx={{ ...borderColor, backgroundColor: 'primary.light' }}
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                          // debugger
                          // console.log((event.target as HTMLElement).innerText)
                          console.log((event.target as Element).innerHTML)
                        }}
                      >
                        {value}
                      </TableCell>
                    )
                  }
                  if (key !== 'id') {
                    return (
                      <TableCell key={contact.id + key} sx={{ ...borderColor }}>
                        {value}
                      </TableCell>
                    )
                  }
                  return null
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ContactTable
