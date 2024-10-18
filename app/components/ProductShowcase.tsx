'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CarpetImage from '../images/carpet.jpg';

export default function ProductShowcase() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const products = [
    {
      id: 1,
      title: 'VelvetWeave Carpets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
      image: '/placeholder.svg?height=400&width=300',
      tag: 'Popular'
    },
    {
      id: 2,
      title: 'TerraFlex',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
      image: '/placeholder.svg?height=400&width=300',
      tag: 'Newest'
    },
    {
        id: 3,
        title: 'UrbanSleek',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        image: '/placeholder.svg?height=400&width=300',
        tag: 'Newest'
      },
      {
        id: 4,
        title: 'EcoPlush',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        image: '/placeholder.svg?height=400&width=300',
        tag: 'Newest'
      },
      {
        id: 5,
        title: 'HarmonyWool',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
        image: '/placeholder.svg?height=400&width=300',
        tag: 'Newest'
      },
    // Add more products as needed
  ]

  if (!mounted) return null

  return (
    <div className="bg-[#0000FF] text-white px-8 py-20">
      <div className="max-w-6xl mx-auto flex">
        <div className="mb-8">
          {/* <span className="text-xl font-bold">01</span> */}
          <h2 className="text-4xl font-bold mt-2">OUR NEW PRODUCT</h2>
          <p className="mt-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
          <a href="#" className="mt-4 bg-[#000C66] px-4 py-2 text-white hover:underline inline-flex items-center">
            See All Product
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 500,
            disableOnInteraction: false
        }}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative">
                <Image
                  src={CarpetImage}
                  alt={product.title}
                  width={300}
                  height={400}
                  className="w-full h-[350px] object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {product.tag}
                </span>
              </div>
              <h3 className="mt-4 font-bold">{product.title}</h3>
              <p className="mt-2 text-sm">{product.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        
       
      </div>
    </div>
  )
}