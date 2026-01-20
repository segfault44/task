import IDS from "./_ids.js";

/** @type {webix.ui.toolbar} */
const Header = {
    view: "toolbar",
    css: "webix_dark",
    paddingX: 12,
    paddingY: 4,
    cols: [
        {
            view: "label",
            label: "My App",
            css: "header_label",
            autowidth: true,
        },
        {},
        {
            view: "button",
            label: "Profile",
            type: "icon",
            icon: "wxi-user",
            css: "webix_transparent",
            autowidth: true,
            popup: IDS.USER_MENU_POPUP,
        },
    ],
};

export default Header;