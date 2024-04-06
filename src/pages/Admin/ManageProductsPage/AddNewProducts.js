import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Form/Input';
import Select from '../../../components/Form/Select';
import QuantityInput from '../../../components/Form/Select';

function AddNewProduct(props) {
    const [filterOptions, setFilterOptions] = useState({
        encryptedData: '',
        expiry: '',
        productType: '',
    });

    const handleOnFilterOptionsChange = (data) => {
        setFilterOptions({ ...filterOptions, [Object.keys(data)[0]]: Object.values(data)[0] });
    };


    return (
        <div className="my-4 bg-white rounded-xl mx-5">
            <p className="font-bold text-[20px]">Add New Product</p>
            <form className="mt-[20px] max-w-[80%]">
                <div className="flex gap-10 content-center">
                    <Input
                        type={'text'}
                        id={'encryptedData'}
                        value={filterOptions.encryptedData}
                        label={'Encrypted Data'}
                        placeHolder={'Please enter Encrypted Data'}
                        onChange={handleOnFilterOptionsChange}
                        customClass={'md:w-[49%]'}
                    />
                    <Input
                        type={'text'}
                        id={'productType'}
                        value={filterOptions.productType}
                        label={'Product Type'}
                        placeHolder={'Please enter Product Type'}
                        onChange={handleOnFilterOptionsChange}
                        customClass={'md:w-[49%]'}
                    />
                    <Input
                        type={'text'}
                        id={'expiry'}
                        value={filterOptions.expiry}
                        label={'Expire Date'}
                        placeHolder={'Please enter Expire Date'}
                        onChange={handleOnFilterOptionsChange}
                        customClass={'md:w-[49%]'}
                    />
                    <Link className="bg-green-500 py-3 px-8 text-center rounded-xl text-white 2sm:px-12">Add</Link>
                </div>
            </form>
        </div>
    );
}

export default AddNewProduct;
