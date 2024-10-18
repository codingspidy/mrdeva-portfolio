import Image from 'next/image'
import Link from 'next/link'
// import { ChevronDown, ChevronRight, ShoppingCart } from 'lucide-react'
import Product1 from "./images/fruits.jpg";
import Product2 from "./images/vegetables.jpg";
import Product3 from "./images/jeans.jpg";
import SofaImage from "./images/sofa.jpg";
import CarpetImage from "./images/carpet.jpg";
import ConsultantImage from "./images/consultant.jpg"
import ProductShowcase from './components/ProductShowcase';
import LogoImage from './images/mrdevaitc-logo.png';
import Collections from './components/Collections';
import FAQAccordion from './components/FAQAccordian';
import Header from './components/Header';


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-grid-pattern" style={{ backgroundSize: '30px 30px' }}>
      {/* Header
      <header className="bg-transparent absolute top-0 left-0 z-10 w-full">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <Image
              src={LogoImage}
              alt="Mr Deva Logo"
              width={150}
              height={150}
              className="w-full h-auto"
            />
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="#" className="text-white hover:text-gray-600">Home</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-600">About</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-600">Contact</Link></li>
              <li><Link href="#" className="bg-[#0000FF] px-4 py-2 text-white hover:text-gray-600">Shop Now!</Link></li>
            </ul>
          </nav>

        </div>
      </header> */}
