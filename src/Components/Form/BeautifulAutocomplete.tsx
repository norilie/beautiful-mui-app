import { Autocomplete, TextField } from '@mui/material'
import { minWidth } from './ContactForm'

const roles = ['Software Dev', 'Architect', 'Designer', 'Business Analyst']

export const BeautifulAutocomplete = (props: {
  value: string
  onInputChange: (event: React.SyntheticEvent<Element, Event>, value: string) => void
}) => {
  return (
    <Autocomplete
      {...props}
      options={roles}
      sx={{ minWidth: minWidth }}
      renderInput={params => {
        return <TextField name='role' {...params} />
      }}
      getOptionLabel={roleOption => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>
      }}
      isOptionEqualToValue={(option, value) => option === value || value === ''}
    />
  )
}
export default BeautifulAutocomplete
