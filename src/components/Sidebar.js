import clsx from 'clsx';
import styles from './Sidebar.module.scss';
import {
    FaUserAlt,
    FaHome,
    FaSteam,
    FaGraduationCap,
    FaWindows,
    FaGoogleDrive,
    FaGooglePlay,
    FaBook,
} from 'react-icons/fa';
import { FiPlusCircle, FiPhone } from 'react-icons/fi';
import { GiConsoleController, GiSuitcase } from 'react-icons/gi';
import { Md4GPlusMobiledata, MdAccountBalanceWallet, MdOutlineGames } from 'react-icons/md';
import { LuBadgePercent } from 'react-icons/lu';

function Sidebar(props) {
    const { onContainerClick } = props;
    return (
        <div onClick={(event) => onContainerClick(event)} className="bg-white h-full w-[280px] overflow-y-auto">
            <div className="">
                <div className="flex items-center justify-center  gap-3 p-[10.5px] bg-blue-500 text-white">
                    <div className={clsx(styles.userIcon, styles.icon)}>
                        <FaUserAlt />
                    </div>
                    <p>
                        <span className="font-medium cursor-pointer">Đăng Nhập</span> /{' '}
                        <span className="font-medium cursor-pointer">Đăng Ký</span>
                    </p>
                </div>
            </div>
            <div className="text-black px-[19.5px] py-[21px]">
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <FaHome />
                    <p>Trang chủ</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <FiPlusCircle />
                    <p>Nạp tiền vào tài khoản</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer border-gray-100 border-t">
                    <GiConsoleController />
                    <p>Giải trí</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <GiSuitcase />
                    <p>Làm việc</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <FaGraduationCap />
                    <p>Học Tập</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <FaSteam />
                    <p>Game Steam </p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <MdOutlineGames />
                    <p>EA Games</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <FaWindows />
                    <p>Window Office</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <FaGoogleDrive />
                    <p>Google Drive</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <MdAccountBalanceWallet />
                    <p>Steam Wallet</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <Md4GPlusMobiledata />
                    <p>Gói Data Mobile</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <FaGooglePlay />
                    <p>Goole Plays, iTunes</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer border-gray-100 border-t">
                    <FaBook />
                    <p>Hướng dẫn mua hàng</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <LuBadgePercent />
                    <p>Ưu đãi khách hàng</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] cursor-pointer">
                    <FiPhone />
                    <p>Thông tin liên hệ</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
