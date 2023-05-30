import React from 'react';
import Slider from "react-slick";
// import Heart from "react-heart";
import data from '../phone/DataPhone';
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
        <button className=' text-red-300 text-[30px] pt-[2px]' onClick={onClick}>
            <i className="fa-solid fa-chevron-left"></i>
        </button>
      </div>
    )
}

function FlashDetail() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
    }
    // const [active, setActive] = useState(false)
    // const [checked, setChecked] = useState()

    return(
        <div className='relative'>
            <Slider {...settings}>
                {data.map((value) => {
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
                                        <button className='w-5'>
                                            <Heart isActive={active} onClick={() => setActive(!active)} animationScale = {1.25} inactiveColor = "#dc2626" animationTrigger = "both"/>
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default FlashDetail