/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from 'react';
import * as S from "./Style.js";

function MyPage(props) {

    const defaultProfileImgSrc = "https://www.cincinnatichildrens.org/-/media/Cincinnati-Childrens/Global-Shared/Biographies/s/DefaultUser.jpg?mw=220&hash=5C9994F8BEF51B7B41275D5DB522A239";
    const profieImgSrc = localStorage.getItem("profileImg");
    const [ profileImg, setProfileImg ] = useState(!!profieImgSrc ? profieImgSrc : defaultProfileImgSrc);

    const profileFileInput = useRef(); //querySelector대신

    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click();
    };

    const handleProfileImgSelect = (e) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            setProfileImg(e.target.result);
            console.log(profileImg); // defaultImg값이 set되기전에 찍힘
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const localStorageUser = JSON.parse(localStorage.getItem("user"));

    let user = {
        username: localStorageUser?.username && localStorageUser.username,
        name: localStorageUser?.name && localStorageUser.name,
        email: localStorageUser?.email && localStorageUser.email
    }
                                                                                                                                                                                   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        user = {
            ...user,
            [name]: value
        }
    }

    const handleSaveClick = () => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("profileImg", profileImg);
    }

    // !!제대로 안돌아감
    // ? 렌더링 필요없으니까 profile에 state 굳이 안써도됨
    // const let으로 바뀌게 했어야하나? [ profile, setProfile ] = useState({
    //     username: "",
    //     name: "",
    //     email: ""
    // });
    // const [ profileList, setProfileList ] = useState([]); 
    // const handleProfileData = (e) => {
    //     const { id, value } = e.target;
    //     const profileObj = {
    //         ...profile,
    //         [id]: value
    //     };
    //     setProfile(profileObj);
    // }
    // const saveProfileList = () => {
    //     setProfileList(profileList => [...profileList, profile]);
    //     console.log(profileList);
    // }
    // const saveLocalStorage = () => {
    //     localStorage.setItem("profileList", JSON.stringify(profileList));
    // }
    // const handleProfileSaveOnClick = () => {
    //     saveProfileList();
    //     saveLocalStorage();
    // }
    
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImageBox} onClick={handleProfileImgChangeClick} >
                    <img css={S.SProfileImage} src={profileImg} />
                    <input css={S.SFileHidden} type="file" ref={profileFileInput} onChange={handleProfileImgSelect} />
                </div>
            </div>
            <div css={S.SContainer}>
                <div css={S.SInputBox}>
                    <label htmlFor="username" >사용자명 </label>
                    <input css={S.SInput} type="text" id='username' name="username" onChange={handleInputChange} defaultValue={user.username} />
                </div>
                <div css={S.SInputBox}>
                    <label htmlFor="name">이름 </label>
                    <input css={S.SInput} type="text" id='name' name="name" onChange={handleInputChange} defaultValue={user.name} />
                </div>
                <div css={S.SInputBox}> 
                    <label htmlFor="email">이메일 </label>
                    <input css={S.SInput} type="text" id='email' name="email" onChange={handleInputChange} defaultValue={user.email} />
                </div>
                <div>
                    <button css={S.SButton} onClick={handleSaveClick}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default MyPage;























