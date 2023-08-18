import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  FormControl,
  FormGroup,
  Paper,
  SelectChangeEvent,
  Stack,
} from '@mui/material'
import { useState } from 'react'
import { FormValues, contactData } from '../Data/ContactData'
import { BeautifulTextField } from './BeautifulTextField'
import BeautifulAutocomplete from './BeautifulAutocomplete'
import BeautifulSelect from './BeautifulSelect'
import BeautifulDesktopDatePicker from './BeautifulDesktopDatePicker'
import BeautifulRadios from './BeautifulRadios'

export const minWidth = 300
export const defaultPreference = 'Work From Home'
const today = new Date()

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

const ContactForm = () => {
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: '',
      role: '',
      skills: ['React'],
      startDate: `${today.getMonth()}/${today.getDate()}/${today.getFullYear}`,
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

  const handleDatePickerChange = (value: string | null | undefined) => {
    console.log(value)
    const startDate = value as unknown as { month: () => string; date: () => string; year: () => string }
    setFormValues({
      ...formValues,
      startDate: `${startDate.month() + 1}/${startDate.date()}/${startDate.year()}`,
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
      <Paper sx={paperInputStyle}>
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: 'space-between' }}>
              <BeautifulTextField value={formValues.name} onChange={handleTextFieldChange} />
              <BeautifulAutocomplete value={formValues.role || ''} onInputChange={handleAutoCompleteChange} />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: 'space-between' }}>
              <BeautifulSelect value={formValues.skills || ''} onChange={handleSelectChange} />
              <BeautifulDesktopDatePicker value={formValues.startDate} onChange={handleDatePickerChange} />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: 'space-between' }}>
              <BeautifulRadios preference={formValues.preference} handleRadioChange={handleRadioChange} />
              <Stack>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={handleClearClick}>Clear</Button>
              </Stack>
            </FormGroup>
          </FormControl>
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
