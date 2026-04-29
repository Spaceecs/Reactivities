import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDeshboard from "../../features/activities/deshboard/ActivityDeshboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "activities",
        element: <ActivityDeshboard />,
      },
      {
        path: "activities/:id",
        element: <ActivityDetails />,
      },
      {
        path: "createActivity",
        element: <ActivityForm key="create" />,
      },
      {
        path: "manage/:id",
        element: <ActivityForm />,
      },
    ],
  },
]);
