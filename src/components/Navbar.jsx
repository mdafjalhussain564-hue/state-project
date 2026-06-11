import React, { useState } from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className='flex justify-around gap-70 py-2.5 bg-[#212529] text-white text-base hidden md:flex'>
                <p>Free shipping, 30-day return or refund guarantee.</p>

                <div className='flex gap-8 Nunito-Sans font-sans'>
                    <h2>SIGN IN</h2>
                    <h2>FAQS</h2>
                    <div className="group relative inline-block">
                        <button className="">
                            USD
                        </button>

                        <div className="absolute hidden group-hover:block bg-white rounded shadow-lg w-15 text-center text-black">
                            <a href="#" class="block">USD</a>
                            <a href="#" class="block">EUR</a>
                            <a href="#" class="block">USD</a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className=" text-black p-4 mt-6">
                <div className="flex justify-evenly  items-center">
                    <h1 className="text-2xl font-bold">
                        <img src={logo} alt="" />
                    </h1>

                    <button
                        className="md:hidden"
                        onClick={() => setMenu(!menu)}
                    >
                        ☰
                    </button>

                    <ul className="hidden md:flex gap-10 text-lg font-medium">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shope</Link></li>
                        <div className="group relative inline-block">
                            <button className="">
                                Pages
                            </button>

                            <div className="absolute hidden group-hover:block bg-black rounded  w-35 h-20 text-white font-extralight text-xs">
                                <li className="block">About Us</li>
                                <li className="block">Shop Details</li>
                                <li className="block">Shooping Cart</li>
                                <li className='block'>Check Out</li>
                                <li className='block'>Blog Deatils</li>
                            </div>
                        </div>
                        <li><Link to="blog">Blog</Link></li>
                        <li>< Link to="Connacts">Contacts</Link></li>
                    </ul> 

                    <div className='hidden md:block text-lg font-medium space-x-6'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-regular fa-heart"></i>
                        <img className='inline pb-2' src={cart} alt="" />
                        <p className='inline pb-2'>$0.00</p>
                    </div>
                </div>

                {menu && (
                    <ul className="md:hidden mt-4 flex flex-col gap-3">
                        <li>Home</li>
                        <li>Shope</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contacts</li>

                        <div className='md:hidden mt-4 flex flex-col gap-3'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <i class="fa-regular fa-heart"></i>
                            <img className='inline pb-2' src={cart} alt="" />
                            <p className='inline pb-2'>$0.00</p>
                        </div>
                    </ul>

                )}
            </nav>


        </>
    )
}

export default Navbar

