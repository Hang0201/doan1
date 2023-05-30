import React from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className='w-3/4 mx-auto mt-[20px] h-[80vh]'>
      <div className='flex'>
        <a href='/' className='flex'>
            <div className='text-red-600'>
                <i class="fa-solid fa-chevron-left"></i>
                {/* <i class="fa-solid fa-caret-left"></i> */}
            </div>
            <p className='text-red-600 font-semibold ml-2'>Quay lại</p>
        </a>
        <h2 className='text-[20px] font-semibold text-red-600 mx-auto'>Giỏ hàng</h2>
      </div>
      <div className='w-[50%] mx-auto my-[20px]'>
        <div className='grid grid-cols-[200px_minmax(700px,_1fr)] gap-4'>
          <div>
            <img src='./images/phone/Iphone12pro.png' alt='/' className='h-[20vh]'/>
          </div>
          <div>
            <h2 className='text-[18px] font-medium'>Iphone 12 gias rer batas ngow aaaaaa</h2>
            <p className='text-red-600 text-[17px] font-semibold mt-[10px] mb-[8vh]'>12.000.000 VND</p>
            <div className='grid grid-cols-[1px_minmax(80px,_1fr)]'>
              <div className='flex'>
                <MinusOutlined className='text-[18px] cursor-pointer mt-1'/>
                <p className='mx-[20px] font-semibold text-gray-600'>1</p>
                <PlusOutlined className='text-[18px] cursor-pointer mt-1'/>
              </div>
              <button>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div className='mt-[50px]'>
          {/* <div className='grid grid-cols-2 font-semibold'>
            <p>Tổng tiền tạm tính: </p>
            <p className='text-red-600'>2.000.000VND</p>
          </div> */}
          <Link to='/payment'>
            <button className='bg-red-600 border-2 border-solid border-red-600 text-white font-semibold uppercase py-[20px] w-full h-full'>
              Đặt hàng
            </button>
          </Link>
          <Link to='/'>
            <button className='border-2 border-solid border-red-600 text-red-600 font-semibold uppercase py-[20px] mt-[10px] w-full h-full'>
              Chọn thêm sản phẩm
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
