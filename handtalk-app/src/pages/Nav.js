import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"; // ℹ️ 소개 아이콘

const Nav = () => {
    return (
        <>
            {/* 소개 페이지 (아이콘 적용) */}
            <Link to="/About" className="text-gray-700 hover:text-blue-500 text-4xl p-4">
                <FontAwesomeIcon icon={faCircleInfo} />
            </Link>

            {/* 홈 페이지 링크 */}
            <Link to="/">
                <div className="text-7xl font-bold text-black flex justify-center p-10 m-10 bg-cover bg-center">
                    SilentTalk
                </div>
            </Link>
        </>
    );
};

export default Nav;
