import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  FormGroup,
  ListItemText,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Stack,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { FormValues, contactData } from '../Data/ContactData'
import { BeautifulTextField } from './BeautifulTextField'
import BeautifulAutocomplete from './BeautifulAutocomplete'
import BeautifulSelect from './BeautifulSelect'
import BeautifulDesktopDatePicker from './BeautifulDesktopDatePicker'
import BeautifulRadios from './BeautifulRadios'
import dayjs, { Dayjs } from 'dayjs'
import { StyledFormGroup } from './StyledFormGroup'

export const minWidth = 300
export const defaultPreference = 'Work From Home'
const skills = ['React', 'Angular', 'Python', 'NodeJS', 'Machine Learning']

// const today = new Date()

const paperInputStyle = {
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { border: '1px solid', borderColor: 'primary.main' },
    '&:hover': {
      '& > fieldset': { borderColor: 'primary.light' },
    },
  },
  '& .MuiFormLabel-root': {
    color: 'primary.dark',
  },
}
const now: Dayjs = dayjs()
const today: string = `${now.month() + 1}/${now.date()}/${now.year()}`

const ContactForm = () => {
  const theme = useTheme()
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: '',
      role: '',
      skills: ['React'],
      startDate: today,
      preference: defaultPreference,
    }
  }
  const [formValues, setFormValues] = useState<FormValues>(getDefaultFormValues())

  const handleSelectChange = (event: SelectChangeEvent<string[]>, child: React.ReactNode) => {
    const {
      target: { value },
    } = event
    setFormValues({
      ...formValues,
      skills: typeof value === 'string' ? value.split(', ') : value,
    })
  }

  const [alertOpen, setAlertOpen] = useState(false)

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleAutoCompleteChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
    setFormValues({
      ...formValues,
      role: value || '',
    })
  }

  const handleDatePickerChange = (value: Dayjs | undefined) => {
    // console.log(value.toDate())
    // const startDate = value as unknown as { month: () => string; date: () => string; year: () => string }
    setFormValues({
      ...formValues,
      startDate: `${value.month() + 1}/${value.date()}/${value.year()}`,
    })
  }
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const { name } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    contactData.push(formValues)
    setAlertOpen(true)
    clearValues()
  }

  const handleClearClick = () => {
    clearValues()
  }

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() })
    console.log(formValues)
  }

  const handleAlertClick = () => {
    setAlertOpen(false)
  }

  return (
    <>
      {/* <Paper sx={paperInputStyle}></Paper> */}
      <Paper
        sx={{
          ...paperInputStyle,
          margin: { xs: 1, sm: 2 },
          zIndex: theme.zIndex.appBar + 1,
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' },
          backgroundColor: 'grid.dark',
          // '& button.MuiButton-text': { backgroundColor: 'primary.light' },
        }}
      >
        <form>
          <StyledFormGroup row sx={{ backgroundColor: 'black' }} paddingtop={10}>
            <BeautifulTextField value={formValues.name} onChange={handleTextFieldChange} />
            <BeautifulAutocomplete value={formValues.role || ''} onInputChange={handleAutoCompleteChange} />
          </StyledFormGroup>
          <StyledFormGroup row>
            <BeautifulSelect value={formValues.skills || ''} onChange={handleSelectChange}>
              {skills.map(skillName => {
                return (
                  <MenuItem value={skillName} key={skillName}>
                    <Checkbox checked={formValues.skills?.includes(skillName)} />
                    <ListItemText primary={skillName} />
                  </MenuItem>
                )
              })}
            </BeautifulSelect>
            <BeautifulDesktopDatePicker value={dayjs(formValues.startDate)} onChange={handleDatePickerChange} />
          </StyledFormGroup>
          <StyledFormGroup row>
            <BeautifulRadios preference={formValues.preference} handleRadioChange={handleRadioChange} />
            <Stack justifyContent='space-around' alignItems='center' sx={{ minWidth: minWidth }}>
              <Button variant='contained' sx={{ height: 56, width: 100 }} onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant='beautiful' sx={{ height: 56, width: 100 }} onClick={handleClearClick}>
                Clear
              </Button>
            </Stack>
          </StyledFormGroup>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClick}>
        <Alert onClose={handleAlertClick}>
          <AlertTitle>Success!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  )
}

export default ContactForm
