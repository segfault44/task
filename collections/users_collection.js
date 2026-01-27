const usersCollection = new webix.DataCollection({
    scheme: {
        name: "John Doe",
        age: 20,
        country: "USA",
        $init: (it) => it.$css = it.age < 26 ? "user_highlighted" : null,
    },
    url: "/data/users.json",
});

export default usersCollection;