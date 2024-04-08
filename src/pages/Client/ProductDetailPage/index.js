import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsCartPlus, BsFillCreditCard2FrontFill } from 'react-icons/bs';

import { formatCash } from '../../../utils/helpers';
import { FaBell, FaHeart } from 'react-icons/fa6';
import { BsBoxSeam, BsTag } from 'react-icons/bs';
import { VscKey } from 'react-icons/vsc';

import AdditionInforForm from './AdditionInforForm';
import products from '../../../constants/dummyData/products';
function ProductDetailPage(props) {
    const location = useLocation();
    const [product, setProduct] = useState({})
    useEffect(() => {
        async function getProductType() {
            const options = {
                url: `http://localhost:5000/api/productType/readOne/${location.pathname.split('/')[1]}`,
                method: 'GET',
            };
            await axios
                .request(options)
                .then((response) => {
                    const result = response.data;
                    setProduct({...result.type});
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        getProductType();
    }, []);
    
    // console.log(product.sellPrice.toString());
    const testType = [
        'TK 1 tuần',
        'TK 1 tháng',
        'TK 2 tháng',
        'TK 3 tháng',
        'TK 4 tháng',
        'TK 6 tháng',
        'TK 12 tháng',
        'TK nghe nhạc khác',
    ];

    return (
        <div className="w-full h-[70vh] flex justify-center items-center p-7 ">
            <div className="xl:w-layout lg:w-full md:w-full sm:w-full 2sm:w-full">
                <div className="flex gap-5 sm:flex-wrap 2sm:flex-wrap">
                    <div>
                        <div className="sm:w-full 2sm:w-full">
                            <img src={`http://localhost:5000/${product.image}`} alt="productImg" className="rounded-xl w-full" />
                        </div>
                        <div className="flex gap-3 items-center text-[14px] w-full mt-[10px] sm:flex-wrap 2sm:flex-wrap">
                            <Link className="flex items-center justify-center gap-3 w-[49%] px-[14px] py-3 text-center text-white border rounded-lg border-orange-500 bg-orange-500 sm:w-full 2sm:w-full">
                                <BsFillCreditCard2FrontFill className="w-[17.5px] h-[17.5px]" /> Mua Ngay
                            </Link>
                            <Link className="flex items-center justify-center gap-3 w-[49%] px-[14px] py-3 text-center text-orange-500 border-2 rounded-lg border-gray-300 hover:border-orange-500 sm:w-full 2sm:w-full">
                                <BsCartPlus className="w-[17.5px] h-[17.5px]" /> Thêm vào giỏ hàng
                            </Link>
                        </div>
                    </div>
                    <div className="w-[50%] sm:w-full 2sm:w-full">
                        <div className="text-[14px] gap-3 flex flex-col pb-5">
                            Sản phẩm
                            <div className="text-[25px] font-semibold">{product.typeName}</div>
                            <div className="font-thin flex gap-3 items-center">
                                <VscKey className="w-[17.5px] h-[17.5px]" /> Mã sản phẩm: {product.typeId}
                            </div>
                            <div className="font-thin flex gap-3 items-center">
                                <BsBoxSeam className="w-[17.5px] h-[17.5px]" />
                                Tình trạng:{' '}
                                <span
                                    className={`${product.status === 'available' ? 'text-green-500' : 'text-red-300'}`}
                                >
                                    {product.status}
                                </span>
                            </div>
                            <div className="flex gap-3 items-center">
                                {/* <BsTag className="w-[17.5px] h-[17.5px]" /> Thể loại: {product.category.join(', ')} */}
                            </div>
                            <p className="text-[21px] font-bold flex gap-2 items-center">
                                {formatCash(product.originalPrice)} <FaBell className="text-gray-400 cursor-pointer" />{' '}
                                <FaHeart className="text-gray-400 cursor-pointer" />
                            </p>
                            <div className="flex gap-3 items-center">
                                <p className="line-through text-gray-400 text-[15.75px] font-bold">
                                    {formatCash(product.sellPrice)}
                                </p>
                            </div>
                        </div>
                        <div>
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
