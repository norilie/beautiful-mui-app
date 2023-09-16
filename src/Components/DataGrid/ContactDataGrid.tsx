import {
  DataGrid,
  GridRenderCellParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid'
import { contactData } from '../Data/ContactData'
import { useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import { Box, Button } from '@mui/material'

const handlePrintClick = (celValues: GridRenderCellParams) => {
  console.log(celValues)
}

const datagridSX = {
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: 'primary.main',
    fontWeight: 'bold',
    fontSize: 20,
  },
  '& .MuiDataGrid-virtualScrollerRenderZone': {
    '& .MuiDataGrid-row': {
      '&:nth-of-type(2n)': {
        backgroundColor: 'grid.main',
      },
    },
  },
}

const CustomToolbar = () => {
  return (
    <GridToolbarContainer
      sx={{
        justifyContent: 'flex-end',
        '& button': { border: 'none' },
        '& .MuiBox-root': { display: 'none' },
      }}
    >
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

const columns = (theme: Theme) => [
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<any, string>) => {
      // debugger
      return (
        <Box
          sx={{
            color: 'primary.main',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          {cellValues.value}
        </Box>
      )
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
    minWidth: 100,
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
  {
    field: 'Print',
    renderCell: (cellValues: GridRenderCellParams<any, string>) => {
      return (
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            handlePrintClick(cellValues)
          }}
        >
          Print
        </Button>
      )
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
      columnHeaderHeight={60}
      rowHeight={120}
      sx={datagridSX}
      slots={{ toolbar: CustomToolbar }}
      initialState={{
        sorting: { sortModel: [{ field: 'name', sort: 'asc' }] },
      }}
    />
  )
}

export default ContactDataGrid
