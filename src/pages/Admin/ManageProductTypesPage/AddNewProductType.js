import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { categories } from '../../../constants/dummyData';
import QuantityInput from '../../../components/Form/Select';
import Input from '../components/Form/Input';
import Select from '../components/Form/Select';
import axios from 'axios';
import UploadBox from '../components/Form/UploadBox';
import Table from '../components/Table';

function AddNewProductType(props) {
    const [filterOptions, setFilterOptions] = useState({
        typeName: '',
        description: '',
        originalPrice: 0,
        sellPrice: 0,
        category: '',
        isHot: false,
    });

    const [categories, setCategories] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');


    const handleOnFilterOptionsChange = (data) => {
        setFilterOptions({ ...filterOptions, [Object.keys(data)[0]]: Object.values(data)[0] });
    };

    const [formAddNewProductType, setFormAddNewProductType] = useState({
        typeName: '',
        category: '',
        originalPrice: 0,
        sellPrice: 0,
        description: '',
    });

    const ClearInputs = () => {
        setFormAddNewProductType({
            typeName: '',
            category: '',
            originalPrice: 0,
            sellPrice: 0,
            description: '',
        });
    };

    const handleAddProductType = () => {
        // console.log(formAddNewProductType);

        const InsertNewProductType = async () => {
            const options = {
                url: 'http://localhost:5000/api/productType/create',
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                data: formAddNewProductType,
            };

            await axios
                .request(options)
                .then((response) => {
                    const result = response.data;

                    if (result.success) {
                        alert('Tạo Product Type thành công');
                        ClearInputs();
                    }

                    console.log(result);
                })
                .catch((err) => [console.log(err)]);
        };

        InsertNewProductType();
    };

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
                    setCategories(result.categories);
                    setSelectedValue(categories[0]?._id);
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        getCatgories();
    }, []);

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
                    setProductTypes(result.types);
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        getProductTypes();
    }, []);

    console.log(filterOptions);
    return (
        <>
            <div className="my-4 bg-white rounded-xl mx-5 w-full">
                <p className="font-bold text-[20px]">Add New Product</p>
                <div className="w-full flex items-center justify-start mt-5">
                    <form className="w-full addProductTypeForm flex items-start justify-start flex-col">
                        <div className="w-[80%] grid grid-cols-2 space-x-3 mb-3">
                            <div className="col-span-1">
                                <label className="block mb-2 text-xl font-medium">Type Name</label>
                                <div className="relative bg-gray-200 rounded">
                                    <Input
                                        onChange={(e) => {
                                            let updatedForm = { ...formAddNewProductType };
                                            updatedForm['typeName'] = e.target.value;
                                            setFormAddNewProductType({ ...updatedForm });
                                        }}
                                        value={formAddNewProductType['typeName']}
                                        type={`text`}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block mb-2 text-xl font-medium">Category</label>
                                <div className="relative bg-gray-200 rounded">
                                    <Select
                                        options={
                                            categories
                                                ? categories.map((item) => {
                                                      return {
                                                          value: item._id,
                                                          name: item.categoryName,
                                                      };
                                                  })
                                                : []
                                        }
                                        onChange={(e) => {
                                            let updatedForm = { ...formAddNewProductType };
                                            updatedForm['category'] = e.target.value;
                                            setFormAddNewProductType({ ...updatedForm });
                                        }}
                                        value={formAddNewProductType['category']}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-[80%] grid grid-cols-2 space-x-3 mb-3">
                            <div className="col-span-1">
                                <label className="block mb-2 text-xl font-medium">Giá thực</label>
                                <div className="relative bg-gray-200 rounded">
                                    <Input
                                        onChange={(e) => {
                                            let updatedForm = { ...formAddNewProductType };
                                            updatedForm['originalPrice'] = e.target.value;
                                            setFormAddNewProductType({ ...updatedForm });
                                        }}
                                        value={formAddNewProductType['originalPrice']}
                                        key={``}
                                        type={`number`}
                                    />
                                </div>
                                <p className="text-xs text-gray-400 pt-2">{``}</p>
                            </div>
                            <div className="col-span-1">
                                <label className="block mb-2 text-xl font-medium">Giá bán</label>
                                <div className="relative bg-gray-200 rounded">
                                    <Input
                                        onChange={(e) => {
                                            let updatedForm = { ...formAddNewProductType };
                                            updatedForm['sellPrice'] = e.target.value;
                                            setFormAddNewProductType({ ...updatedForm });
                                        }}
                                        value={formAddNewProductType['sellPrice']}
                                        key={``}
                                        type={`number`}
                                    />
                                </div>
                                <p className="text-xs text-gray-400 pt-2">{``}</p>
                            </div>
                        </div>

                        <div className="w-[80%] grid grid-cols-2 space-x-3 mb-3">
                            <div className="col-span-2">
                                <label className="block mb-2 text-xl font-medium">Mô tả</label>
                                <div className="relative bg-gray-200 rounded">
                                    <Input
                                        onChange={(e) => {
                                            let updatedForm = { ...formAddNewProductType };
                                            updatedForm['description'] = e.target.value;
                                            setFormAddNewProductType({ ...updatedForm });
                                        }}
                                        value={formAddNewProductType['description']}
                                        key={``}
                                        type={`textarea`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[80%] grid grid-cols-2 space-x-3 mb-3">
                            <div className="col-span-2">
                                <label className="block mb-2 text-xl font-medium">Thumbnail</label>
                                <div className="relative bg-gray-200 rounded">
                                    <UploadBox
                                        tag={'file'}
                                        data={formAddNewProductType}
                                        setData={setFormAddNewProductType}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <button onClick={handleAddProductType} className="btn bg-green-400 px-6 py-2 rounded">
                    Add
                </button>
            </div>
            {/* <Table itemsList={productTypes} /> */}
        </>
    );
}

export default AddNewProductType;
