import { InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { minWidth } from './ContactForm'

const skills = ['React', 'Angular', 'Python', 'NodeJS', 'Machine Learning']

const BeautifulSelect = (props: {
  value: string[] | string
  onChange: (event: SelectChangeEvent<string[]>, child: React.ReactNode) => void
}) => {
  return (
    <>
      <InputLabel id='skill-select-label'>Skills</InputLabel>
      <Select
        {...props}
        labelId='skill-select-label'
        id='skill-select'
        renderValue={(select: string[]) => select.join(', ')}
        label='SKILLS'
        // input={<OutlinedInput label='SK' />}
        sx={{ minWidth: minWidth, marginRight: 2 }}
      >
        {skills.map(skillName => {
          return (
            <MenuItem value={skillName} key={skillName}>
              <ListItemText primary={skillName} />
              {/* {skillName} */}
            </MenuItem>
          )
        })}
      </Select>
    </>
  )
}

export default BeautifulSelect
