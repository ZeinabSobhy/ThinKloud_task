// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import useStyle from './style';
// import { useTheme } from '@material-ui/styles';
// import { useHistory } from "react-router-dom";

// class AddScreen extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
//       this.state={e:''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleChange2 = this.handleChange2.bind(this);
      
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
//     handleChange2(event) {
//         this.setState({e: event.target.value});
//       }
    
//     handleSubmit(event) {
//       alert('Data was saved: ' );
//       event.preventDefault();
//     }
  
  
//     render() {
//       return (
//         <form 
        
//         onSubmit={this.handleSubmit}>
//           <label>
//             Model:
//             <input type="text"
//             placeholder="Enter Model"
//              value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <br/>

//           <label>
//             Year:
//             <input type="number"
//             placeholder='Enter Year'
//              value={this.state.e} onChange={this.handleChange2} />
//           </label>
//           <br/>
         
//           <label >Brand  </label>
//          <select style={{ width: '168px' }}
         
//          >
//         <option >Nokia</option>
//          <option >Samsung</option>
//          <option>Apple</option>
//            <option >Sony</option>
//      </select>
// <br/>


//   <label >Memory </label>
//   <select style={{ width: '168px' }}

//   >
//     <option >16 GB</option>
//     <option >32 GB</option>
//     <option>64 GB</option>
//     <option >128 GB</option>
//   </select>
// <br/> 
// <button input type="submit" value="submit">save</button>
// <button >
//     Back
// </button>

//         </form>
//       );
//     }
//   }
//   export default AddScreen;
import * as React from "react";
import { useForm } from "react-hook-form";
import useStyle from './style';
import { useHistory } from "react-router-dom";
import CollapsibleTable from '../../components/table';


export default function AddScreen() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  const classes = useStyle();
  let history = useHistory();

  function handleClick() {
    history.push("/CollapsibleTable");
  }

  return (
    <div>
      <div
      style={{ textAlign: 'center', width: '100%' }}
      >Add Mobile</div>
    <form
    className={classes.form}
     onSubmit={handleSubmit(onSubmit)}>
    
    <label > Model 
      <input name="Model"  placeholder="Enter Model"
      className={classes.input} />
      </label>

      <label> Years   
      <input name="Years" placeholder="Enter Years"
      className={classes.input} />
      </label>

      <label> Brand 
          
      <select name="Brand" 
      className={classes.select}>

        <option value="">Nokia</option>
        <option value="A">Samsung</option>
        <option value="B">Apple</option>
        <option value="c">Sony</option>
      </select>
      </label>

      <label> Memory 
      <select name="Memory" 
        className={classes.select2}>
        <option value="">16 GB</option>
        <option value="A">32 GB</option>
        <option value="B">64 GB</option>
        <option value="c">128 GB</option>
      </select>
      </label>
<div className={classes.save$back}>
      <input type="submit" />
      <button    
      onClick={handleClick}>
        Back
        </button>
      </div>
    </form>

    <div className={classes.list}>

    </div>
    </div>



  );
}
