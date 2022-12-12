// import React, { Fragment } from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Route, Routes } from 'react-router-dom';

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       {loading === false && (
//         <Routes>
//           <Route
//             {...rest}
//             render={(props) => {
//               if (isAuthenticated === false) {
//                 return <Navigate to='/login' />;
//               }

//               if (isAdmin === true && user.role !== 'admin') {
//                 return <Navigate to='/login' />;
//               }

//               return <Component {...props} />;
//             }}
//           />
//         </Routes>
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  // const isAuthenticated = null; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
