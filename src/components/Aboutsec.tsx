import React from 'react'
import {caveat} from '@/font'
import Button from './Button'
import Image from 'next/image'

function Aboutsec() {
  return (
    <>
      <section id='about' className='w-full py-[160px] px-10 bg-[#222222] flex flex-col md:flex-row justify-center'>
        
        <div className='mx-auto w-[50%] px-[16px] flex flex-col items-start text-left'>
          <p className={`${caveat.className} text-[48px]`}>Nimra Naz</p>
          
          <p className={`${caveat.className} text-[30px] mt-2 mb-6 text-light-beige text-center lg:text-start text-3xl text-[#f6953a]`}>Freelance Web Developer</p>
          
          <p className='text-[18px] mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem deleniti facilis tempora commodi dolores debitis repellendus excepturi nisi? Quisquam suscipit iste facere molestiae saepe voluptates.</p>
        
          <Button textName={"Contact Me"}/> 
        </div>

        <div className='w-[50%] sm:w-[55%] lg:w-[60%] mx-auto md:-mt-[100px] md:-mr-[40px] rounded-full flex justify-center items-center'>
          <Image src={"/myimage/profile.png"} alt='picture' width={350} height={350} className='rounded-full'></Image>
        </div>
      </section>
      
      <section className="w-full py-5 px-5 mx-auto flex justify-center items-center gap-16 bg-[#1a1a1a] overflow-hidden">
        <Image src={"/myimage/html.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myimage/css.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myimage/typescript.png"} alt='picture' width={70} height={70}></Image>
        <Image src={"/myimage/git.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myimage/figma.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myimage/react.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myimage/node.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myimage/next.png"} alt='picture' width={96} height={96}></Image>
      </section>
    </>
  )
}

export default Aboutsec