import React from "react";
// import Heart from "react-heart";
import DataLaptop from "./DataLaptop";
import { Link } from "react-router-dom";

function ListLaptop() {
    // const [active, setActive] = useState(false)

    return(
        <div className="w-3/4 mx-auto grid grid-cols-5 gap-4">
            {DataLaptop.map((value) => {
                    return (
                        <div key={value.id} className="">
                            <div className="p-[10px] h-[380px] border-2 border-[#ddd] rounded w-[215px]">
                                <div>
                                    <p className="bg-red-600 w-[65px] h-[25px] text-[12px] font-semibold rounded-full text-center pt-1 text-white"> 
                                        Giảm {value.discount}%
                                    </p>
                                    <img src={value.image} alt=''  className="w-[180px] h-[180px] m-2"/>
                                    <p className="text-[15px] font-semibold h-[50px] text-[#444]">{value.name}</p>
                                    <p className="text-red-600 font-semibold mb-1">{value.price}.000.000 VND </p>
                                </div>
                                <div className='mt-[20px]'>
                                    <Link to='/payment'>
                                        <p className='text-center bg-red-600 w-full h-[40px] text-white py-[6px] rounded-md cursor-pointer hover:scale-105'>
                                            Mua ngay
                                        </p>
                                    </Link>
                                </div>
                                {/* <div>
                                    <div className='text-yellow-300 pb-[5px]'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className="flex font-semibold float-right">
                                        <h4 className="text-[13px] text-gray-600 mr-1">Yêu thích</h4>
                                        <div className='w-5'>
                                            <Heart isActive={active} onClick={() => setActive(!active)} animationScale = {1.25} inactiveColor = "#dc2626" animationTrigger = "both" />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default ListLaptop