import IDS from "../_ids.js";

/** @type {webix.ui.tree} */
const ProductsView = {
    view: "treetable",
    id: IDS.VIEW_PRODUCTS,
    template: `{common.icon()} {}`,
    editable: true,
    columns: [
        { id: "id", header: "", width: 50 },
        { id: "title", header: "Title", editor: "text", template: "{common.treetable()} #title#", width: 400 },
        { id: "price", header: "Price", editor: "text", width: 100 },
    ],
    select: "cell",
    url: "/data/products.json",
    rules: {
        title: webix.rules.isNotEmpty,
        price(value, it) {
            // For "folders", the price value must be empty
            if (it.$count > 0) {
                if (value && value != "") return false;
                return true;
            } else {
                const num = Number(value);
                if (Number.isNaN(num)) return false;
                if (num < 0) return false;
                return true;
            }
        }
    },
    on: {
        onAfterLoad() {
            this.openAll();
        }
    },
};

export default ProductsView;