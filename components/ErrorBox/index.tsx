import { ErrorBoxStyled } from "./style";
import { BiErrorCircle } from "react-icons/bi";


interface IErrorBoxProps {
    errorMessage: string;
}

const ErrorBox = (props: IErrorBoxProps) => {
    const { errorMessage } = props;
    return (
        <ErrorBoxStyled>
            <BiErrorCircle />
            <span>{errorMessage}</span>
        </ErrorBoxStyled>
    );
}

export default ErrorBox;