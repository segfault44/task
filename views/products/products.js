import IDS from "../_ids.js";

/** @type {webix.ui.tree} */
const ProductsView = {
    view: "treetable",
    id: IDS.VIEW_PRODUCTS,
    template: `{common.icon()} {}`,
    columns: [
        { id: "id", header: "", width: 50 },
        { id: "title", header: "Title", template: "{common.treetable()} #title#", width: 400 },
        { id: "price", header: "Price", width: 100 },
    ],
    select: "cell",
    url: "/data/products.json",
    on: {
        onAfterLoad() {
            this.openAll();
        }
    },
};

export default ProductsView;