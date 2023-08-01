import styled from "styled-components";

export const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: white;
    border-radius: 15px;
    padding: 35px;
    max-width: 350px;
    box-shadow: 0px 0px 2px 0px #D8D8D8;

    .form-heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        margin-bottom: 20px;

        .form-logo {
            display: flex;
            align-items: center;
            gap: 10px;

            span {
                font-family: "Lato", sans-serif;
                font-weight: 700;
                font-size: 30px;
            }
        }

        .form-type {
            font-weight: 600;
            text-transform: uppercase;
            font-size: 18px;
        }
    }

    .form-body {
        display: flex;
        justify-content: center;
        width: 100%;

        form {
            display: flex;
            flex-direction: column;
            width: 100%;

            .form-inputs {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-bottom: 10px;

                input {
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #c4c4c4;
                    font-family: "Open Sans", sans-serif;
                    transition: all 0.2s ease-in-out;

                    &:focus {
                        outline: none;
                        border: 1px solid #633dff;
                        box-shadow: 0px 0px 5px 0px #bbbbbb;
                    }
                }
            }

            .form-note { 
                display: flex;
                justify-content: center;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 30px;

                a:hover {
                    color: #5937e5;
                }
            }

            button {
                padding: 10px;
                border-radius: 5px;
                border: none;
                background-color: #633dff;
                color: white;
                font-family: "Lato", sans-serif;
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 1px;
                transition: all 0.2s ease-in-out;

                &:focus {
                    outline: none;
                    border: 1px solid black;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #5937e5;
                }
            }
        }
    }
`;
