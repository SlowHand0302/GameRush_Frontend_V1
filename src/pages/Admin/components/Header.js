import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

// import { logos } from '../../../assets/img';
import { SlEnvolopeLetter, SlBell, SlMenu } from 'react-icons/sl';
import { BsListTask } from 'react-icons/bs';

import { AdminSidebar } from './Sidebar';
import Breadcrumb from './Breadcrumb';

function Header(props) {
    const { children } = props;
    const location = useLocation();
    const [openSidebar, setOpenSidebar] = useState(false);
    const [forceOpenSidebar, setForceOpenSidebar] = useState(true);
    const handleOnOpenSidebar = (status) => {
        setOpenSidebar(status);
    };

    return (
        <div className="w-full flex relative">
            <div className="absolute">
                <AdminSidebar
                    OnOpenSidebar={handleOnOpenSidebar}
                    sidebarState={openSidebar}
                    forceSidebarState={forceOpenSidebar}
                />
            </div>
            <div className="w-full relative flex-grow bg-gray-100">
                <header className="w-full bg-white text-[16px] ">
                    <nav className="flex justify-between items-center h-full p-5">
                        <div className="flex gap-5 items-center">
                            <SlMenu className="cursor-pointer" onClick={() => setForceOpenSidebar(!forceOpenSidebar)} />
                            <Link to="/admin" className="2sm:hidden">
                                Dashboard{' '}
                            </Link>
                            <Link to="/admin/account" className="2sm:hidden">
                                User{' '}
                            </Link>
                            <Link to="/admin/setting/website" className="2sm:hidden">
                                Settings{' '}
                            </Link>
                        </div>
                        <div className="flex gap-5 text-[20px]">
                            <Link>
                                <SlBell />
                            </Link>
                            <Link>
                                <SlEnvolopeLetter />
                            </Link>
                            <Link>
                                <BsListTask />
                            </Link>
                        </div>
                    </nav>
                    <hr className="h-px w-full my-4 bg-gray-200 border-0"></hr>
                    <Breadcrumb location={location} />
                    <hr className="h-px w-full my-4 bg-gray-200 border-0"></hr>
                </header>
                {children}
            </div>
        </div>
    );
}

export { Header as AdminHeader };
