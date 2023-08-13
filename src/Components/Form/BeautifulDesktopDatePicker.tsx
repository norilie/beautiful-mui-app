import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { minWidth } from './ContactForm'

const BeautifulDesktopDatePicker = (props: {
  value: string | undefined
  onChange: (value: string | null | undefined) => void
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label='Date'
        format='MM/DD/YYYY'
        slotProps={{ textField: { variant: 'outlined' } }}
        sx={{ minWidth: minWidth }}
      />
    </LocalizationProvider>
  )
}

export default BeautifulDesktopDatePicker
