import Header from "./views/header.js"
import Main from "./views/main.js"
import Footer from "./views/footer.js"
import UserMenuPopup from "./views/user_menu_popup.js";

webix.ui(UserMenuPopup);

webix.ui({
    rows: [ Header, Main, Footer ],
});