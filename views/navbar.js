import IDS from "./_ids.js";

/**
 * Navbar elements
 * @type {Array<{id: string, label: string}>}
 */
const LINKS = [
    {
        id: IDS.VIEW_DASHBOARD,
        label: "Dashboard",
    },
    {
        id: IDS.VIEW_USERS,
        label: "Users",
    },
    {
        id: IDS.VIEW_PRODUCTS,
        label: "Products",
    },
];

/** @type {webix.ui.list} */
const NavbarList = {
    view: "list",
    template: (obj) => obj.label,
    data: LINKS,
    css: "list",
    autoheight: true,
    borderless: true,
    width: 200,
    select: true,
    
    on: {
        onAfterSelect(id) {
            const view = $$(id);
            if (!view) throw new Error(`View with id "${id}" not found`);
            view.show();
        }
    }
};

/** @type {webix.ui.label} */
const NavbarConnectionStatus = {
    view: "label",
    label: "<span class='webix_icon wxi-check'></span> Connected",
    type: "icon",
    css: "connection_status",
    icon: "wxi-user",
};

/** @type {webix.ui.layout} */
const Navbar = {
    rows: [
        NavbarList,
        {},
        NavbarConnectionStatus,
    ],
    css: "navbar",
};


export default Navbar;