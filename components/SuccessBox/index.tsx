import { SuccessBoxStyled } from "./style";
import { AiFillCheckCircle } from "react-icons/ai";

interface ISuccessBoxProps {
    message: string;
}

const SuccessBox = (props: ISuccessBoxProps) => {
    const { message } = props;
    return (
        <SuccessBoxStyled>
            <AiFillCheckCircle />
            <span>{message}</span>
        </SuccessBoxStyled>
    )
}

export default SuccessBox;