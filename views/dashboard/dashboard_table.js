import IDS from "../_ids.js"

/** @type {webix.ui.datatable} */
const DashboardTable = {
    view: "datatable",
    id: IDS.DASHBOARD_TABLE,
    hover: "cell_hover",
    select: true,
    columns: [
        { id: "rank", header: "", sort: "int", css: "dashboard_table_id_column", width: 50 },
        { id: "title", header: ["Film Title", { content: "textFilter" }], sort: "text", fillspace: true },
        { id: "category_id", header: ["Category", { content: "selectFilter" }], sort: "text", collection: "/data/categories.json" },
        { id: "votes", header: ["Votes", { content: "textFilter" }], sort: "text", width: 100 },
        { id: "year", header: ["Year"], sort: "text", width: 80 },
        { template: `<span class="remove_btn webix_icon wxi-trash"></span>`, width: 40 },
    ],
    scheme: {
        
        $init(obj) {
            // Preprocess the sample data numbers to remove separators
            obj.votes = Number(obj.votes.replaceAll(",", ""));
            obj.rating = Number(obj.rating.replaceAll(",", ""));
            // Generate a category id in range [1, 4]
            obj.category_id = Math.floor(Math.random() * 4.0) + 1.0;
        },
    },
    onClick: {
        /** @this {webix.ui.datatable} */
        remove_btn(_ev, id) {
            this.remove(id);
            return false;
        },
    },
    on: {
        onAfterSelect() {
            $$(IDS.DASHBOARD_FORM).clearValidation();
        },
        onAfterAdd(id) {
            this.showItem(id);
        }
    },
    url: "/data/data.json",
};

export default DashboardTable