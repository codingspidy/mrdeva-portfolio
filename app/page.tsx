import Image from 'next/image'
import Link from 'next/link'
// import { ChevronDown, ChevronRight, ShoppingCart } from 'lucide-react'
import Product1 from "./images/fruits.jpg";
import Product2 from "./images/vegetables.jpg";
import Product3 from "./images/jeans.jpg";
import SofaImage from "./images/sofa.jpg";
import CarpetImage from "./images/carpet.jpg";
import ConsultantImage from "./images/consultant.jpg"

const featuredProducts = [
  { src: Product1 }, { src: Product2 }, { src: Product3 }, { src: Product2 }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-transparent shadow-sm absolute top-0 left-0 z-10 w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white border-b-2 border-b-[#0000FF]">MrDeva ITC</h1>
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="#" className="text-white hover:text-gray-600">Home</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-600">Shop</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-600">About</Link></li>
              <li><Link href="#" className="text-white hover:text-gray-600">Contact</Link></li>
            </ul>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen hero-section">
        {/* <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Furniture showcase"
          layout="fill"
          objectFit="cover"
        /> */}
        <div className="absolute inset-0 container mx-auto px-4 py-4 bg-black bg-opacity-40 flex items-center justify-between">
          <div className="text-white mt-[64px]">
            <h2 className="text-4xl font-bold mb-4">Your Global Partner in Trading & Consultancy</h2>
            <p className="text-xl mb-8 max-w-3xl">We provide tailored solutions that ensure success across borders.</p>
            <button className="bg-[#0000FF] text-white px-8 py-3 rounded-md text-lg font-semibold hover:opacity-50 transition duration-300">
              Start Trading
            </button>
          </div>
          <div className="container mx-auto p-4 flex gap-4 justify-end mt-[64px]">
            {/* Top left: Chair */}
            <div className='flex flex-col gap-4'>
              <div className="relative w-[250px] bg-gray-100 p-4 rounded-lg">
                <Image
                  src={SofaImage}
                  alt="Single comfort chair"
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-sm font-bold">
                  $20.00
                </div>
                <p className="mt-2 text-sm font-medium">Single comfort chair</p>
              </div>

              {/* Bottom left: Modern furniture */}
              <div className="bg-gray-100 w-[250px] p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Modern & stylish furniture</h3>
                {/* <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold">13</div>
                  <div className="text-3xl font-bold">14</div>
                  <div className="text-3xl font-bold">15</div>
                </div> */}
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
              <div className="bg-gray-800 w-[200px] p-4 rounded-lg text-white flex flex-col items-center justify-center">
                <Image
                  src={ConsultantImage}
                  alt="Nico Williams Jr"
                  width={100}
                  height={100}
                  className="w-28 h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">Nico Williams Jr</h3>
                <p className="text-sm text-gray-300">Agent property</p>
              </div>

              {/* Bottom right: Team stats */}
              <div className="bg-white p-4 w-[200px] h-16 rounded-lg shadow flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <Image
                      key={i}
                      src={CarpetImage}
                      alt={`Team member ${i}`}
                      width={40}
                      height={40}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">120,000+</p>
                  <p className="text-xs text-gray-600">Items sold out</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="py-20 bg-white text-center">
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

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[500px]">
            <Image
              src={Product1}
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
                  src={Product2}
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
                  src={Product3}
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
            <div className="md:col-span-2 flex justify-between">
              <div className="text-center space-y-2">
                <h3 className="text-sm uppercase tracking-wide">Modern Design</h3>
                <h2 className="text-2xl font-bold">Women's Flat Sandals</h2>
                <button>Shop Collection</button>
              </div>
              <div className="aspect-video w-full relative">
                <Image
                  src={Product1}
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

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((item, index) => (
              <div key={index} className="rounded-lg">
                <Image
                  src={item.src}
                  alt={`Featured product ${item}`}
                  width={300}
                  height={200}
                  className="mb-4 rounded w-full aspect-square object-cover"
                />
                <h4 className="text-xl font-semibold mb-2">Product Name</h4>
                <p className="text-gray-600 mb-4">Short product description goes here.</p>
                <button className="text-blue-600 font-semibold flex items-center">
                  {/* Shop Now <ChevronRight className="h-4 w-4 ml-1" /> */} Show Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Elevate Every Room with Exquisite Furniture
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Crafted to Reflect Your Passions, Our Furniture Transforms Ordinary Spaces into Extraordinary Sanctuaries
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8">All Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={`Product ${index + 1}`}
                  width={200}
                  height={200}
                  className="mb-4 rounded"
                />
                <h4 className="text-lg font-semibold mb-2">Product Name</h4>
                <p className="text-gray-600">$199.99</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transform Your Home Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
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
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
              Explore Collections
            </button>
          </div>
        </div>
      </section>

      {/* Best Choice Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8 text-center">Best Choice Our Furniture</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt={`Best choice ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="text-lg font-semibold">Question {item}?</span>
                  {/* <ChevronDown className="h-5 w-5 text-gray-500" /> */}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
      </section>

      {/* Blog/Insights Section */}
      <section className="py-16 bg-white">
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Furnish</h4>
              <p className="text-gray-400">Elevating spaces with exquisite furniture designs.</p>
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
            <p className="text-gray-400">&copy; 2024 Furnish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}