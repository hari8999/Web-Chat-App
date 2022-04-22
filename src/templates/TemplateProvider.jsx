// import React, {createContext} from 'react';
// import { ThemeProvider, createTheme } from "@material-ui/core/styles";

// export const TemplateContext = createContext(null);

// const TemplateProvider = ({children}) =>{

//     const theme = createTheme({
//            overrides:{
//                MuiDrawer:{
//                    paperAnchorLeft:{
//                        height:'95.1%' ,
//                        top:17,
//                        width:'25%',
//                        left:66,
//                         boxShadow:'none',
    
//                    }

//                },
//                MuiBackdrop:
//                {root:{
//                    backgroundColor:'unset',
//                }}
//            }
//     })
//     return(
//         <TemplateContext.Provider>
//             <ThemeProvider theme = {theme}>
//                 {children}
//             </ThemeProvider>
//         </TemplateContext.Provider>
//     )
// }

// export default TemplateProvider;


import React from 'react';
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const TemplateContext = React.createContext(null);

export const TemplateProvider = ({ children }) => {
    const theme = createMuiTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    left: 62,
                    top: 17,
                    height: '95%',
                    width: '28%',
                    boxShadow: 'none'
                }
            }
        }
    });

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {/* <CssBaseline /> */}
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    );
}

export default TemplateProvider;