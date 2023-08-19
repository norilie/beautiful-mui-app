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
        return (
          <TextField
            name='role'
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused': {
                color: 'primary.dark',
              },
            }}
            {...params}
          />
        )
      }}
      getOptionLabel={roleOption => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>
      }}
      ListboxProps={{
        sx: {
          height: 100,
          color: 'yellow',
          '& li.MuiAutocomplete-option:nth-of-type(odd)': { backgroundColor: 'darkgreen' },
          '& li.MuiAutocomplete-option:nth-of-type(even)': { backgroundColor: 'green' },
          '& li.MuiAutocomplete-option:hover)': { backgroundColor: 'gold' },
          '& li.MuiAutocomplete-option[aria-selected="true"].Mui-focused': { backgroundColor: 'gold' },
        },
      }}
      isOptionEqualToValue={(option, value) => option === value || value === ''}
      freeSolo
      onChange={() => {
        // debugger
      }}
    />
  )
}
export default BeautifulAutocomplete
