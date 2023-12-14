import React from "react";
import { useState, useEffect } from "react";

function Instruct() {
    return (
        <div className="">
            <div className='w-full flex items-center flex-wrap justify-center '>

                <div className='border-white flex justify-center items-center border-[2px] rounded-3xl h-[16rem] w-[14rem] m-4'>
                    <div className='custom-details h-[16rem] w-[14rem] p-4 rounded-3xl'>
                    </div>
                    <div className='text-2xl instructbg  custom-box-shadow text-[#844945] absolute h-[14rem] w-[12rem] p-4 rounded-3xl'>
                        <h1 className='font-bold'>For Events</h1>
                        <p className='text-left'>fields are : </p>
                        <ul className='text-left'>
                            <li>title</li>
                            <li>datetime</li>
                            <li>description</li>
                            <li>link</li>
                        </ul>
                    </div>
                </div>
                <div className='border-white flex justify-center items-center border-[2px] rounded-3xl h-[16rem] w-[14rem] m-4'>
                    <div className='custom-details h-[16rem] w-[14rem] p-4 rounded-3xl'>
                    </div>
                    <div className='text-2xl instructbg custom-box-shadow text-[#844945] absolute h-[14rem] w-[12rem] p-4 rounded-3xl'>
                        <h1 className='font-bold'>For Projects</h1>
                        <p className='text-left'>fields are : </p>
                        <ul className='text-left'>
                            <li>title</li>
                            <li>bywhom</li>
                            <li>description</li>
                            <li>imgurl</li>
                        </ul>
                    </div>
                </div>
                <div className='border-white flex justify-center items-center border-[2px] rounded-3xl h-[13rem] w-[14rem] m-4'>
                    <div className='custom-details h-[13rem] w-[14rem] p-4 rounded-3xl'>
                    </div>
                    <div className='text-2xl instructbg  custom-box-shadow text-[#844945] absolute h-[11rem] w-[12rem] p-4 rounded-3xl'>
                        <h1 className='font-bold'>For Resources</h1>
                        <p className='text-left'>fields are : </p>
                        <ul className='text-left'>
                            <li>theme</li>
                            <li>description</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Instruct;