import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import { categories } from '../../../constants/dummyData';
import QuantityInput from '../../../components/Form/Select';

function AddNewProductType(props) {
    const [filterOptions, setFilterOptions] = useState({
        typeName: '',
        description: '',
        originalPrice: 0,
        sellPrice: 0,
        category: '',
        isHot: false,
    });

    const handleOnFilterOptionsChange = (data) => {
        setFilterOptions({ ...filterOptions, [Object.keys(data)[0]]: Object.values(data)[0] });
    };

    console.log(filterOptions);
    return (
        <div className="my-4 bg-white rounded-xl mx-5 w-full">
            <p className="font-bold text-[20px]">Add New Product</p>
            <form className="mt-[20px] pr-5 flex flex-col">
                <div className="flex gap-10 mt-10">
                    <Input
                        type={'text'}
                        id={'typeName'}
                        value={filterOptions.typeName}
                        label={'Type Name'}
                        placeHolder={'Please enter Type Name'}
                        onChange={handleOnFilterOptionsChange}
                        customClass={'md:w-[49%]'}
                    />
                    <Input
                        type={'text'}
                        id={'description'}
                        value={filterOptions.description}
                        label={'Description'}
                        placeHolder={'Please enter description'}
                        onChange={handleOnFilterOptionsChange}
                        customClass={'md:w-[49%]'}
                    />
                </div>
                <div className="flex gap-10 mt-10">
                    <Input
                        type={'number'}
                        id={'originalPrice'}
                        value={filterOptions.originalPrice}
                        label={'Original Price'}
                        placeHolder={'Please enter Original Price'}
                        onChange={handleOnFilterOptionsChange}
                        customClass={'md:w-[49%]'}
                    />
                    <Input
                        type={'number'}
                        id={'sellPrice'}
                        value={filterOptions.sellPrice}
                        label={'Sell Price'}
                        placeHolder={'Please enter Sell Price'}
                        onChange={handleOnFilterOptionsChange}
                        customClass={'md:w-[49%]'}
                    />
                </div>
                <Select
                    id={'category'}
                    selectValues={categories}
                    value={filterOptions.category}
                    label={'Category'}
                    placeHolder={'Please choose a Category'}
                    onSelect={handleOnFilterOptionsChange}
                    customClass={'md:w-[49%] mt-10'}
                />
                <div className='flex gap-3 mb-10'>
                    <input
                        type="checkbox"
                        name="isHot"
                        id="isHot"
                        onChange={() => handleOnFilterOptionsChange({ isHot: !filterOptions.isHot })}
                        value={filterOptions.isHot}
                    />
                    <label htmlFor="isHot">isHot?</label>
                </div>
                <div className="bg-green-500 py-3 px-8 text-center rounded-xl text-white 2sm:px-12">Add</div>
            </form>
        </div>
    );
}

export default AddNewProductType;
