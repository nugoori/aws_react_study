import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 500px;
    height: 500px;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0px;
`;

export const SProfileImageBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid antiquewhite;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
`; 

export const SProfileImage = css`
    width: 100%;
`

export const SFileHidden = css`
    display: none;
`

export const SInputBox = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    width: 250px;
    height: 30px;
    font-weight: 900;
    color: orange;
`
export const SInput = css`
    border: 0.5px solid antiquewhite;
    outline-color: orange;
`

export const SButton = css`
    border: none;

    width: 250px;
    height: 35px;
    background-color: antiquewhite;
    color: orangered;
    cursor: pointer;
`














