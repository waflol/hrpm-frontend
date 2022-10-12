import React from 'react'
import AuthActions from './AuthActions';
import LogoNav from './LogoNav';
import NavBarToggle from './NavBarToggle';
import NavLinks from './NavLinks';
const MainNavigation = props => {
    return (
        <div className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <LogoNav />
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <NavBarToggle />
                            <nav
                                id="navbarCollapse"
                                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
                            >
                                <NavLinks />
                            </nav>
                        </div>
                        <AuthActions />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNavigation;