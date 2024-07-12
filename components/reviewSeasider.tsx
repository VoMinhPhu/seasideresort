import Link from "next/link";
import Image from "next/image";

import { MdOutlineStarPurple500 } from "react-icons/md";

const ReviewSeasider = () => {

    return (
        <div className="bg-[#f5f3f0] py-[100px]">
            <div className="w-[1200px] mx-auto grid grid-cols-3 ">
                <div className="col-span-2 px-[15px]">
                    <div className="pb-[50px]">
                        <p className="text-[35px] text-[#374853] font-semibold">GIỚI THIỆU SEASIDE RESORT</p>
                        <p className="text-[15px] text-[#5c4019] leading-7">HIGH QUALITY ACCOMMODATION SERVICES</p>
                    </div>
                    <div className="text-[15px] text-justify">
                        <p className="mb-4">Tọa lạc trên con đường bờ biển rộng và đẹp nhất của thành phố du lịch Vũng Tàu, <span className="text-[#0000ff] cursor-pointer">Seaside Resort</span> sở hữu vị thế “ Ỷ sơn hướng hải ”- lưng tựa núi , mặt hướng biển nên về mặt phong thủy rất tốt.</p>
                        <p className="mb-4">Khi vừa đặt chân đến nơi đây, tất cả ưu phiền mệt mỏi của chuyến đi xa, của bộn bề lo toan đời thường sẽ tan biến hết, thay vào đó là sự bình yên, thư giãn và thoải mái đến không ngờ. Len lỏi dưới hàng cọ xanh mát, lối mòn lát đá dẫn bước du khách lạc vào một khu vườn nhiệt đới với vô số kỳ hoa dị thảo muôn màu vạn sắc , trong đó có nhiều loài cây hiếm quí như lộc vừng, trà trăm tuổi… . Bên cạnh đó, khí hậu trong lành, mát mẻ của rừng cây đã biến Seaside Resort trở thành một Đà Lạt thu nhỏ nơi phố biển...</p>
                        <p className="mb-4 text-[#374853] flex justify-end hover:opacity-50"><Link href="#">Tìm Hiểu Thêm</Link></p>
                    </div>
                </div>
                <div className="flex mx-[15px] bg-reviewSection bg-contain col-span-1 ">
                    <div className="flex m-[6px] w-full border-[4px]">
                        <div className="block m-[6px] p-[25px] w-full bg-[#f5f3f0] text-center">
                            <Image
                                src="/header/logo-new.png"
                                width={230}
                                height={115}
                                alt="logo"
                                className="mx-auto"
                            />
                            <div className="flex justify-center my-[25px]">
                                <MdOutlineStarPurple500 size={24} color="#5c4019" />
                                <MdOutlineStarPurple500 size={24} color="#5c4019" />
                                <MdOutlineStarPurple500 size={24} color="#5c4019" />
                                <MdOutlineStarPurple500 size={24} color="#5c4019" />
                            </div>
                            <p className="text-[#5c4019] text-lg font-semibold">Resort 4 sao tại Việt Nam</p>
                            <p className="mt-5 mb-4 text-[15px]">Tận hưởng một không gian sống yên tĩnh, hòa hợp cùng thiên nhiên, đồng thời trải nghiệm phong cách nghỉ dưỡng mới của thời đại : “ Seafront living”- hưởng thụ cuộc sống theo cách của người sành điệu và có đẳng cấp.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewSeasider;
