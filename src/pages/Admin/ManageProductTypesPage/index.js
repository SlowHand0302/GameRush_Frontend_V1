import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosSearch } from 'react-icons/io';
import { IoIosInformationCircle } from 'react-icons/io';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { formatCash, splitCamelText } from '../../../utils/helpers';
import Select from '../../../components/Form/Select';
import products from '../../../constants/dummyData/products';
import Table from '../components/Table';
import Overlay from '../../../components/Overlay';
import AddNewProductType from './AddNewProductType';

function ManageProductTypesPage(props) {
    const sortItems = ['Newest', 'Oldest', 'Costliest', 'Cheapest', 'Ascending', 'Descending'];
    const tableHeader = ['typeName','originalPrice','sellPrice','isHot','status']
    const onSelectSort = () => {};
    const [openAddModal, setAddOpenModal] = useState(false);
    const [updateData, setUpdateData] = useState({});
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const handleOpenAddModal = (index) => {
        setUpdateData({...products[index]})
        setAddOpenModal(!openAddModal);
    };
    const handleDeleteProductType = (id) => {
        console.log(id)
        async function deleteProductType() {
            const options = {
                url: `http://localhost:5000/api/productType/delete/${id}`,
                method: 'DELETE'
            }

            await axios.request(options).then((response) => {
                const result = response.data;
                console.log(result);
            }).catch((err) => console.log(err));
        }
        deleteProductType();
        setProducts(products.filter(p => p.typeId !== id));
    }
    const handleShowDetailed = (url) => {
        window.open(url);
    }
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
                    setProducts(result.types);
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        getProductTypes();
    }, []);
    
    return (
        <>
            <div
                className={
                    'px-4 my-4 bg-white rounded-xl mx-5 /*2sm:max-h-[80vh] 2sm:hideScrollbar 2sm:overflow-scroll*/'
                }
            >
                <p className="font-bold text-[25px]">Manage Product Types</p>
                <div className="flex items-center 2sm:flex-col 2sm:items-start 2sm:gap-0">
                    <div className="flex items-center relative py-5 w-[50%] sm:w-[60%] 2sm:w-full">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="border w-full border-gray-200 rounded-l-xl p-3 outline-none"
                            placeholder="Tìm kiếm sản phẩm"
                        />
                        <div className="p-5 bg-blue-700 rounded-r-xl">
                            <IoIosSearch />
                        </div>
                    </div>
                    <div className="flex w-full justify-end items-center font-bold 2sm:mb-3 2sm:flex-col 2sm:items-start">
                        <div
                            className="bg-green-500 cursor-pointer py-3 px-8 text-center rounded-xl text-white 2sm:px-12"
                            onClick={handleOpenAddModal}
                        >
                            Add
                        </div>
                        <div className="flex items-center bg-white px-5 min-w-[100px] rounded-xl 2sm:px-0">
                            <p className="whitespace-nowrap">Sort by:</p>
                            <Select
                                selectValues={sortItems}
                                onSelect={onSelectSort}
                                customClass={'py-1'}
                                value={sortItems[0]}
                            />
                        </div>
                    </div>
                </div>
                <div className="max-h-[60vh] hideScrollbar overflow-scroll lg:max-h-[80vh] md:max-h-[75vh] sm:max-h-[68vh] 2sm:max-h-[80vh]">
                    <div className="h-full lg:w-[1240px] md:w-[991px] sm:w-[768px] 2sm:w-[768px]">
                        <div
                            className={`grid grid-cols-${
                                tableHeader.length + 3
                            } gap-3 font-bold bg-gray-200 p-4 rounded-xl capitalize sticky top-0 `}
                        >
                            {tableHeader.map((attribute, index) => {
                                return index === 0 ? (
                                    <p key={index} className="col-span-3">
                                        {splitCamelText(attribute)}
                                    </p>
                                ) : (
                                    <p key={index}>{splitCamelText(attribute)}</p>
                                );
                            })}
                            <p></p>
                        </div>
                        <hr className="h-px w-full bg-gray-200 border-0"></hr>
                        <div className="overflow-y-scroll hideScrollbar">
                            {products.map((item, index) => {
                                return (
                                    <Link key={index} className="grid grid-cols-8 gap-5 items-center p-4">
                                        <div className="col-span-3 flex gap-3 items-center">
                                            <img src={`http://localhost:5000/${item.image}`} alt={item.typeName} className="w-[50%] rounded-xl" />
                                            <p className="limitNumbLine">{item.typeName}</p>
                                        </div>
                                        <p className="font-bold">{formatCash(item.originalPrice)}</p>
                                        <p>{formatCash(item.sellPrice)}</p>
                                        <p>{item.isHot+''}</p>
                                        <p>{item.status}</p>
                                        <div
                                            className="flex items-center justify-center gap-5"
                                            onClick={(event) => event.preventDefault()}
                                        >
                                            <IoIosInformationCircle className="text-[28px] text-blue-500" onClick={() => handleShowDetailed(`/${item.typeId}`)}/>
                                            <FaEdit className="text-[27px] text-yellow-400" onClick={() => handleOpenAddModal(index)}/>
                                            <FaTrashAlt className="text-[22px] text-red-300" onClick={() => handleDeleteProductType(item.typeId)}/>
                                        </div>
                                        <hr className="h-px col-span-full my-4 bg-gray-200 border-0"></hr>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {openAddModal ? (
                <Overlay customClass={`flex items-center justify-center`}>
                    <AddNewProductType onClose={handleOpenAddModal} data={updateData}/>
                </Overlay>
            ) : null}
        </>
    );
}

export default ManageProductTypesPage;
