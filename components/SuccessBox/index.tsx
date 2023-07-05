import { SuccessBoxStyled } from "./style";
import { AiFillCheckCircle } from "react-icons/ai";

const SuccessBox = () => {
    return (
        <SuccessBoxStyled>
            <AiFillCheckCircle />
            <span>Successful registration! Redirecting to login...</span>
        </SuccessBoxStyled>
    )
}

export default SuccessBox;