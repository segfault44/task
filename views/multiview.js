import AdminView from "./admin/admin.js";
import Dashboard from "./dashboard/dashboard.js";
import ProductsView from "./products/products.js";
import UsersView from "./users/users.js";

/** @type {webix.ui.multiview} */
const Multiview = {
    view: "multiview",
    cells: [
        Dashboard,
        UsersView,
        ProductsView,
        AdminView,
    ],
};

export default Multiview;