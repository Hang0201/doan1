import React from "react";

function BrandLaptop() {
    return(
        <div className="w-3/4 mx-auto flex my-[20px]">
            <div className="flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 font-semibold cursor-pointer hover:scale-110" id="1">
                <p className="text-[18px] ml-1">Tai nghe</p>
            </div>
            <div id="2">
                <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 font-semibold cursor-pointer hover:scale-110">
                    Ốp lưng
                </p>
            </div>
            <div className="flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 font-semibold cursor-pointer hover:scale-110">
                <p className=" text-[18px] ml-1 tracking-wide">Pin dự phòng</p>
            </div>
            <div>
                <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 font-semibold cursor-pointer hover:scale-110">
                    Sạc
                </p>
            </div>
            <div>
                <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 font-semibold cursor-pointer hover:scale-110">
                    Kính cường lực
                </p>
            </div>
        </div>
    )
}

export default BrandLaptop