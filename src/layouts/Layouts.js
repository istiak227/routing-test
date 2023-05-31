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
  console.log("Im in Agent route")
  return (
    <div>
      <h1>Agent Layout</h1>
      <Outlet />
    </div>
  );
}

export function ClientLayout() {
  return (
    <div>
      <h1>Client Layout</h1>
      <Outlet />
    </div>
  );
}

export function PublicLayout() {
  console.log("Im in public route")
  return (
    <div>
      <h1>Home Layout</h1>
      <Outlet />
      <h1>Home Layout</h1>
    </div>
  );
}