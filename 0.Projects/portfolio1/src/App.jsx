import './App.css'
import { BsFillMoonFill } from "react-icons/bs"
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
// import Image from "next/image"
import img1 from "../public/image.jpeg"

function App() {

  return (
    <main className='bg-white px-10'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>Developed by</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonFill className='cursor-pointer text-2xl' /></li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Hrima Mohammed</h2>
          <h3 className='text-2xl py-2'>MERN Stack developper, Desktop and Software developper</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>A person who is fascinated with technology</p>
        </div>
        <div className='flex w-full justify-center items-center'>
          <img src={img1} alt="image" className='rounded-full' />
        </div>
        <div className='mt-10 mb-5 text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href="https://github.com/mohammedhrima"><AiFillGithub /> </a>
          <a href="https://www.linkedin.com/in/mohammed-hrima-5b08841b7/"><AiFillLinkedin /></a>
          <a href="https://www.youtube.com/@mohammedhrima7976"><AiFillYoutube /></a>
        </div>
      </section>
      <section>
        <div >
          <h3 className='text-center text-3xl py-1 '>Services I offer</h3>
          <p className='text-center text-base py-1 leading-8 text-gray-800'>Developing frontend website architecture. </p>
          <p className='text-center text-base py-1 leading-8 text-gray-800'>Developing back-end website applications.</p>
          <p className='text-center text-base py-1 leading-8 text-gray-800'>Seeing through a project from conception to finished product.</p>
          <p className='text-center text-base py-1 leading-8 text-gray-800'>Ensuring responsiveness of applications.</p>
        </div>
      </section>
    </main>
  )
}

export default App
