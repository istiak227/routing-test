import { Route, Outlet, Navigate } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AgentDashboard from "../pages/AgentDashboard";
import ClientDashboard from "../pages/ClientDashboard";
// import { AdminPage, AgentPage, /* other pages */ } from "./pages";


export const drawingRoute = [
    { path: ':id', element: <>Im a drawing</> },
]

export const adminRoutes = [
    { path: '', element: <p>I am from Admin</p> },
    { path: 'user', element: <p>This is an Admin</p> }
];

export const agentRoutes = [
    { path: '', element: <AgentDashboard /> },
    { path: 'list', element: <AgentDashboard /> },
    { path: 'customers', element: <AgentDashboard /> },
    { path: 'idd/:id', element: <>This is IDD</> },
];


export const clientRoutes = [
    { path: '', element: <ClientDashboard /> },
    { path: 'list', element: <ClientDashboard />, icon: "", sideMenu: true },
    { path: 'cart', element: <ClientDashboard /> },
    { path: 'drawing/:id', element: <>Im a drawing</> },
];


export const publicRoutes = [
    { path: '/', element: <h2>This is home</h2> },
    { path: 'login', element: <h2>This is Login</h2> },
    { path: 'reg', element: <h2>This is Registration 1st page</h2> },
    { path: 'reg/next', element: false ? <>This is Registration second page</> : <Navigate to='reg' replace /> }
];

