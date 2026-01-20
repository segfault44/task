import IDS from "../_ids.js";

/** @type {webix.ui.list} */
const UsersList = {
    view: "list",
    template: `#name# <span class="webix_icon mdi mdi-close list_remove_icon"></span>`,
    id: IDS.USERS_LIST,
    css: "users_list",
    onClick: {
        /** @this {webix.ui.list} */
        list_remove_icon(_ev, id) {
            // Remove from the list
            this.remove(id);
            // Remove from the chart
            /** @type {webix.ui.chart} */
            const chart = $$(IDS.USERS_CHART);
            if (chart && chart.exists(id)) chart.remove(id);
        }
    },
};

export default UsersList;