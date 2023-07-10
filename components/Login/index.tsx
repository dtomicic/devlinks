import React from "react";
import { LoginStyled } from "./style";
import { useRouter } from "next/router";
import { supabase } from "../../utils/Supabase";
import bcrypt from "bcryptjs";
import ErrorBox from "../ErrorBox";
import SuccessBox from "../SuccessBox";
import Form from "../Form/Form";
import { AppContext } from "../../contexts/AppContext";

const Login = () => {
    const { user, setUser } = React.useContext(AppContext);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [success, setSuccess] = React.useState(false);

    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { data: users, error } = await supabase
            .from("users")
            .select()
            .eq("username", username);

        if (error) {
            setError(true);
            setErrorMessage(error.message);
            return;
        }

        if (users.length === 0) {
            setError(true);
            setErrorMessage("User not found!");
            return;
        }

        const user = users[0];

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            setError(true);
            setErrorMessage("Wrong password!");
            return;
        }

        setError(false);
        setSuccess(true);
        localStorage.setItem("user", user.username);
        setUser(user.username);
        router.reload();
    };

    const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    return (
        <LoginStyled>
            {error && <ErrorBox errorMessage={errorMessage} />}
            {success && <SuccessBox message="Successful login!" />}
            <Form
                formType="Login"
                submitHandler={submitHandler}
                usernameValue={username}
                passwordValue={password}
                usernameChangeHandler={usernameChangeHandler}
                passwordChangeHandler={passwordChangeHandler}
            />
        </LoginStyled>
    );
};

export default Login;
