import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { contactData } from '../Data/ContactData'
import { useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'

const columns = (theme: Theme) => [
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<any, string>) => {
      // debugger
      return cellValues.value
    },
  },
  {
    field: 'role',
    headerName: 'Role',
    minWidth: 100,
    renderCell: (cellValues: GridRenderCellParams<any, string>) => {
      return cellValues.value
    },
  },
  {
    field: 'skills',
    headerName: 'Skills',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<any, string>) => {
      return <div style={{ color: theme.palette.primary.main }}>{cellValues.value ? cellValues.value[0] : ''}</div>
    },
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    minWidth: 120,
    renderCell: (cellValues: GridRenderCellParams<any, string>) => {
      return cellValues.value
    },
  },
  {
    field: 'preference',
    headerName: 'workPreference',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<any, string>) => {
      return cellValues.value
    },
  },
]

const ContactDataGrid = () => {
  const rows = () => [...contactData]
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  })
  const theme = useTheme()
  return (
    <DataGrid
      autoHeight
      rows={rows()}
      columns={columns(theme)}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      pageSizeOptions={[5, 10, 25]}
      columnHeaderHeight={120}
    />
  )
}

export default ContactDataGrid
