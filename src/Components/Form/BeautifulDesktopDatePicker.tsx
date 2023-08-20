import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { minWidth } from './ContactForm'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
// import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { Dayjs } from 'dayjs'

const popperSX = {
  // color: 'yellow'
  '& .MuiPaper-root': {
    color: 'yellow',
  },
  '& [role=grid]': {
    backgroundColor: 'green',
    '& button': {
      backgroundColor: 'red',
    },
  },
}
const BeautifulDesktopDatePicker = (props: { value: Dayjs | null; onChange: (value: Dayjs | undefined) => void }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ja'>
      <DesktopDatePicker
        {...props}
        label='Date'
        format='MM/DD/YYYY'
        views={['day']}
        slotProps={{
          textField: {
            variant: 'outlined',
            sx: {
              '& .MuiSvgIcon-root': { color: 'primary.main' },
              minWidth: minWidth,
            },
          },
          popper: {
            sx: popperSX,
          },
        }}
        slots={{
          openPickerIcon: CalendarTodayIcon,
        }}
      />
    </LocalizationProvider>
  )
}

export default BeautifulDesktopDatePicker
