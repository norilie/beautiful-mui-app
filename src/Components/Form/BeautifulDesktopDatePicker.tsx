import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { minWidth } from './ContactForm'
// import dayjs from 'dayjs'
import 'dayjs/locale/ja'

const BeautifulDesktopDatePicker = (props: {
  value: string | undefined
  onChange: (value: string | null | undefined) => void
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ja'>
      <DesktopDatePicker
        {...props}
        label='Date'
        format='MM/DD/YYYY'
        slotProps={{ textField: { variant: 'outlined' } }}
        sx={{ minWidth: minWidth }}
      />
    </LocalizationProvider>
  )
}

export default BeautifulDesktopDatePicker
