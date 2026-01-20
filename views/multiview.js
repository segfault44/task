import IDS from "./_ids.js";
import Dashboard from "./dashboard/dashboard.js";

/** @type {webix.ui.multiview} */
const Multiview = {
    view: "multiview",
    cells: [
        Dashboard,
        { id: IDS.VIEW_USERS, template: "Users view" },
        { id: IDS.VIEW_PRODUCTS, template: "Product view" }
    ],
};

export default Multiview;