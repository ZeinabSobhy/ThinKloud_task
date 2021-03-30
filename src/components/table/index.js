import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyle from './style';
import ChartsPage from '../chart/index';
import ChartsPage2 from '../char2/index';
import { useTheme } from '@material-ui/styles';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData( model,brand,year) {
  return {
  
   
  };
}

function Row(props) {
  const { row } = props;

  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [opene, setOpene] = React.useState(false);
  const [data ,setDeta] = React.useState([]);
  const [Model , setModel] = React.useState('');
  const [Brand , setBrand] = React.useState('');
  const [Year ,setYear] = React.useState('');

 
const handelAdd= (model , brand, year) => {
       const item = {model:model, brand:brand , year:year};
       setDeta({...data, item});
  }

  return (
    <React.Fragment>
      <div className={classes.contener}>
        <div className={classes.com2}>
<ChartsPage/>
<ChartsPage2/>
        </div>
      <div className={classes.com1}>
        <div className={classes.title}>
          <span className={classes.text}> Mobile Shop Application</span>
          <button onClick= {() => handelAdd(Model,Brand , Year)}>
            Add New Mobile
          </button>
        </div >
<form className={classes.from}>
<div className={classes.input}>
<label >Model  
<input style={{ width: '168px' }} />
</label>
<br/>
<label >Brand  
<select style={{ width: '168px' }}

>
<option >Nokia</option>
<option >Samsung</option>
<option>Apple</option>
<option >Sony</option>
</select>
</label>


</div>
</form>
       

     
      <TableRow className={classes.root}>
      <TableCell align="right">
        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            <Typography>
              Brand
            </Typography>
          </IconButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} value={Model} onChange={(e) => {setBrand(e.target.value)}}>
              <Typography variant="h6" gutterBottom component="div">
                Nokia
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
              Samsung
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Apple
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Sony
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
        

        <TableCell align="right">
        <IconButton aria-label="expand row" size="small" onClick={() => setOpens(!opens)}>
            {opens ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            <Typography>
              Model
            </Typography>
          </IconButton>
          <Collapse in={opens} timeout="auto" unmountOnExit>
            <Box margin={1} value={Model} onChange={(e) => { setModel(e.target.value)}}>
              <Typography variant="h6" gutterBottom component="div">
                6600
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                S6
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Iphone
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Z2
              </Typography>
            </Box>
          </Collapse>
        </TableCell>

        <TableCell align="right">
        <IconButton aria-label="expand row" size="small" onClick={() => setOpene(!opene)}>
            {opene ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            <Typography>
              Year
            </Typography>
          </IconButton>
          <Collapse in={opene} timeout="auto" unmountOnExit>
            <Box margin={1} value={Model} onChange={(e) => {setYear(e.target.value)}}>
              <Typography variant="h6" gutterBottom component="div">
                2005
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                2006
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                2014
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                2015
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

  


      </div>
      </div>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    
  }).isRequired,
};


const rows = [
  createData(),

];




export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}

        </TableBody>
        {/* <TableBody>
          {setData.map((row) => (
            <Row key={row.name} row={row} />
          ))}

        </TableBody> */}
      </Table>
    </TableContainer>
  );}