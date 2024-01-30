import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Banner.module.scss';
import { homePageBanners, homePageSlider } from '../../../assets/img';
import { FaSteam, FaGraduationCap, FaWindows, FaGoogleDrive, FaGooglePlay } from 'react-icons/fa';
import { GiConsoleController, GiSuitcase } from 'react-icons/gi';
import { Md4GPlusMobiledata, MdAccountBalanceWallet, MdOutlineGames } from 'react-icons/md';

import SlideScrollable from '../../../components/SlideScrollable';

function Banner(props) {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleOnUpdateSlideIndex = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className="w-screen flex justify-center items-center p-7">
            <div className="xl:w-layout lg:w-screen md:w-screen sm:w-screen">
                <div className="grid grid-cols-4 gap-[20px] ">
                    <div className="rounded-lg bg-white p-[7px] row-start-1 row-end-3 md:hidden sm:hidden">
                        <div className="text-black">
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <GiConsoleController className="text-[21px]" />
                                <p>Giải trí</p>
                            </div>
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <GiSuitcase className="text-[21px]" />
                                <p>Làm việc</p>
                            </div>
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <FaGraduationCap className="text-[21px]" />
                                <p>Học Tập</p>
                            </div>
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <FaSteam className="text-[21px]" />
                                <p>Game Steam </p>
                            </div>
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <MdOutlineGames className="text-[21px]" />
                                <p>EA Games</p>
                            </div>
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <FaWindows className="text-[21px]" />
                                <p>Window Office</p>
                            </div>
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <FaGoogleDrive className="text-[21px]" />
                                <p>Google Drive</p>
                            </div>
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <MdAccountBalanceWallet className="text-[21px]" />
                                <p>Steam Wallet</p>
                            </div>
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <Md4GPlusMobiledata className="text-[21px]" />
                                <p>Gói Data Mobile</p>
                            </div>
                            <div className="flex items-center justify-left gap-3 py-[3px] px-[10px] hover:bg-gray-100 cursor-pointer">
                                <FaGooglePlay className="text-[21px]" />
                                <p>Goole Plays, iTunes</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg col-span-2 row-span-2 md:col-span-full md:row-span-2 sm:col-span-full sm:row-span-2">
                        <SlideScrollable
                            slideShowItemLength={homePageSlider.length - 1}
                            translatePercent={100}
                            forceTranslateTo={slideIndex}
                            updateThumbnailIndex={handleOnUpdateSlideIndex}
                            settingSlideLayout={{
                                display: 'flex',
                                height: '100%',
                                borderRadius: '0.5rem',
                            }}
                        >
                            {homePageSlider.map((slide, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={slide}
                                        alt="slideImage"
                                        className="xl:h-[316px] rounded-lg w-[100%]"
                                    />
                                );
                            })}
                        </SlideScrollable>

                        <SlideScrollable
                            slideShowItemLength={homePageSlider.length - 1}
                            translatePercent={0}
                            autoTranslate={false}
                            showBtn={false}
                            settingSlideLayout={{
                                display: 'flex',
                                position: 'absolute',
                                bottom: '10px',
                                right: '50%',
                                transform: 'translateX(50%)',
                            }}
                        >
                            <div className={clsx(styles.slideshowDots)}>
                                {homePageSlider.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={clsx(styles.slideshowDot, 'sm:h-[6px] sm:w-[6px]', {
                                            [styles.active]: slideIndex === idx,
                                        })}
                                        onClick={() => handleOnUpdateSlideIndex(idx)}
                                    ></div>
                                ))}
                            </div>
                        </SlideScrollable>
                    </div>
                    <Link
                        to={'/search/featured'}
                        className="rounded-lg md:col-span-2 md:row-span-1 sm:row-span-1 sm:col-span-2"
                    >
                        <img src={homePageBanners[0]} alt="imgBanner" className="rounded-lg" />
                    </Link>
                    <Link
                        to={'/search/featured'}
                        className="rounded-lg md:col-span-2 md:row-span-1 sm:row-span-1 sm:col-span-2"
                    >
                        <img src={homePageBanners[1]} alt="imgBanner" className="rounded-lg" />
                    </Link>
                    <Link to={'/search/featured'} className="rounded-lg sm:row-span-1 sm:col-span-2">
                        <img src={homePageBanners[2]} alt="imgBanner" className="rounded-lg" />
                    </Link>
                    <Link to={'/search/featured'} className="rounded-lg sm:row-span-1 sm:col-span-2">
                        <img src={homePageBanners[3]} alt="imgBanner" className="rounded-lg" />
                    </Link>
                    <Link to={'/search/featured'} className="rounded-lg sm:row-span-1 sm:col-span-2">
                        <img src={homePageBanners[4]} alt="imgBanner" className="rounded-lg" />
                    </Link>
                    <Link to={'/search/featured'} className="rounded-lg sm:row-span-1 sm:col-span-2">
                        <img src={homePageBanners[5]} alt="imgBanner" className="rounded-lg" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
