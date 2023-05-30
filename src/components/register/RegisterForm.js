import React from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className='w-[40%] mx-auto mt-[120px] min-h-[50vh]'>
      <h2 className='text-red-600 text-center text-[30px]'>Đăng ký tài khoản</h2>
      <div className='border-2 border-gray-300 rounded-sm p-3 my-[20px] hover:border-red-300 hover:shadow-lg'>
        <input type="email" placeholder='Nhập email' className='outline-none'/>
      </div>
      <div className='border-2 border-gray-300 rounded-sm p-3 my-[20px] hover:border-red-300 hover:shadow-lg'>
        <input type="text" placeholder='Mật khẩu' className='outline-none'/>
      </div>
      <div className='border-2 border-gray-300 rounded-sm p-3 my-[20px] hover:border-red-300 hover:shadow-lg'>
        <input type="text" placeholder='Xác nhận mật khẩu' className='outline-none'/>
      </div>
      <div className='flex justify-between'>
        <div className='bg-red-600 w-56 text-center font-semibold cursor-pointer'>
          <Link to="/">
            <input type="submit" value="Đăng ký" className='uppercase cursor-pointer text-white my-6'/>
          </Link>
        </div>
        <div>
          <p>Bạn đã có tài khoản?  
            <Link to="/login">
              <nav className='text-red-600'>Đăng nhập</nav>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm