import IDS from "../_ids.js";

/** @type {webix.ui.chart} */
const UsersChart = {
    view: "chart",
    type: "bar",
    value: "#age#",
    xAxis: {
        template: "#age#",
    },
    id: IDS.USERS_CHART,
};

export default UsersChart;