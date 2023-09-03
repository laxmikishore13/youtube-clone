import store from "./Utils/store";
import Appbar from "./components/Appbar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <Appbar />
      <RouterProvider router={router} />
    </Provider>
  );
}
