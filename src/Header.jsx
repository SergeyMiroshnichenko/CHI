import React from "react";
import Logo from "./img/Logo.png";
const Header=()=> {
    return (
        <div className="header">
            <div className="contact_information">
                <div className="logo">
                    <img src={Logo}></img>
                </div>
                <div className="tel">
                    <a>+380509377934 </a>
                    <a>+380930279652</a>
                </div>
                <button className="call_me">Call me</button>
                <div class="searc_site">
                    <form>
                        <input type="text" placeholder="Искать здесь..."/>
                        <button type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Header