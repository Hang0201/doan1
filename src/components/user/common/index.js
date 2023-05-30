import React from 'react'
import { Link } from 'react-router-dom'

function UserCommon() {
  return (
    <div>
        <Link className='grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl' to='/user'>
            <div className='pr-4'>
                <i className="fa-solid fa-house-user"></i>
            </div>
            <h3 className='font-medium'>Trang chủ</h3>
        </Link>
        <Link className='grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl' to='/account'>
            <div>
                <i className="fa-solid fa-user"></i>
            </div>
            <h3 className='font-medium'>Tài khoản của tôi</h3>
        </Link>
        <Link className='grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl' to='/offer'>
            <div>
                <i className="fa-solid fa-gift"></i>
            </div>
            <h3 className='font-medium'>Ưu đãi</h3>
        </Link>
        <Link className='grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl' to='/history'>
            <div>
                <i className="fa-solid fa-clipboard-list"></i>
            </div>
            <h3 className='font-medium'>Lịch sử mua hàng</h3>
        </Link>
        <Link className='grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl' to='/support'>
            <div>
                <i className="fa-solid fa-headset"></i>
            </div>
            <h3 className='font-medium'>Hỗ trợ</h3>
        </Link>
        <Link className='grid grid-cols-[30px_minmax(200px,_1fr)] w-3/4 mx-12 p-3 border-2 border-white hover:border-2 hover:border-red-600 hover:rounded-xl' to='/'>
            <div>
                <i className="fa-solid fa-right-from-bracket"></i>
            </div>
            <h3 className='font-medium'>Đăng xuất</h3>
        </Link>
    </div>
  )
}

export default UserCommon
