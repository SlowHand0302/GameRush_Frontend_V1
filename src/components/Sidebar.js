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
import { Md4GPlusMobiledata, MdAccountBalanceWallet, MdOutlineGames, MdOutlineClose } from 'react-icons/md';
import { LuBadgePercent } from 'react-icons/lu';

function Sidebar(props) {
    const { onClick, onCloseSidebar } = props;
    return (
        <div onClick={(event) => onClick(event)} className="bg-white h-full w-[280px] overflow-y-auto">
            <div className="">
                <div className="flex items-center justify-center gap-3 p-[10.5px] bg-blue-500 text-white">
                    <div className={clsx(styles.userIcon, styles.icon)}>
                        <FaUserAlt />
                    </div>
                    <p>
                        <span className="font-medium cursor-pointer">Đăng Nhập</span> /{' '}
                        <span className="font-medium cursor-pointer">Đăng Ký</span>
                    </p>
                    <div className={clsx(styles.icon)} onClick={onCloseSidebar}>
                        <MdOutlineClose />
                    </div>
                </div>
            </div>
            <div className="text-black px-[19.5px] py-[21px]">
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <FaHome className="text-[21px]" />
                    <p>Trang chủ</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <FiPlusCircle className="text-[21px]" />
                    <p>Nạp tiền vào tài khoản</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer border-gray-200 border-t">
                    <GiConsoleController className="text-[21px]" />
                    <p>Giải trí</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <GiSuitcase className="text-[21px]" />
                    <p>Làm việc</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <FaGraduationCap className="text-[21px]" />
                    <p>Học Tập</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <FaSteam className="text-[21px]" />
                    <p>Game Steam </p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <MdOutlineGames className="text-[21px]" />
                    <p>EA Games</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <FaWindows className="text-[21px]" />
                    <p>Window Office</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <FaGoogleDrive className="text-[21px]" />
                    <p>Google Drive</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <MdAccountBalanceWallet className="text-[21px]" />
                    <p>Steam Wallet</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <Md4GPlusMobiledata className="text-[21px]" />
                    <p>Gói Data Mobile</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <FaGooglePlay className="text-[21px]" />
                    <p>Goole Plays, iTunes</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer border-gray-200 border-t">
                    <FaBook className="text-[21px]" />
                    <p>Hướng dẫn mua hàng</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <LuBadgePercent className="text-[21px]" />
                    <p>Ưu đãi khách hàng</p>
                </div>
                <div className="flex items-center justify-left gap-3 p-[10px] hover:bg-gray-100 cursor-pointer">
                    <FiPhone className="text-[21px]" />
                    <p>Thông tin liên hệ</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
