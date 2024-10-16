import { data } from '../constants';  // นำเข้าข้อมูลจากไฟล์ constants.js

// ฟังก์ชันที่ทำงานเมื่อคลิก SwiperSlide
export const handleSlideClick = (item, index, setSelectedItem, setNextItem, setCurrentIndex) => {
  setSelectedItem(item);
  const nextIndex = (index + 1) % data.length;  // คำนวณ index ถัดไป (วนกลับไปที่ 0 เมื่อเกิน length)
  setNextItem(data[nextIndex]);  // ตั้งค่าข้อมูลถัดไป
  setCurrentIndex(index);  // เก็บ index ปัจจุบัน
};

// ฟังก์ชันที่ทำงานเมื่อสไลด์เปลี่ยน (รวมถึงเมื่อกดปุ่ม navigation)
export const handleSlideChange = (swiperRef, setSelectedItem, setNextItem, setCurrentIndex) => {
  const currentIndex = swiperRef.current.swiper.realIndex;  // ดึง index ปัจจุบันของ Swiper
  const newItem = data[currentIndex];  // เข้าถึง object ทั้งตัว
  const nextIndex = (currentIndex + 1) % data.length;  // คำนวณ index ของข้อมูลถัดไป
  setSelectedItem(newItem);  // อัปเดต selectedItem
  setNextItem(data[nextIndex]);  // อัปเดตข้อมูลถัดไป
  setCurrentIndex(currentIndex);  // เก็บ index ปัจจุบัน
};