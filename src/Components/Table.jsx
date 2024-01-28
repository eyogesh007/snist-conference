import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function({data = {head : [], rows:[]}}) {
  return (
    <TableContainer component={Paper}  sx={{ maxWidth: 850 }}>
      <Table sx={{ maxWidth: 850 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            {
                data.head.map((title, idx) => <TableCell align={ idx === 0 ? "left" : "right"}>{title}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row) => (
            <TableRow
              key={row.category}
            >
              {
                Object.values(row).map(
                  (value, idx) => {
                    return idx === 0 ?
                    <TableCell sx={{fontWeight : 500}}>{value}</TableCell> :
                    <TableCell align="right">{value}</TableCell>
                  }
                )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
