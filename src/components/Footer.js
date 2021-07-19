import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div className="language">
                <div>한국어</div>
                <div className="language_option">English(US)</div>
                <div className="language_option">Tiếng Việt</div>
                <div className="language_option">Bahasa Indonesia</div>
                <div className="language_option">ภาษาไทย</div>
                <div className="language_option">Español</div>
                <div className="language_option">中文(简体)</div>
                <div className="language_option">日本語</div>
                <div className="language_option">Português(Brasil)</div>
                <div className="language_option">Français(France)</div>
                <div className="language_option">Deutsch</div>
                <button>+</button>
            </div>
            <hr className="hr w0_25" />
            <div className="options">
                <div className="options1">
                    <div>가입하기</div>
                    <div>로그인</div>
                    <div>Messenger</div>
                    <div>Facebook Lite</div>
                    <div>Watch</div>
                    <div>사람</div>
                    <div>페이지</div>
                    <div>페이지 카테고리</div>
                    <div>장소</div>
                    <div>게임</div>
                    <div>위치</div>
                    <div>Marketplace</div>
                    <div>Facebook Pay</div>
                    <div>그룹</div>
                    <div>채용 정보</div>
                </div>
                <div className="options2">
                    <div>Oculus</div>
                    <div>Portal</div>
                    <div>Instagram</div>
                    <div>지역</div>
                    <div>기부 캠페인</div>
                    <div>서비스</div>
                    <div>투표 정보 센터</div>
                    <div>정보</div>
                    <div>광고 만들기</div>
                    <div>페이지 만들기</div>
                    <div>개발자</div>
                    <div>채용 정보</div>
                    <div>개인정보처리방침</div>
                    <div>쿠키</div>
                </div>
                <div className="options3">
                    <div>Adchoices</div>
                    <div>이용 약관</div>
                    <div>고객 센터</div>
                </div>
            </div>
            <footer className="footer">Facebook © 2021</footer>
        </div>
    )
}

export default Footer;
