import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { contactData } from '../Data/ContactData'

const ContactTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map(contact => {
            return (
              <TableRow key={contact.name}>
                {Object.entries(contact).map(([key, value]) => {
                  if (key === 'skills') {
                    return <TableCell key={contact.id + key}>{(value as string[]).join(', ')}</TableCell>
                  }
                  if (key !== 'id') {
                    return <TableCell key={contact.id + key}>{value}</TableCell>
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
