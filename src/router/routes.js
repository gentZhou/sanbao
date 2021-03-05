import Login from "@/view/login";

export default[
    {
        path:"/login",
        component:Login
    },
    {
        path:"/",
        redirect: "/login",
    }
]