'use client'
import { useForm, SubmitHandler } from "react-hook-form";

import { FaCircleInfo } from "react-icons/fa6";

type Inputs = {
    name: string,
    phoneNumber: string,
    email: string,
    checkInOut: Date,
    guestNumber: Number,
};

export default function BookResortRoom() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div>
            <div className="w-[1220px] mx-auto py-10">
                <form className="grid grid-cols-6 gap-4 justify-between" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col justify-between ">
                        <p className="uppercase flex items-center text-sm font-semibold mb-2">Họ Tên <span className="ml-2"><FaCircleInfo /></span></p>
                        <input className="border-b p-2 w-full text-xs outline-none focus:border-b-2 focus:border-black" placeholder="Nhập tên của bạn" {...register("name")} />
                    </div>
                    <div className="flex flex-col justify-between ">
                        <p className="uppercase flex items-center text-sm font-semibold mb-2">Số điện thoại <span className="ml-2"><FaCircleInfo /></span></p>
                        <input className="border-b p-2 w-full text-xs outline-none focus:border-b-2 focus:border-black" placeholder="Nhập số điện thoại" {...register("phoneNumber", { required: true })} />
                    </div>
                    <div className="flex flex-col justify-between ">
                        <p className="uppercase flex items-center text-sm font-semibold mb-2">Email <span className="ml-2"><FaCircleInfo /></span></p>
                        <input className="border-b p-2 w-full text-xs outline-none focus:border-b-2 focus:border-black" placeholder="Nhập email của bạn" {...register("email", { required: true })} />
                    </div>
                    <div className="flex flex-col justify-between ">
                        <p className="uppercase flex items-center text-sm font-semibold mb-2">Check-In/Out <span className="ml-2"><FaCircleInfo /></span></p>
                        <input className="border-b p-2 w-full text-xs outline-none focus:border-b-2 focus:border-black" placeholder="09-07-2024 - 14-07-2024" {...register("checkInOut", { required: true })} />
                    </div>
                    <div className="flex flex-col justify-between ">
                        <p className="uppercase flex items-center text-sm font-semibold mb-2">Số khách <span className="ml-2"><FaCircleInfo /></span></p>
                        <input className="border-b p-2 w-full text-xs outline-none focus:border-b-2 focus:border-black" placeholder="Số khách" {...register("guestNumber", { required: true })} />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="italic text-sm font-semibold mb-2 cursor-pointer hover:opacity-50">Advanced Form</p>
                        <input className="uppercase font-semibold px-5 py-[10px] rounded-sm bg-btn cursor-pointer text-white" type="submit" p-2 w-full text-xs outline-none value={'Đặt Phòng'} />
                    </div>
                </form>
            </div>
        </div>
    );
}