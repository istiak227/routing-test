import { useRoutes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext";
import { AdminLayout, AgentLayout, ClientLayout, PublicLayout, ImagePanelLayout } from "./layouts/Layouts";
import RouterConfig from "./routerConfig/RouterConfig";
import { adminRoutes, agentRoutes, clientRoutes, publicRoutes, drawingRoute } from "./routerConfig/routes";
import AgentDashboard from "./pages/AgentDashboard";
import { UserType } from "./constents/constants";

function App() {
  const { userType, isAuthenticated } = useAuth()
  console.log(userType)

  const getUserData = (userType) => {
    switch (userType) {
      case UserType.AGENT:
        return {
          layout: AgentLayout,
          routes: agentRoutes
        }
      case UserType.CLIENT:
        return {
          layout: ClientLayout,
          routes: clientRoutes
        }
      case UserType.ADMIN:
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
      path: '/drawing',
      element: <RouterConfig
        isAuthenticated={isAuthenticated}
        redirectTo="/login"
        element={<ImagePanelLayout />}
      />,
      children: drawingRoute
    },
    {
      path: "*",
      element: <h1>Not Found</h1>
    }
  ])

  return routing;

}

export default App;
