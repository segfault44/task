const LINKS = [ "Dashboard", "Users", "Products", "Locations" ];


/** @type {webix.ui.list} */
const NavbarList = {
    view: "list",
    template: (obj) => `<a href="/${obj.value.toLowerCase()}">${obj.value}</a>`,
    data: LINKS,
    css: "list",
    autoheight: true,
    borderless: true,
    width: 200,
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