import Header from "./views/header.js"
import Main from "./views/main.js"
import Footer from "./views/footer.js"
import UserMenuPopup from "./views/user_menu_popup.js";
import IDS from "./views/_ids.js";

webix.ui(UserMenuPopup);

webix.ui({
    rows: [ Header, Main, Footer ],
});

// Load user data
webix.ajax().get("/data/users.json").then(async (data) => {
    const json = data.json();
    for (let i = 0; i < json.length; i++) {
        if (i < 5) json[i].$css = 'highlighted';
    }

    $$(IDS.USERS_LIST).parse(json);
    $$(IDS.USERS_CHART).parse(json);
});