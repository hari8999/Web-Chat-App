// //components import ka kaam hai ye
// import Messenger from "./componenets/Messenger";
// import AccountProvider from "./context/AccountProvider";
// import UserProvider from "./context/UserProvider";
// import TemplateProvider from "./theme/TemplateProvider";

// function App() {
//   return (
//       <TemplateProvider>
//         <UserProvider>
//         <AccountProvider>
//         <Messenger />
//         </AccountProvider>
//         </UserProvider>
//       </TemplateProvider>

//   );
// }

// export default App;


//edited 1


import { lazy, Suspense } from 'react';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import TemplateProvider from './templates/TemplateProvider';
import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
