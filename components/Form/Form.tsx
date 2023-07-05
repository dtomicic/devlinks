import Image from "next/image";
import { FormStyled } from "./style";
import Link from "next/link";

interface IFormProps {
    formType: string;
}

const Form = (props: IFormProps) => {
    const { formType } = props;
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
                <form>
                    <div className="form-inputs">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <span className="form-note">
                        {formType === "Login" ? (
                            <span>
                                Don't have an account?{" "}
                                <Link href="/register">Sign up</Link>
                            </span>
                        ) : (
                            <span>
                                Already have an account? <Link href="/">Login</Link>
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
