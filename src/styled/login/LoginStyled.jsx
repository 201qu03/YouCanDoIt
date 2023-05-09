import styled from 'styled-components';

// 기본 틀
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// 뒤로가기 버튼
export const Back = styled.div`
    position: absolute;
    cursor: pointer;
`;

// 상단 텍스트
export const Title = styled.div`
    width: 381px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
    cursor: default;
`;

/* 로그인 하위(회원가입, 아이디찾기, 비밀번호 찾기)페이지에 사용되는 스타일 */

// 정보 입력 영역
export const InputArea = styled.div`
    width: 381px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

// 찾기 메뉴
export const FindMenu = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #B1B1B1;
    cursor: pointer;
    font-size: 13px;
`;

// 선택된 메뉴
export const SelectedMenu = styled.div`
    width: 50%;
    height: 100%;
    background-color: #FFF6A7;
    text-align: center;
    line-height: 40px;
    
    :not(:last-child) {
        border-right: 1px solid #B1B1B1;
    }

    :last-child {
        border-left: 1px solid #B1B1B1;
    }
`;

// 선택되지않은 메뉴
export const NotSelectedMenu = styled.div`
    width: 50%;
    height: 100%;
    color: #878787;
    text-align: center;
    line-height: 40px;
`;

// submit 버튼
export const SubmitButton = styled.button`
    width: 381px;
    height: 42px;
    background-color: #FFF066;
    border:1px solid #B1B1B1;
    border-radius: 10px;
    margin-top: 40px;
    cursor: pointer;
`;

