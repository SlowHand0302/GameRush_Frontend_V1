import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiFilter, FiRefreshCw } from 'react-icons/fi';

import ProductCard from '../../components/ProductCard';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import products from '../../constants/dummyData/products';
// start dummy data
import { categories, genres, sortOptions } from '../../constants/dummyData';
// end dummy data
function ProductsPage(props) {
    const [selectCategory, setSelectCategory] = useState('Tất cả');
    const [selectGenre, setSelectGenre] = useState('Tất cả');
    const [rangePrice, setRangePrice] = useState({ upper: 0, lower: 0 });
    const [sortOption, setSortOption] = useState('Mặc định');

    const handleOnSelectCategory = (data) => {
        setSelectCategory(Object.values(data)[0]);
    };
    const handleOnSelectGenre = (data) => {
        setSelectGenre(Object.values(data)[0]);
    };
    const handleSetRangePrice = (data) => {
        setRangePrice({ ...rangePrice, [Object.keys(data)[0]]: parseInt(Object.values(data)[0]) });
    };
    const handleOnSelectSortOption = (data) => {
        setSortOption(Object.values(data)[0]);
    };
    const handleOnResetFilter = () => {
        setSelectCategory('Tất cả');
        setSelectGenre('Tất cả');
        setRangePrice({ upper: 0, lower: 0 });
        setSortOption('Mặc định');
    };

    return (
        <div className="w-screen flex justify-center items-center p-7 bg-gray-100">
            <div className="xl:w-layout lg:w-screen md:w-screen sm:w-screen">
                <div className="font-bold text-[31.5px]">Tìm kiếm sản phẩm</div>
                <form className="flex justify-between gap-10 items-center md:flex-wrap md:justify-normal md:gap-[14px] sm:flex-wrap sm:gap-0">
                    <Select
                        id={'category'}
                        selectValues={categories}
                        value={selectCategory}
                        label={'Danh mục'}
                        placeHolder={'Tất cả'}
                        onSelect={handleOnSelectCategory}
                        customClass={'md:w-[49%]'}
                    />
                    <Select
                        id={'genre'}
                        selectValues={genres}
                        value={selectGenre}
                        label={'Thể Loại'}
                        placeHolder={'Tất cả'}
                        onSelect={handleOnSelectGenre}
                        customClass={'md:w-[49%]'}
                    />
                    <div className="flex items-center gap-3 xl:w-[250%] lg:w-[150%] md:gap-[14px] md:w-[49%] sm:w-[100%]">
                        <p className="whitespace-nowrap lg:hidden md:hidden sm:hidden 2sm:hidden">Mức giá: </p>
                        <Input
                            type={'number'}
                            id={'upper'}
                            value={rangePrice.upper}
                            label={'Mức giá từ'}
                            placeHolder={'Mức giá từ'}
                            onChange={handleSetRangePrice}
                            customClass={'md:w-[49%]'}
                        />
                        <p className="lg:hidden md:hidden sm:hidden 2sm:hidden">-</p>
                        <Input
                            type={'number'}
                            id={'lower'}
                            value={rangePrice.lower}
                            label={'Mức giá đến'}
                            placeHolder={'Mức giá đến'}
                            onChange={handleSetRangePrice}
                            customClass={'md:w-[49%]'}
                        />
                    </div>
                    <Select
                        id={'sort'}
                        selectValues={sortOptions}
                        value={sortOption}
                        label={'Sắp xếp'}
                        placeHolder={'Sắp xếp'}
                        onSelect={handleOnSelectSortOption}
                        customClass={'md:w-[49%]'}
                    />
                    <Link
                        to={'/search/featured'}
                        className="bg-blue-500 text-white p-[7px] flex items-center rounded-lg font-semibold text-center hover:opacity-80 md:justify-items-start"
                    >
                        <FiFilter className="h-[20px] w-[20px]" /> Lọc
                    </Link>
                </form>
                <div
                    className="text-red-300 flex justify-start items-center gap-3 pb-3 cursor-pointer"
                    onClick={handleOnResetFilter}
                >
                    <FiRefreshCw />
                    Khôi phục bộ lọc
                </div>
                <div className="grid grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 sm:gap-3">
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
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
