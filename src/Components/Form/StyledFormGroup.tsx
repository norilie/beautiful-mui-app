import { FormGroup, styled } from '@mui/material'

type StyledFormGroupProps = {
  paddingtop?: number
}

export const StyledFormGroup = styled(FormGroup, {
  name: 'StyledFormGroup',
  slot: 'wrapper',
  skipSx: true,
})<StyledFormGroupProps>(props => ({
  padding: props.theme.spacing(2),
  paddingTop: props.paddingtop,
  justifyContent: 'space-between',
}))
