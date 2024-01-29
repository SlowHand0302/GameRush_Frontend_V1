import { useState } from 'react';
import clsx from 'clsx';

import styles from './Header.module.scss';
import { logo } from '../assets/img';
import { IoIosArrowForward, IoIosArrowBack, IoIosSearch } from 'react-icons/io';
import { FaBook, FaEye, FaFire, FaPercent, FaCreditCard, FaUserAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { LuBadgePercent, LuShoppingCart, LuMenu } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';

import Overlay from './Overlay';
import Sidebar from './Sidebar';

function Header(props) {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleOnCloseSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const handleOnWrapperClick = (event) => {
        event.stopPropagation();
    };
    return (
        <>
            <header className="text-white text-[14px]">
                <div className="w-screen flex justify-center items-center bg-blue-700 xl:flex lg:flex md:hidden sm:hidden">
                    <div className={clsx(styles.topHeader, 'flex justify-between py-5 xl:w-[1200px] lg:w-screen')}>
                        <div className="flex gap-2 items-center cursor-pointer">
                            <IoIosArrowBack /> <IoIosArrowForward /> Pad chuột Divide
                        </div>
                        <div className="flex justify-between gap-4">
                            <p className="flex gap-2 items-center cursor-pointer">
                                <FaBook />
                                Hướng dẫn mua hàng
                            </p>
                            <p className="flex gap-2 items-center cursor-pointer">
                                <LuBadgePercent />
                                Ưu đãi khách hàng
                            </p>
                            <p className="flex gap-2 items-center cursor-pointer">
                                <FiPhone />
                                Thông tin liên hệ
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-screen flex justify-center items-center bg-blue-500">
                    <div className={clsx(styles.mainHeader, 'py-5 xl:w-[1200px] lg:w-screen md:w-screen sm:w-screen')}>
                        <div className="flex justify-between items-center">
                            <div className="logo flex items-center p-[10.5px] xl:flex lg:flex md:hidden sm:hidden ">
                                <img src={logo} alt="logo" width={49} height={49} />
                                <p className="text-4xl font-bold">Divide Shop</p>
                            </div>
                            <div
                                className="logo flex items-center xl:hidden lg:hidden md:block sm:block"
                                onClick={handleOnCloseSidebar}
                            >
                                <div className={clsx(styles.sidebarIcon)}>
                                    <LuMenu />
                                </div>
                            </div>
                            <div className="flex items-center relative p-[10.5px] md:max-w-[367px] sm:max-w-[367px]">
                                <input
                                    className={clsx(styles.search)}
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="Tìm kiếm sản phẩm"
                                />
                                <div className={clsx(styles.searchButton)}>
                                    <IoIosSearch />
                                </div>
                                <div className={clsx(styles.searchResult)}>
                                    <p>searchResult</p>
                                    <p>searchResult</p>
                                    <p>searchResult</p>
                                    <p>searchResult</p>
                                    <p>searchResult</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-[10.5px] sm:hidden">
                                <div className={clsx(styles.userIcon, styles.icon)}>
                                    <FaUserAlt />
                                </div>
                                <p>
                                    <span className="font-medium cursor-pointer">Đăng Nhập</span> /{' '}
                                    <span className="font-medium cursor-pointer">Đăng Ký</span>
                                </p>
                            </div>
                            <div className="rounded-md border pr-[12.5px] flex items-center justify-center mr-[10.5px]">
                                <div className={clsx(styles.icon)}>
                                    <LuShoppingCart />
                                </div>
                                <p className="sm:hidden">Giỏ hàng</p>
                                <p className="bg-white rounded-sm text-black ml-1 p-1 font-medium">0</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-[17.5px] md:hidden sm:hidden">
                            <div className="flex gap-2 items-center cursor-pointer p-[10.5px]">
                                <FaEye />
                                <p>Sản phẩm bạn vừa xem</p>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer px-[10.5px]">
                                <FaFire />
                                <p>Sản phẩm mua nhiều</p>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer px-[10.5px]">
                                <FaPercent />
                                <p>Sản phẩm khuyến mãi</p>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer px-[10.5px]">
                                <FaMapLocationDot />
                                <p>Đại lý giao dịch</p>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer px-[10.5px]">
                                <FaCreditCard />
                                <p>Hình thức thanh toán</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomHeader"></div>
            </header>
            {showSidebar && (
                <Overlay onClick={handleOnCloseSidebar}>
                    <Sidebar onContainerClick={handleOnWrapperClick} />
                </Overlay>
            )}
        </>
    );
}

export default Header;
