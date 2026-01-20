const LINKS = [ "Dashboard", "Users", "Products", "Locations" ];

const Navbar = {
    rows: [
        {
            view: "list",
            template: (obj) => `<a href="/${obj.value.toLowerCase()}">${obj.value}</a>`,
            data: LINKS,
            css: "list",
            autoheight: true,
            borderless: true,
            width: 200,
        },
        {},
        {
            view: "label",
            label: "<span class='webix_icon wxi-check'></span> Connected",
            type: "icon",
            css: "connection_status",
            icon: "wxi-user",
        },
    ],
    css: "navbar",
};

export default Navbar;