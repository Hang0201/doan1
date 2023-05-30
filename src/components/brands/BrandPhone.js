import React from "react";

function BrandPhone() {
    return(
        <div className="w-3/4 mx-auto flex my-[20px]">
            <div className="flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110" id="1">
                <div className="text-[18px] mt-[-2px]"><i class="fa-brands fa-apple"></i></div>
                <p className="text-[18px] ml-1">Apple</p>
            </div>
            <div id="2">
                <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-blue-700 font-bold cursor-pointer hover:scale-110">
                    SamSung
                </p>
            </div>
            <div className="flex mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 cursor-pointer hover:scale-110">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/800px-Xiaomi_logo_%282021-%29.svg.png" alt="" 
                    className="w-[20px] h-[20px] mt-[5px]"
                />
                <p className="text-[18px] ml-1 text-gray-500 font-medium tracking-wide">Xiaomi</p>
            </div>
            <div>
                <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 lowercase text-green-600 font-semibold cursor-pointer hover:scale-110">
                    Oppo
                </p>
            </div>
            <div>
                <p className="text-[18px] mr-5 border-2 border-gray-200 rounded-lg pl-2 pr-2 pb-1 text-yellow-400 cursor-pointer hover:scale-110">
                    realme
                </p>
            </div>
        </div>
    )
}

export default BrandPhone