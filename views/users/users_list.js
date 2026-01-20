import IDS from "../_ids.js";

/** @type {webix.ui.list} */
const UsersList = {
    view: "list",
    template: `#name# <span class="webix_icon mdi mdi-close list_remove_icon"></span>`,
    id: IDS.USERS_LIST,
    onClick: {
        /** @this {webix.ui.list} */
        list_remove_icon(_ev, id) {
            // Remove from the list
            this.remove(id);

            // Update highlighted items
            const list = this;
            this.data.each((it) => {
                const idx = list.getIndexById(it.id);
                if (idx < 5) it.$css = "highlighted";
                else delete it.$css;
            });
            this.refresh();

            // Remove from the chart
            /** @type {webix.ui.chart} */
            const chart = $$(IDS.USERS_CHART);
            chart.remove(id);
        }
    },
};

export default UsersList;