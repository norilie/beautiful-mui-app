import { FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import { defaultPreference, minWidth } from './ContactForm'

const BeautifulRadios = (props: {
  preference: string | undefined
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
}) => {
  return (
    <FormControl>
      <FormGroup sx={{ minWidth: minWidth, marginRight: { md: 2 }, marginBottom: { xs: 2, md: 0 } }}>
        <FormLabel component='legend' htmlFor='preference-type-radio'>
          Work Preference
        </FormLabel>
        <RadioGroup
          id='preference-type-radio'
          name='preference'
          value={props.preference}
          onChange={props.handleRadioChange}
        >
          <FormControlLabel control={<Radio />} label={defaultPreference} value={defaultPreference} />
          <FormControlLabel control={<Radio />} label='Hybrid' value='Hybrid' />
          <FormControlLabel control={<Radio />} label='In Office' value='In Office' />
        </RadioGroup>
        <FormHelperText>WFH!</FormHelperText>
      </FormGroup>
    </FormControl>
  )
}

export default BeautifulRadios
