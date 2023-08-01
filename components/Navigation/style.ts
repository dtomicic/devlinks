import styled from "styled-components";
import { colors } from "../../styles/globalstyles";

export const NavigationStyled = styled.nav`
    display: flex;
    background-color: white;
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding: 0 15px;

    .logo {
        display: flex;
        align-items: center;
    }

    .menu {
        display: flex;
        margin: 0 auto;

        ul {
            display: flex;
            list-style: none;
            padding: 0;

            li {
                a {
                    display: flex;
                    padding: 10px 25px;
                    color: #262626;
                    border-radius: 5px;
                    transition: all 0.3s ease-in-out;

                    svg {
                        font-size: 18px;
                    }

                    &.active {
                        background-color: rgba(99, 61, 255, 0.2);
                        color: ${colors.purple};
                    }
                }
            }
        }
    }
`;
