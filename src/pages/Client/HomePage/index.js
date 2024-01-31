import { Link } from 'react-router-dom';

import Banner from './Banner';
import Section from './Section';
import ProductCard from '../../../components/ProductCard';
import { formatCash } from '../../../utils/helpers';
// dummydata
import products from '../../../constants/dummyData/products';
import categories from '../../../constants/dummyData/category';
import { homePageBanners, homePageSlider } from '../../../assets/img';

function HomePage(props) {
    return (
        <div className="bg-gray-100 w-screen">
            <Banner banners={homePageBanners} sliders={homePageSlider} />
            <Section
                title={'Từ khoá nổi bật'}
                hideBtn={true}
                styles={'grid grid-cols-6 gap-10 sm:grid-cols-3 sm:gap-3'}
            >
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] text-white bg-blue-900">
                    Làm việc
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] text-white bg-blue-200">
                    Giải trí
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] text-white bg-red-600">
                    Học tập
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] text-white bg-gray-800">
                    Spotify
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] text-white bg-gray-500">
                    Wallet
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] text-white bg-gray-300">
                    Youtube
                </Link>
            </Section>
            <Section title={'Giá phù hợp'} hideBtn={true} styles={'grid grid-cols-6 gap-10 sm:grid-cols-3 sm:gap-3'}>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] bg-white border border-black">
                    {formatCash(20000)}
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] bg-white border border-black">
                    {formatCash(50000)}
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] bg-white border border-black">
                    {formatCash(100000)}
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] bg-white border border-black">
                    {formatCash(200000)}
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] bg-white border border-black">
                    {formatCash(500000)}
                </Link>
                <Link to={'/'} className="rounded-xl text-center p-[20px] sm:p-[3px] bg-white border border-black">
                    {formatCash(1000000)}
                </Link>
            </Section>
            {categories.map((category, index) => {
                return (
                    <Section key={index} title={category.title} subTitle={category.subTitle} products={products}>
                        {products.map((product, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    name={product.name}
                                    price={product.originPrice}
                                    discount={product.discount}
                                    img={product.img}
                                    status={product.status}
                                />
                            );
                        })}
                    </Section>
                );
            })}
        </div>
    );
}

export default HomePage;
