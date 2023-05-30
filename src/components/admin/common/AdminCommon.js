import classNames from 'classnames';
import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

<style>
  .active{
    classNames('block')
  }
</style>

function AdminCommon() {
  const [isActiveProduct, setIsActiveProduct] = useState(false);
  const [isActiveUser, setIsActiveUser] = useState(false);
  const [isActiveList, setIsActiveList] = useState(false);

  // const links = document.querySelectorAll('.navbar');
  const dropdown = document.querySelectorAll('.dropdown');

  dropdown.forEach((element) => {
    const height = element.offsetHeight;
    element.style.marginTop = `${-height}px`;
  })

  // links.forEach((link) => {
  //   link.addEventListener('click', function (e) {
  //     const target = e.currentTarget;
  //     const ele = target.nextElementSibling;

  //     // dropdown.forEach((element) => {
  //     //   if(element !== ele) {
  //     //     element.previousElementSibling.classList.remove('invisible');
  //     //     element.classList.remove('visible');
  //     //   }
  //     // })
  //     target.classList.toggle('invisible');
  //     ele.classList.toggle('visible');
  //   });
  // });
  // useEffect ((e) => {
  //   const height = e.offsetHeight;
  //   e.style.marginTop = `${-height}px`;
  // });

  return (
    <div className='w-3/4 mx-auto grid grid-cols-3'>
      <div className='my-5 relative'>
        <div className='navbar'>
          <div className='grid grid-cols-[230px_minmax(100px,_1fr)] font-semibold rounded-xl border-2 border-gray-200 px-4 py-3 cursor-pointer hover:border-red-500'
              onClick={e => setIsActiveUser(!isActiveUser)}>
            <div className='flex'>
              <div><i className="fa-solid fa-address-book"></i></div>
              <p className='pl-3'>Quản lý tài khoản</p>
            </div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
        {isActiveUser && (
          <div className='dropdown'>
            <div className=' absolute w-full'>
              <Link to='/'>
                <p className='border-2 border-gray-200 rounded-xl w-full py-3 font-medium pl-4 mt-4 hover:border-red-500'>
                  Thêm người dùng
                </p>
              </Link>
              <Link to='/'>
                <p className='border-2 border-gray-200 rounded-xl w-full py-3 font-medium pl-4 mt-4 hover:border-red-500'>
                  Sửa người dùng
                </p>
              </Link>
              <Link to='/'>
                <p className='border-2 border-gray-200 rounded-xl w-full py-3 font-medium pl-4 mt-4 hover:border-red-500'>
                  Xóa người dùng 
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className='my-5 relative'>
        <div className='navbar'>
          <div className='grid grid-cols-[230px_minmax(100px,_1fr)] font-semibold rounded-xl border-2 border-gray-200 px-4 py-3 cursor-pointer hover:border-red-500'
              onClick={e => setIsActiveList(!isActiveList)}>
            <div className='flex'>
              <div><i className="fa-solid fa-rectangle-list"></i></div>
              <p className='pl-3'>Quản lý danh mục</p>
            </div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
        {isActiveList && (
          <div className='dropdown'>
            <div className='absolute w-full'>
              <Link to='/'>
                <p className='border-2 border-gray-200 rounded-xl w-full py-3 font-medium pl-4 mt-4 hover:border-red-500'>
                  Thêm danh mục
                </p>
              </Link>
              <Link to='/'>
                <p className='border-2 border-gray-200 rounded-xl w-full py-3 font-medium pl-4 mt-4 hover:border-red-500'>
                  Sửa danh mục
                </p>
              </Link>
              <Link to='/'>
                <p className='border-2 border-gray-200 rounded-xl w-full py-3 font-medium pl-4 mt-4 hover:border-red-500'>
                  Xóa danh mục
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className='my-5 relative'>
        <div className='navbar'>
          <div className='grid grid-cols-[230px_minmax(100px,_1fr)] font-semibold rounded-xl border-2 border-gray-200 px-4 py-3 cursor-pointer hover:border-red-500'
              onClick={e => setIsActiveProduct(!isActiveProduct)}>
            <div className='flex'>
              <div><i className="fa-solid fa-mobile-retro"></i></div>
              <p className='pl-3'>Quản lý sản phẩm</p>
            </div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
        {isActiveProduct && (
          <div className='dropdown'>
            <div className='absolute w-full'>
              <Link to='/'>
                <p className='border-2 border-gray-200 rounded-xl w-full py-3 font-medium pl-4 mt-4 hover:border-red-500'>
                  Thêm sản phẩm
                </p>
              </Link>
              <Link to='/'>
                <p className='border-2 border-gray-200 rounded-xl w-full py-3 font-medium pl-4 mt-4 hover:border-red-500'>
                  Sửa sản phẩm
                </p>
              </Link>
              <Link to='/'>
                <p className='border-2 border-gray-200 rounded-xl w-full py-3 font-medium pl-4 mt-4 hover:border-red-500'>
                  Xóa sản phẩm
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminCommon;