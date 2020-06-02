import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import {Link} from 'react-router-dom'
import numeral from 'numeral';
import './table.module.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



 function SimpleTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
    <h3>Viewing {props.dbData.length} Expenses. Total: ₹.{numeral(props.DB_Total).format('0,0.00')}</h3>
      <Table className={classes.table} aria-label="simple table">

        <TableHead className='bg'>
          <TableRow>
         
            <TableCell>Name.</TableCell>
            <TableCell align="right">Amount&nbsp;(₹).</TableCell>
            <TableCell align="right">CreatedAt&nbsp;(Date).</TableCell>
            <TableCell align="right">Action.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  
  {props.dbData.map(ele=>{
  return( 
          <TableRow key={ele.id}>
          <TableCell><Link to ={`/edit/${ele.id}`}>{ele.description}</Link></TableCell>
          <TableCell align="right"> {numeral(ele.amount).format('$0,0.00')}</TableCell>
          <TableCell align="right">{ moment(ele.createdAt).format('MMMM Do, YYYY')}</TableCell>
          <TableCell align="right"><button onClick={()=>props.removeExpenses(ele.id,ele.dbID)}>Delete</button></TableCell>
          </TableRow>
          )

  })}
 
 
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default SimpleTable