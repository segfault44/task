import IDS from "../_ids.js";
import DashboardForm from "./dashboard_form.js";
import DashboardTabbar from "./dashboard_tabbar.js";
import DashboardTable from "./dashboard_table.js";

/** @type {webix.ui.layout} */
const Dashboard = {
    id: IDS.VIEW_DASHBOARD,
    cols: [
        {
            rows: [
                DashboardTabbar,
                DashboardTable,
            ],
        },
        DashboardForm,
    ],
}; 

export default Dashboard;