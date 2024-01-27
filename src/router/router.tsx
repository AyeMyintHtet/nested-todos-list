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
    path: "/fix-me-todo",
    element: (
      <>
        <FixMeTodo />
      </>
    ),
  },
  {
    path: "/fix-me-nested",
    element: (
      <>
        <FixMeNested />
      </>
    ),
  },
]);

export default router;
