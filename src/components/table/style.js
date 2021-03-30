import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    contener:{

        width: '100%',
        height: '70vh',
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'row',
    },
    com2:{
width:'50%',
order: 2,
    },
    com1:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around ',
        order: 1,
        width:'50%',
    },
    
    title:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
       
 
    },
    text:{
        fontSize: '15px',
        letterSpacing:' -0.97px',
        fontWeight: 'bold',
       
    },
    input:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'space-between',
 
    },
    select:{
        width:'168px'
    },
    root:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        with:'50%',

    },
    from:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }

}));