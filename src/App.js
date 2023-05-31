import { useRoutes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext";
import { AdminLayout, AgentLayout, ClientLayout, PublicLayout } from "./layouts/Layouts";
import RouterConfig from "./routerConfig/RouterConfig";
import { adminRoutes, agentRoutes, clientRoutes, publicRoutes } from "./routerConfig/routes";
import AgentDashboard from "./pages/AgentDashboard";

const Login = () => {
  return <>This is login</>
}

const Registration = () => {
  return <>This is Registration</>
}

const Home = () => {
  return <h1>This is Home</h1>
}


function App() {
  const { userType, isAuthenticated } = useAuth()
  console.log(userType)
  const getUserData = (userType) => {
    switch (userType) {
      case '1':
        return {
          layout: AgentLayout,
          routes: agentRoutes
        }
      case '2':
        return {
          layout: ClientLayout,
          routes: clientRoutes
        }
      case '3':
        return {
          layout: AdminLayout,
          routes: adminRoutes
        }
      default:
        return {
          layout: PublicLayout,
          routes: []
        }
    }
  }
  
  const { layout: Layout, routes } = getUserData(userType)


  const routing = useRoutes([
    {
      path: '/',
      element: <PublicLayout />,
      children: publicRoutes
    },
    {
      path: '/dashboard',
      element: <RouterConfig
        isAuthenticated={isAuthenticated}
        redirectTo="/login"
        element={<Layout />}
      />,
      children: routes
    },
    {
      path: "*",
      element: <h1>Not Found</h1>
    }
  ])

  // const routing = useRoutes([
  //   {
  //     path: '/',
  //     element: (
  //       <RouterConfig
  //         isAuthenticated={isAuthenticated}
  //         redirectTo="/login"
  //         element={<Layout />}
  //       >

  //         {/* <Route path="/" element={<Home />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/registration" element={<Registration />} />


  //         {isAuthenticated && userType === '3' && adminRoutes.map((route) => (
  //           <Route key={route.path} path={route.path} element={route.component} />
  //         ))}
  //         {isAuthenticated && userType === '1' && agentRoutes.map((route) => (
  //           <Route key={route.path} path={route.path} element={route.component} />
  //         ))}
  //         {isAuthenticated && userType === '2' && clientRoutes.map((route) => (
  //           <Route key={route.path} path={route.path} element={route.component} />
  //         ))}

  //         <Route path="*" element={<Navigate to="/404" />} /> */}
  //       </RouterConfig>
  //     ),
  //   }
  // ]);

  return routing;

  // return (
  //   <AuthProvider>
  //     {/* <IDDProvider> */}
  //       {routing}
  //     {/* </IDDProvider> */}
  //   </AuthProvider>
  // );
}

export default App;
