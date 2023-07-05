import Image from "next/image";
import { FormStyled } from "./style";
import Link from "next/link";

interface IFormProps {
    formType: string;
    usernameValue?: string;
    passwordValue?: string;
    submitHandler?: (e: React.FormEvent<HTMLFormElement>) => void;
    usernameChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    passwordChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = (props: IFormProps) => {
    const {
        formType,
        usernameValue,
        passwordValue,
        submitHandler,
        usernameChangeHandler,
        passwordChangeHandler,
    } = props;
    return (
        <FormStyled>
            <div className="form-heading">
                <div className="form-logo">
                    <Image
                        src="/images/logo.svg"
                        alt="devlinks logo"
                        width={50}
                        height={50}
                    />
                    <span>devlinks</span>
                </div>
                <span className="form-type">{formType}</span>
            </div>
            <div className="form-body">
                <form onSubmit={submitHandler}>
                    <div className="form-inputs">
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            onChange={usernameChangeHandler}
                            value={usernameValue}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            onChange={passwordChangeHandler}
                            value={passwordValue}
                        />
                    </div>
                    <span className="form-note">
                        {formType === "Login" ? (
                            <span>
                                Don't have an account?{" "}
                                <Link href="/register">Sign up</Link>
                            </span>
                        ) : (
                            <span>
                                Already have an account?{" "}
                                <Link href="/">Login</Link>
                            </span>
                        )}
                    </span>
                    <button type="submit">{formType}</button>
                </form>
            </div>
        </FormStyled>
    );
};

export default Form;
