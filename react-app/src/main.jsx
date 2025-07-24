import { Nav,Main,Footer} from "./components";
import { createRoot } from "react-dom/client";

createRoot(document.querySelector("#root")).render(
  <>
    <Nav />
    <Main />

    <Footer />
  </>
);
