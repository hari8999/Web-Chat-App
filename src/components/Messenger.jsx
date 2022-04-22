// import {AppBar,Toolbar, makeStyles, Box} from '@material-ui/core';
// import Login from "./Logining/Login";
// import React, {useContext} from 'react';
// import { AccountContext } from '../context/AccountProvider';
// import ChatBox from './ChatBox';
// const useStyles= makeStyles({
//     headerLogin:{
//         height:200,
//         backgroundColor:'#00bfa5',
//         boxShadow:'none',
//     },
//     header:{
//         height:115,
//         backgroundColor:'#128C7E',
//         boxShadow:'none',
//     },
//     component: {
//         background:'#DCDCDC',
//         height:'100vh'
//     }
// });
// const Messenger = () => {
//     const classes= useStyles();
//     const {account}= useContext(AccountContext);
//     // console.log(<ChatBox />);
//     // console.log(account);
//     return <>
//         <Box className= {classes.component}>
//             <AppBar className= { account ? classes.header:classes.headerLogin}>
//         <Toolbar>
            
//         </Toolbar>
//     </AppBar>
//     {account ? <ChatBox />:<Login />}
//         </Box>
     
//     </>
// }


// export default Messenger;


import { useContext } from 'react';
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';

import { AccountContext } from '../context/AccountProvider';

//components
import ChatDialog from './chat/ChatDialog';
import LoginDialog from './account/LoginDialog';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        background: '#DCDCDC'
    },
    header: {
        background: '#128C7E',
        height: 115,
        boxShadow: 'none'
    },
    loginHeader: {
        background: '#00bfa5',
        height: 200,
        boxShadow: 'none'
    }
})

const Messenger = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return (
        <Box className={classes.component}>
            <AppBar className={account ? classes.header : classes.loginHeader}>
                <Toolbar>

                </Toolbar>
            </AppBar>
            {
                account ? <ChatDialog /> : <LoginDialog />
            }
        </Box>
    )
}

export default Messenger;