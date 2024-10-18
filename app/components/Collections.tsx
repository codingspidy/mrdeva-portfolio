'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import CarpetImage from '../images/carpet.jpg';

export default function Collections() {
  const swiperRef = useRef(null)

  const products = [
    {
      id: 1,
      name: 'MIDI DRESS',
      image: '/placeholder.svg?height=600&width=400',
    },
    {
      id: 2,
      name: 'MAXI SHIRT DRESS',
      image: '/placeholder.svg?height=600&width=400',
    },
    {
      id: 3,
      name: 'ELEGANT DRESS',
      image: '/placeholder.svg?height=600&width=400',
    },
    {
      id: 4,
      name: 'FLECK SEAMLESS SHORT',
      image: '/placeholder.svg?height=600&width=400',
    },
    {
      id: 5,
      name: 'MIDI DRESS',
      image: '/placeholder.svg?height=600&width=400',
    },
    {
      id: 6,
      name: 'MAXI SHIRT DRESS',
      image: '/placeholder.svg?height=600&width=400',
    },
    {
      id: 7,
      name: 'ELEGANT DRESS',
      image: '/placeholder.svg?height=600&width=400',
    },
    {
      id: 8,
      name: 'FLECK SEAMLESS SHORT',
      image: '/placeholder.svg?height=600&width=400',
    },
  ]

  return (
    <section className="container mx-auto px-6 pt-32">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl text-[#050A30] font-bold mb-2">Featured Collections</h2>
          <p className="text-gray-600">
            Embrace the essence of effortless style and unmatchable comfort with our collections.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            // onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            // onClick={() => swiperRef.current?.slideNext()}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        // onSwiper={(swiper) => {
        //   swiperRef.current = swiper
        // }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={CarpetImage}
                alt={product.name}
                width={400}
                height={600}
                className="w-full h-[350px] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <button className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}