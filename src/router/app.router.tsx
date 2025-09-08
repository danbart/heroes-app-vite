import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from '../heroes/pages/home/HomePage';

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));
const AdminPages = lazy(() => import('@/admin/pages/AdminPages'));
const AdminLayout = lazy(() => import('@/admin/pages/layouts/AdminLayout'));


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "heroes/:idSlug",
        element: <HeroPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPages />,
      },
    ]
  },
]);