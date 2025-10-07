import { createBrowserRouter } from "react-router-dom";
import FixMeTodo from "./FixMeTodo/FixMeTodo";
import FixMeNested from "./FixMeNested/FixMeNested";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
      </>
    ),
  },
  {
    path: "/todo",
    element: (
      <>
        <FixMeTodo />
      </>
    ),
  },
  {
    path: "/nested",
    element: (
      <>
        <FixMeNested />
      </>
    ),
  },
]);

export default router;
