import Texts from './Texts';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { data } from '../constants';  // เรียกใช้ข้อมูลจากไฟล์ constants.js
import SelectedItemDisplay from './SelectedItemDisplay';  // เรียกใช้คอมโพเนนต์แสดงข้อมูล

// เรียกใช้ฟังก์ชันจาก Context.js
import { handleSlideClick, handleSlideChange } from '../context/Context';  
import Navbar from './Navbar';
import { div } from 'framer-motion/client';

const Hero = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [nextItem, setNextItem] = useState(null);  // เพิ่ม state เพื่อเก็บข้อมูลถัดไป
  const swiperRef = useRef(null);  // ใช้ ref เก็บ Swiper instance
  const [currentIndex, setCurrentIndex] = useState(0); // เก็บ current index
  return (
    <div 
        className="px-3"
        style={{
            backgroundColor: selectedItem?.color || '#28b463',  // ตั้งค่าสีพื้นหลังตาม selectedItem.color หรือค่า default
        }}
    >
        <Navbar/>
        <div className="flex flex-wrap items-center justify-between ">
            <div className="w-full lg:w-1/2 order-1 xl:order-none ">
                <div className="flex w-[50%] h-[450px] ">
                    <SelectedItemDisplay selectedItem={selectedItem} nextItem={nextItem} />
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 order-2 xl:order-none ">

            <div className="flex flex-col items-center ">
                <Texts/>
                {/* ///////////////////*/}
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    onSlideChange={() => handleSlideChange(swiperRef, setSelectedItem, setNextItem, setCurrentIndex)}  // ใช้ฟังก์ชันจาก Context.js
                    className='w-[300px] xl:w-[450px] h-[160px] xl:h-[200px] px-1 xl:px-5 pt-4 xl:pt-10 '
                >
                    {/* ปุ่ม Previous */}
                    <div className="swiper-button-prev items-start" ></div>
            
                        {data.map((item, index) => (
                            <SwiperSlide key={item.id} onClick={() => handleSlideClick(item, index, setSelectedItem, setNextItem, setCurrentIndex)}>  {/* ใช้ฟังก์ชันจาก Context.js */}
                                <motion.div 
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: index === currentIndex ? 1.2 : 1 }}  // ขยายขนาดสไลด์ที่ถูกเลือก
                                    transition={{ duration: 0.5 }}  // เพิ่มความเร็วของ transition
                                    className='flex flex-col w-[70px]  xl:w-[100px] items-center justify-center bg-white/20 rounded-xl  p-2'
                                >
                                    <img   src={item.imageUrl} alt={item.title} />
                                    <h3 className='text-white text-sm mt-2'>{item.title}</h3>
                                </motion.div>
                            </SwiperSlide>
                        ))}

                    {/* ปุ่ม Next */}
                    <div className="swiper-button-next"></div>
                </Swiper>
                {/*//////////////////////////////////////////////////// */}
            </div>
            <div className="flex md:w-[50%] h-[80px] md:h-[500px] "></div>
            </div>
        </div>
    </div>
  )
}

export default Hero