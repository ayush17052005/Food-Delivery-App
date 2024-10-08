import React from 'react'

const Header = () => {
  return (

    <div className="header h-[40vw] mb-5 mx-auto bg-[url('/header_img.png')] bg-center bg-cover relative bg-no-repeat flex justify-center rounded-3xl">

      <div className="header-content absolute flex flex-col items-start gap-[1.5vw] md:max-w-[50%]  bottom-[10%] left-[4vw] animate-fadeIn">
        <h2 className=' text-4xl md:text-7xl text-white '>Order your<br></br>
          favorite food here</h2>
        <p className='text-white text-lg hidden lg:block'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
        <button className='border-none font-semibold text-stone-600 py-3 px-7 bg-white text-base rounded-full md:scale-100 scale-90'>View Menu</button>
      </div>

    </div>
  )
}

export default Header
