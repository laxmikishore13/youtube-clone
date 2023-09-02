import store from "./Utils/store";
import Appbar from "./components/Appbar";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Appbar />
      <div className="grid grid-flow-col">
        <Sidebar />
        <Body />
      </div>
    </Provider>
  );
}
