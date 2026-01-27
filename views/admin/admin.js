import IDS from "../_ids.js";
import AdminForm from "./admin_form.js";
import AdminTable from "./admin_table.js";

/** @type {webix.ui.layout} */
const AdminView = {
    id: IDS.VIEW_ADMIN,
    cols: [
        AdminTable,
        AdminForm,
    ],
};

export default AdminView;