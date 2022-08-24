import { useMemo } from 'react';
import userService from '@/services/user';
import { UserListDto } from '@/schema/user';
import { AgGridReact } from 'ag-grid-react';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { Avatar, Box, Paper, Typography } from '@mui/material';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Users: Page = () => {
  const gridOptions: GridOptions<UserListDto> = useMemo(
    () => ({
      columnDefs: [
        {
          field: 'image',
          headerName: 'Image',
          width: 30,
          cellRenderer: AvatarCellRenderer,
        },
        { field: 'name', headerName: 'Name', filter: true },
        { field: 'email', headerName: 'Email', filter: true },
      ],
      pagination: true,
      paginationPageSize: 5,
      onGridReady: (e) => onGridReady(e),
    }),
    []
  );

  const onGridReady = async (e: GridReadyEvent) => {
    try {
      const users = await userService.getAll();
      e.api.setRowData(users);
      e.api.sizeColumnsToFit();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <Typography variant="h2" sx={{ mb: 2, fontSize: 24 }}>
        Users
      </Typography>
      <Paper
        sx={{
          height: 309,
          width: '100%',
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact gridOptions={gridOptions} />
      </Paper>
    </div>
  );
};

const AvatarCellRenderer = (params: any) => {
  const { name, image } = params.data as UserListDto;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Avatar
        alt={name}
        src={image}
        sx={{
          height: 30,
          width: 30,
        }}
      />
    </Box>
  );
};

export default Users;
