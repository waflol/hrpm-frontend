import React, { Suspense } from "react";
import TopBar from "./Header/TopBar";
import MainNavBar from "./Navigations/MainNavBar";
import Subscribe from "./Subscribe";
import ScrolltoTop from "./ScrolltoTop";
import Footer from "./Footer/Footer";
import StyleSwitcher from "./StyleSwitcher";
const index = (props) => {
    return (
        <React.Fragment>
            <Suspense>
                <div>
                    <TopBar/>
                    <MainNavBar/>
                    <div className="main-content">
                        <div className="page-content">{props.children}</div>
                    </div>
                    <Subscribe/>
                    <ScrolltoTop/>
                    <Footer/>
                    <StyleSwitcher/>
                </div>
            </Suspense>
        </React.Fragment>
    );
}

export default index