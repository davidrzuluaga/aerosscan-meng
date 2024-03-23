import { DataGrid } from "@mui/x-data-grid";
import styled from "@emotion/styled";

const columns = [
  { field: "id", headerName: "id"},
  { field: "firstName", headerName: "First Name"},
  { field: "lastName", headerName: "Last Name"},
  { field: "email", headerName: "Email"},
  { field: "dateOfBirth", headerName: "Date of Birth"},
  { field: "userRole", headerName: "Role"},
];

const TableStyles = styled.div`
  * {
    color: #fff;
  }
  .MuiDataGrid-columnHeaders * {
    color: black;
  }
`;

export function DataTable(props) {
  const { users } = props;
  return (
    <TableStyles style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </TableStyles>
  );
}
