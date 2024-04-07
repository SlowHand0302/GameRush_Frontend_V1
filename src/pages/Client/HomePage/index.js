import { Link } from 'react-router-dom';

import Banner from './Banner';
import Section from './Section';
import ProductCard from '../components/ProductCard';
import { formatCash } from '../../../utils/helpers';
// dummydata
// import products from '../../../constants/dummyData/products';
// import categories from '../../../constants/dummyData/category';
import { homePageBanners, homePageSlider } from '../../../assets/img';

import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage(props) {
    const recommendPrices = [20000, 50000, 100000, 200000, 500000, 1000000];
    const colors = ['bg-blue-900', 'bg-blue-300', 'bg-red-600', 'bg-gray-800', 'bg-orange-300', 'bg-gray-400'];
    const mainKeys = ['Làm việc', 'Giải trí', 'Học tập', 'Spotify', 'Wallet', 'Youtube'];

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getProductTypes() {
            const options = {
                url: `http://localhost:5000/api/productType/readMany`,
                method: 'GET',
            };

            await axios
                .request(options)
                .then((response) => {
                    const result = response.data;
                    setProducts(result.types);
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        getProductTypes();
    }, []);

    useEffect(() => {
        async function getCatgories() {
            const options = {
                url: 'http://localhost:5000/api/category/readMany',
                method: 'GET',
            };

            await axios
                .request(options)
                .then((response) => {
                    const result = response.data;
                    setCategories(result.categories );
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        getCatgories();
    }, []);

    return (
        <div className="bg-gray-100 w-full">
            <Banner banners={homePageBanners} sliders={homePageSlider} />
            <Section
                title={'Từ khoá nổi bật'}
                hideBtn={true}
                styles={'grid grid-cols-6 gap-10 sm:grid-cols-3 sm:gap-3 2sm:grid-cols-3 2sm:gap-3'}
            >
                {mainKeys.map((key, index) => {
                    return (
                        <Link
                            key={index}
                            to={'/search/featured'}
                            className={`rounded-xl text-center p-[20px] sm:p-[3px] 2sm:p-[3px] 2sm:text-[10px] text-white ${colors[index]}`}
                        >
                            {key}
                        </Link>
                    );
                })}
            </Section>
            <Section
                title={'Giá phù hợp'}
                hideBtn={true}
                styles={'grid grid-cols-6 gap-10 sm:grid-cols-3 sm:gap-3 2sm:grid-cols-3 2sm:gap-3'}
            >
                {recommendPrices.map((price, index) => {
                    return (
                        <Link
                            to={'/search/featured'}
                            key={index}
                            className="rounded-xl text-center p-[20px] sm:p-[3px] 2sm:p-[3px] 2sm:text-[10px] bg-white border border-black"
                        >
                            {formatCash(price)}
                        </Link>
                    );
                })}
            </Section>

            <Section title="Sẩn phẩm nổi bật" products={products.filter((product) => product.isHot === 1)}>
                {products.map((product, index) => {
                    if (product.isHot === 1) {
                        return (
                            <ProductCard
                                key={index}
                                name={product.typeName}
                                link={product.url || ''}
                                price={product.originalPrice}
                                discount={100 - Math.floor((product.sellPrice / product.originalPrice) * 100)}
                                img={`http://localhost:1337${product?.image?.data?.attributes?.url}`}
                                status={product.status}
                            />
                        );
                    }
                })}
            </Section>

            {categories.map((category, index) => {
                console.log(category);
                return (
                    <Section key={index} title={category.categoryName} products={products}>
                        {products.map((product, index) => {
                            if (
                                product.attributes?.categoryId?.data?.attributes?.categoryId ===
                                category?.attributes?.categoryId
                            ) {
                                return (
                                    <ProductCard
                                        key={index}
                                        name={product.typeName}
                                        link={product.url || ''}
                                        price={product.originalPrice}
                                        discount={100 - Math.floor((product.sellPrice / product.originalPrice) * 100)}
                                        img={`http://localhost:1337${product?.image?.data?.attributes?.url}`}
                                        status={product.status}
                                    />
                                );
                            }
                        })}
                    </Section>
                );
            })}
        </div>
    );
}

export default HomePage;
