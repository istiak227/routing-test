AuthContext.js

import React from "react";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [authState, setAuthState] = React.useState({ isAuthenticated: false, userType: "public" });

    const value = {
        ...authState,
        setAuthState,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}



PrivateRoute.js

import { useAuth } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ isAuthenticated, redirectTo, children }) {
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to={redirectTo} state={{ from: location }} />;
    }

    return children;
}

export default PrivateRoute;


Layouts.js

import React from "react";
import { Outlet } from "react-router-dom";

export function AdminLayout() {
    return (
        <div>
            <h1>Admin Layout</h1>
            <Outlet />
        </div>
    );
}

export function AgentLayout() {
    return (
        <div>
            <h1>Agent Layout</h1>
            <Outlet />
        </div>
    );
}

// Define other layouts similarly...


4. routes.js

import { Route } from "react-router-dom";
import { AdminPage, AgentPage, /* other pages */ } from "./pages";

export const adminRoutes = [
    <Route path="/dashboard" element={<AdminPage />} />,
    // More admin routes...
];

export const agentRoutes = [
    <Route path="/dashboard" element={<AgentPage />} />,
    // More agent routes...
];

// Define other user type routes similarly...


5. App.js

import { useRoutes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import { AdminLayout, AgentLayout, /* other layouts */ } from "./layouts";
import { adminRoutes, agentRoutes, /* other routes */ } from "./routes";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const { userType, isAuthenticated } = useAuth();

  const getLayout = (userType) => {
    switch (userType) {
      case 'admin':
        return AdminLayout;
      case 'agent':
        return AgentLayout;
      // Other user types...
      default:
        return PublicLayout;
    }
  };

  const Layout = getLayout(userType);

  const routing = useRoutes([
    {
      path: '/',
      element: (
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          redirectTo="/login"
          element={<Layout />}
        >
          {userType === 'admin' && adminRoutes}
          {userType === 'agent' && agentRoutes}
          {/* Other user type routes */}
        </PrivateRoute>
      ),
    },
    // Other routes...
  ]);

  return (
    <AuthProvider>
      {routing}
    </AuthProvider>
  );
};

export default App;

