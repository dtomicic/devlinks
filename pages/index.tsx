import React from "react";
import Login from "../components/Login";
import { AppContext } from "../contexts/AppContext";

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

    return <>{user ? <div>Logged in!</div> : <Login />}</>;
}
