import { Link } from 'react-router-dom';

function Section(props) {
    const { title, subTitle, hideBtn = false, styles = null, children } = props;
    return (
        <div className="w-screen flex justify-center items-center p-7 border-b border-gray-200">
            <div className="xl:w-layout lg:w-screen md:w-screen sm:w-screen">
                <div className="flex justify-between items-center">
                    <p className="text-[21px] font-bold">{title}</p>
                    {!hideBtn && (
                        <Link
                            to={'/search/featured'}
                            className="bg-blue-500 text-white px-[14px] rounded-lg font-semibold hover:opacity-80"
                        >
                            Khám phá
                        </Link>
                    )}
                </div>
                <p className="mb-5">{subTitle}</p>
                <div
                    className={styles ? styles : 'grid grid-cols-4 gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'}
                >
                    {children}
                </div>
                {/* <div className="justify-center cursor-pointer flex items-center mt-[14px] text-blue-500 font-semibold text-[14px]">
                    Xem thêm
                </div> */}
            </div>
        </div>
    );
}

export default Section;
