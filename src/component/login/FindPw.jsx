import React from "react";
import {useNavigate} from "react-router-dom";
import * as S from "styled/login/LoginStyled";
import Inputs from "./input/Inputs";

function FindPw(props) {
    const navi = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navi("/")}>
                    <img src="/login/GoBack.png"/>
                </S.Back>
                비밀번호 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.NotSelectedMenu onClick={() => navi("/findId")}>아이디 찾기</S.NotSelectedMenu>
                    <S.SelectedMenu>비밀번호 찾기</S.SelectedMenu>
                </S.FindMenu>
                <Inputs type="text" name="아이디"/>
                <Inputs type="phone"/>
                <Inputs type="cert"/>
            </S.InputArea>
            <S.SubmitButton>비밀번호 찾기</S.SubmitButton>
        </S.Wrapper>
    );
}

export default FindPw;