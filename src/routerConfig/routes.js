import { Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AgentDashboard from "../pages/AgentDashboard";
import ClientDashboard from "../pages/ClientDashboard";
// import { AdminPage, AgentPage, /* other pages */ } from "./pages";


export const adminRoutes = [
    <Route path="/dashboard" element={<AdminDashboard />} />,
    // More admin routes...
];

export const agentRoutes = [
    { path: '', element: <AgentDashboard />},
    { path: 'orders', element: <AgentDashboard />, icon: "something"},
    { path: 'customers', element: <AgentDashboard />},
];


export const clientRoutes = [
    { path: '', element: <ClientDashboard /> },
    { path: 'products', element: <ClientDashboard /> },
    { path: 'cart', element: <ClientDashboard /> },
];

export const publicRoutes = [
    { path: '/', element: <h2>This is home</h2> },
    { path: 'login', element: <h2>This is Login</h2> },
    { path: 'reg', element: <h2>This is Registration</h2> },
];