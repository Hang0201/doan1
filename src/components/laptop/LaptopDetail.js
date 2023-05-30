import React from 'react';
import Slider from "react-slick";
// import Heart from "react-heart";
import dataLaptop from './DataLaptop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className=' bg-white absolute left-full top-[45%]' onClick={onClick}>
        <button className='text-red-300 text-[30px] pt-[2px]'>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='bg-white absolute right-full top-[45%]' onClick={onClick}>
        <button className=' text-red-300 text-[30px] pt-[2px]'>
            <i className="fa-solid fa-chevron-left"></i>
        </button>
      </div>
    )
}

function LaptopDetail() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
    }
    // const [active, setActive] = useState(false)

    return(
        <div className='relative'>
            <Slider {...settings}>
                {dataLaptop.map((value) => {
                    return (
                        <div key={value.id} className=" ml-2">
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
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default LaptopDetail