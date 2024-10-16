import React from 'react';
import { motion } from 'framer-motion';

const SelectedItemDisplay = ({ selectedItem, nextItem }) => {
  if (!selectedItem) return null; // ถ้าไม่มี selectedItem ไม่แสดงอะไรเลย

  return (
    <div className="mx-8 text-center text-white ">
      <motion.div 
        key={selectedItem.id}  // ใช้ key เพื่อให้ React รู้ว่าเราต้องการเรนเดอร์ใหม่
        className="absolute w-[180px] h-[180px] xl:w-[250px] xl:h-[250px] top-[100px] -left-[100px] ring-[180px] ring-white/20 ring-opacity-20 shadow-2xl rounded-full flex items-center justify-center"
        initial={{ scale: 1, rotate: 0 }}  // เริ่มต้นที่ไม่มีการหมุน
        animate={{ scale: 1, rotate: 360 }}  // หมุน 360 องศา
        transition={{ duration: 1 }}
      >
        {/* ข้อมูลที่ถูกเลือก */}
        
        <div className="absolute right-[-130px] transform translate-x-1/2 rotate-180 flex flex-col items-center space-y-4">
          <motion.img 
            src={selectedItem.imageUrl} 
            alt={selectedItem.title} 
            initial={{ scale: 0, rotate: 0 }}  // เริ่มต้นที่ไม่มีการหมุน
            animate={{ scale: 1, rotate: 360 }}  // หมุน 360 องศา
            transition={{ duration: 1 }}
            className="h-[250px] w-[250px] xl:w-[350px] xl:h-[350px] rounded-full mt-4"  
          />
        </div>

        {/* ข้อมูลถัดไป */}
        <div className="absolute left-[-130px] transform -translate-x-1/2 flex flex-col items-center space-y-4">
          <motion.img 
            src={nextItem.imageUrl} 
            alt={nextItem.title} 
            initial={{ scale: 0, rotate: 0 }}  // เริ่มต้นที่ไม่มีการหมุน
            animate={{ scale: 1, rotate: 360 }}  // หมุน 360 องศา
            transition={{ duration: 1 }}
            className="h-[200px] w-[200px] rounded-full mt-4"  
          />
        </div>

      </motion.div>
    </div>
  );
};

export default SelectedItemDisplay;
