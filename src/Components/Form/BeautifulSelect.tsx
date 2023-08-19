import { InputLabel, Select, SelectChangeEvent } from '@mui/material'

import { minWidth } from './ContactForm'
import { ReactNode, useEffect, useRef, useState } from 'react'

const BeautifulSelect = (props: {
  value: string[] | string
  onChange: (event: SelectChangeEvent<string[]>, child: ReactNode) => void
  children: ReactNode[]
}) => {
  const selectInputComponent = useRef<HTMLInputElement>(null)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    setPosition(selectInputComponent.current ? selectInputComponent.current.getBoundingClientRect().left + 20 : 0)
    console.log('Effect:', selectInputComponent)
  }, [selectInputComponent])
  return (
    <>
      {/* <InputLabel id='skill-select-label'>Skills</InputLabel> */}
      <Select
        ref={selectInputComponent}
        {...props}
        // labelId='skill-select-label'
        // id='skill-select'
        renderValue={(select: string[]) => select.join(', ')}
        // label='SKILLS'
        multiple
        sx={{ minWidth: minWidth, marginRight: 2 }}
        MenuProps={{
          PaperProps: {
            sx: {
              left: `${position}px !important`,
              maxHeight: 180,
            },
          },
        }}
      >
        {props.children}
      </Select>
    </>
  )
}

export default BeautifulSelect
