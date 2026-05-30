import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "../css/default.css";

export default function App() {
  return <RouterProvider router={router} />;
}
