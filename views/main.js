import Navbar from "./navbar.js"
import Multiview from "./multiview.js";

/** @type {webix.ui.layout} */
const Main = {
    cols: [
        Navbar,
        { view: "resizer" },
        Multiview
    ],
};

export default Main;