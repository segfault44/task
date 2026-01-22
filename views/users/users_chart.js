import IDS from "../_ids.js";

/** @type {webix.ui.chart} */
const UsersChart = {
    view: "chart",
    type: "bar",
    value: "#count#",
    yAxis: {
        start: 0,
        step: 2,
        end: 10,
    },
    xAxis: {
        template: "#country#",
    },
    id: IDS.USERS_CHART,
};

export default UsersChart;