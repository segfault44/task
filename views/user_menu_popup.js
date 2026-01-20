import IDS from "./_ids.js";

const UserMenuPopup = {
    view: "popup",
    id: IDS.USER_MENU_POPUP,
    css: "user_menu_popup",
    body: {
        view: "list",
        template: (obj) => `<a href="${obj.url}">${obj.label}</a>`,
        autoheight: true,
        data: [
            {
                label: "Settings",
                url: "/settings",
            },
            {
                label: "Log Out",
                url: "/logout",
            },
        ],
    },
};

export default UserMenuPopup;