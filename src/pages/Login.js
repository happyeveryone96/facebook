import React from "react";
import "./Login.css";
import f_spell_logo from "../shared/f_spell_logo.png";

const Login = () => {
    return (
        <div className="login">
            <div style={{ backgroundColor: "#EFF2F5" }}>
                <div className="login_logo">
                    <img src={f_spell_logo} alt="" />
                    <h2>
                        Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Login;