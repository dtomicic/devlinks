import React from "react";
import { AppContext } from "../contexts/AppContext";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

export default function Home() {
    const { user, setUser } = React.useContext(AppContext);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const user = localStorage.getItem("user");
            if (user) {
                setUser(user);
            }
        }
    }, []);

    return <>{user ? <Dashboard /> : <Login />}</>;
}
