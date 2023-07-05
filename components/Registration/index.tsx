import React from "react";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
import { supabase } from "../../utils/Supabase";
import { RegistrationStyled } from "./style";
import Form from "../Form/Form";
import ErrorBox from "../ErrorBox";
import SuccessBox from "../SuccessBox";

const Registration = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [success, setSuccess] = React.useState(false);

    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { error } = await supabase
            .from("users")
            .insert({
                username: username,
                password: await bcrypt.hash(password, 10)
            });

        if (error) {
            setError(true);
            if (error.code === "23505") {
                setErrorMessage("Username already exists");
            }
        } else {
            setError(false);
            setSuccess(true);
            setUsername("");
            setPassword("");
            setTimeout(() => {
                setSuccess(false);
                router.push("/");
            }, 1000)
        }
    };

    const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <RegistrationStyled>
            {error && <ErrorBox errorMessage={errorMessage} />}
            {success && <SuccessBox />}
            <Form
                formType="Registration"
                submitHandler={submitHandler}
                usernameValue={username}
                passwordValue={password}
                usernameChangeHandler={usernameChangeHandler}
                passwordChangeHandler={passwordChangeHandler}
            />
        </RegistrationStyled>
    );
};

export default Registration;
