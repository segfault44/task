import IDS from "../_ids.js";
import UsersList from "./users_list.js";
import UsersToolbar from "./users_toolbar.js";
import UsersChart from "./users_chart.js"

/** @type {webix.ui.layout} */
const UsersView = {
    id: IDS.VIEW_USERS,
    rows: [
        UsersToolbar,
        UsersList,
        UsersChart,
    ],
};

export default UsersView;