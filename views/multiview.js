import IDS from "./_ids.js";
import Dashboard from "./dashboard/dashboard.js";
import UsersView from "./users/users.js";

/** @type {webix.ui.multiview} */
const Multiview = {
    view: "multiview",
    cells: [
        Dashboard,
        UsersView,
        { id: IDS.VIEW_PRODUCTS, template: "Product view" }
    ],
};

export default Multiview;