<Header />
      {/* Hero Section */}
      <section className="relative min-h-screen hero-section">
        {/* <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Furniture showcase"
          layout="fill"
          objectFit="cover"
        /> */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto min-h-screen px-4 md:px-6 pt-40 pb-20 md:pb-0 md:pt-[80px] flex gap-20 flex-col md:flex-row items-center justify-between">
          <div className="text-white flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Global Partner in Trading & Consultancy</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl">We provide tailored solutions that ensure success across borders.</p>
            <button className="bg-[#0000FF] text-white px-8 py-3 rounded-md text-base md:text-lg font-semibold hover:opacity-50 transition duration-300">
              Start Trading
            </button>
          </div>
          <div className="container mx-auto p-4 flex gap-4 justify-end">
            {/* Top left: Chair */}
            <div className='flex flex-col gap-4'>
              <div className="relative w-[150px] md:w-[250px] bg-gray-100">
                <Image
                  src={SofaImage}
                  alt="Single comfort chair"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -top-2 -left-2 bg-white px-2 py-1 rounded-full text-[10px] md:text-xs font-bold">
                  $20.00
                </div>
                <div className="absolute bottom-2 left-2 text-[10px] md:text-xs font-bold bg-white px-2 py-1">
                  Single comfort sofa
                </div>

              </div>

              {/* Bottom left: Modern furniture */}
              <div className="relative bg-gray-100 w-[150px] md:w-[250px]">
                {/* <h3 className="text-lg font-semibold mb-2">Modern & stylish Carpets</h3> */}
                {/* <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold">13</div>
                  <div className="text-3xl font-bold">14</div>
                  <div className="text-3xl font-bold">15</div>
                </div> */}
                <h3 className="absolute bottom-2 right-2 w-[160px] px-2 py-1 text-[10px] md:text-xs font-bold bg-white text-black">
                  Modern & stylish Carpets
                </h3>
                <Image
                  src={CarpetImage}
                  alt="Single comfort chair"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              {/* Top right: Team member */}
              <div className="w-[150px] md:w-[200px] h-[200px] md:h-auto backdrop-blur-md p-4 text-white flex flex-col items-center justify-center">
                <Image
                  src={ConsultantImage}
                  alt="Nico Williams Jr"
                  width={100}
                  height={100}
                  className="w-full h-[120px] md:h-auto object-contain mb-4"
                />
                <h3 className="text-base md:text-lg font-semibold">Suhail Akram</h3>
                <p className="text-xs md:text-sm text-gray-300">Trade Consultant</p>
              </div>

              {/* Bottom right: Team stats */}
              <div className="bg-white p-4 w-[150px] md:w-[200px] h-16 shadow flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <Image
                      key={i}
                      src={CarpetImage}
                      alt={`Team member ${i}`}
                      width={40}
                      height={40}
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-xs md:text-sm font-bold">120,000+</p>
                  <p className="text-[10px] md:text-xs text-gray-600">Items sold out</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className='pt-40 px-6 text-center'>
      <div className="container mx-auto px-4">
          <h2 className="text-5xl font-serif font-bold text-[#050A30] mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar interdum in pellentesque varius nam.
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar interdum in pellentesque varius nam.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-[#050A30] text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Learn More <span className="ml-2">↗</span>
          </a>
        </div>
      </section>

      <Collections />


      <section className="py-12 px-6">
        
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-[500px] order-4 md:-order-1">
              <Image
                src={CarpetImage}
                alt="Summer Collection"
                layout="fill"
                objectFit="cover"
                className=""
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded">
                <span className="text-sm font-medium">Summer Collection</span>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded">
                <span className="text-sm font-medium">Best Deals</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="aspect-[4/3] w-full relative">
                  <Image
                    src={SofaImage}
                    alt="Hand Bags"
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded">
                    <span className="text-sm font-medium">Hand Bags</span>
                  </div>
                </div>
                {/* <h3 className="text-lg font-semibold text-center">Hand Bags</h3> */}
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/3] w-full relative">
                  <Image
                    src={CarpetImage}
                    alt="Cowgirl Hat"
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded">
                    <span className="text-sm font-medium">Cowgirl Hat</span>
                  </div>
                </div>
                {/* <h3 className="text-lg font-semibold text-center"></h3> */}
              </div>
              <div className="-order-1 md:order-4 md:col-span-2 flex gap-4 items-center justify-between">
                <div className="space-y-2 text-left">
                  <h3 className="text-sm uppercase tracking-wide">Modern Design</h3>
                  <h2 className="text-2xl font-bold">Furnitures and Sofas</h2>
                  <button className='bg-[#0000FF] text-white text-nowrap px-6 py-2'>Shop Collections</button>
                </div>
                <div className="aspect-video w-full relative">
                  <Image
                    src={SofaImage}
                    alt="Women's Flat Sandals"
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <ProductShowcase />

     

      {/* Transform Your Home Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={CarpetImage}
              alt="Transformed home"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-3xl font-bold mb-4">Transform Your Home with Furnish Furniture</h3>
            <p className="text-gray-600 mb-6">
              Our carefully curated collection brings together the perfect blend of style, comfort, and functionality.
              Elevate your living spaces with our exquisite pieces designed to inspire and delight.
            </p>
            <button className="bg-[#0000FF] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
              Explore Collections
            </button>
          </div>
        </div>
      </section>

       {/* Value Proposition Banner */}
       {/* <section className="bg-[#0000FF] py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-4">
            Elevate Every Room with Exquisite Furniture
          </h2>
          <p className="text-xl text-[#7EC8E3] max-w-3xl mx-auto">
            Crafted to Reflect Your Passions, Our Furniture Transforms Ordinary Spaces into Extraordinary Sanctuaries
          </p>
          <a href='#' className='px-10 py-3 bg-[#000C66] text-white mt-4 inline-block'>
            Shop Now
          </a>
        </div>
      </section> */}

      {/* Best Choice Section
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8 text-center">Best Choice Our Furniture</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative h-64">
                <Image
                  src={CarpetImage}
                  alt={`Best choice ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

     <FAQAccordion />

      {/* Newsletter Section
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Stay Updated with Our Latest Designs</h3>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for exclusive offers and design inspiration.</p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-900 text-white px-6 py-2 rounded-r-full font-semibold hover:bg-gray-800 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section> */}

      {/* Blog/Insights Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8 text-center">Creative Insights & Home Transformation Ideas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt={`Blog post ${item}`}
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Blog Post Title</h4>
                  <p className="text-gray-600 mb-4">Short description of the blog post goes here.</p>
                  <Link href="#" className="text-blue-600 font-semibold">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-[#050A30] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">MR DEVA ITC</h4>
              <p className="text-gray-400">Lorem ipsum dolor emet consecutvr enuhen emnuj dipehj.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Shop</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Shipping</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Returns</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Track Order</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 MR DEVA ITC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}