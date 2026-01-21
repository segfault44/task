import IDS from "../_ids.js";

/** @type {webix.ui.list} */
const UsersList = {
    view: "editlist",
    template: `#name#, #age#, from #country# <span class="webix_icon mdi mdi-close list_remove_icon"></span>`,
    id: IDS.USERS_LIST,
    css: "users_list",
    editable: true,
    editor: "text",
    editValue: "name",
    scheme: {
        $init(it) {
            if (it.age < 26) {
                it.$css = "user_highlighted";
            }
        }
    },
    onClick: {
        /** @this {webix.ui.list} */
        list_remove_icon(_ev, id) {
            // Remove from the list
            this.remove(id);
            // Remove from the chart
            /** @type {webix.ui.chart} */
            const chart = $$(IDS.USERS_CHART);
            if (chart && chart.exists(id)) chart.remove(id);
            return false;
        }
    },
};

export default UsersList;