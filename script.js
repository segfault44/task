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
    $$(IDS.USERS_LIST).parse(webix.copy(data));
    $$(IDS.USERS_CHART).parse(webix.copy(data));
});

// Bind the dashboard form to the datatable
$$(IDS.DASHBOARD_FORM).bind(IDS.DASHBOARD_TABLE);