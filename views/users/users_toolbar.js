import IDS from "../_ids.js";

/** @this {webix.ui.text} */
function handleInput() {
    /** @type {webix.ui.chart} */
    const chart = $$(IDS.USERS_CHART);
    /** @type {webix.ui.list} */
    const list = $$(IDS.USERS_LIST);
    if (!chart || !list) return;
    const value = this.getValue();
    chart.filter("#name#", value);
    list.filter("#name", value);
}

/**
 * Sort the list and the chart
 * @param {"asc" | "desc"} order 
 */
function handleSort(order) {
    /** @type {webix.ui.chart} */
    const chart = $$(IDS.USERS_CHART);
    /** @type {webix.ui.list} */
    const list = $$(IDS.USERS_LIST);
    if (!chart || !list) return;
    chart.sort("#age#", order);
    list.sort("#name#", order);
}

/** @type {webix.ui.toolbar} */
const UsersToolbar = {
    view: "toolbar",
    cols: [
        {
            view: "text",
            id: IDS.USERS_TOOLBAR_TEXT,
            on: {
                onTimedKeyPress: handleInput,
            }
        },
        {
            view: "button",
            label: "Sort asc",
            css: "webix_primary",
            width: 100,
            click: () => handleSort("asc"),
        },
        {
            view: "button",
            label: "Sort desc",
            css: "webix_primary",
            width: 100,
            click: () => handleSort("desc"),
        },
    ]
};

export default UsersToolbar;