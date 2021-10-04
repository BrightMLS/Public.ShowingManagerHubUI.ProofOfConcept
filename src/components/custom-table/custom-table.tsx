import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useStyles from './custom-table-style'
import SimpleModal from './dialog/dialog'

interface IProps {
  rowsData: any
  columns: Record<string, any>
}
const CustomTable = ({ rowsData, columns }: IProps) => {
  const classes = useStyles()
  const isObject = (obj: any) => {
    return obj !== undefined && obj !== null && obj.constructor === Object
  }

  return (
    <TableContainer className={classes.root}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.tableHeader}>
            {columns.map((title: any) => (
              <TableCell align="center">{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData
            ? rowsData.map((row: any) => (
                <TableRow>
                  {row.map((val: any) => (
                    <TableCell align="center">
                      {isObject(val) || !val ? (
                        <SimpleModal data={val}></SimpleModal>
                      ) : (
                        val
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default CustomTable
