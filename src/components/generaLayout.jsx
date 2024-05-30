import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/react_logo.png'
import One from '../assets/1.png';
import Two from '../assets/2.png';
import Three from '../assets/3.png';
import Four from '../assets/4.png';

function GeneraLayout() {
  return (
    <div className='w-[1100px] my-0 mx-auto'>
      <header className='flex items-center justify-between bg-gray-50'>
        <div>
            <img className='w-16' src={logo} alt="" />
        </div>
        <div className='flex items-center gap-5'>
        <NavLink className={(el) => {
                          if(el.isActive) {
                              return 'text-red-600'
                          }
                      }} to='/'>Home</NavLink>
                      <NavLink className={(el) => {
                          if(el.isActive) {
                              return 'text-red-600'
                          }
                      }} to='/Cart'>Shop</NavLink>
                      <NavLink className={(el) => {
                          if(el.isActive) {
                              return 'text-red-600'
                          }
                      }} to='/Checkout'>About</NavLink>
                      <NavLink className={(el) => {
                          if(el.isActive) {
                              return 'text-red-600'
                          }
                      }} to='/About'>Contact</NavLink>
        </div>
        <div className='flex items-center gap-10'>
            <img className='w-7' src={One} alt='imglogonav' />
            <img src={Two} alt='imglogonav' />
            <img src={Three} alt='imglogonav' />
            <img src={Four} alt='imglogonav' />
        </div>
      </header>
      <main className=''>
        <Outlet />
      </main>
      <footer>
        <div className='flex h-[320px]'>
            <div>
                <h1 className='text-2xl font-semibold mb-[50px]'>Web Site</h1>
                <p className='text-gray-500 mr-[136px]'>400 University Drive Suite 200 Coral<br /> Gables, <br /> FL 33134 USA</p>
            </div>
            <div className='mr-[140px]'>
                <ul>
                    <p className='text-gray-500 mb-[55px]'>Links</p>
                    <li className='text-black text-base'>Home</li>
                    <li className='text-black text-base my-[46px]'>Shop</li>
                    <li className='text-black text-base'>About</li>
                    <li className='text-black text-base my-[45px]'>Contact</li>
                </ul>
            </div>
            <div className='mr-[70px]'>
                <ul>
                    <p className='text-gray-500 mb-[55px]'>Help</p>
                    <li className='text-black text-base'>Payment Options</li>
                    <li className='text-black text-base my-[46px]'>Returns</li>
                    <li className='text-black text-base'>Privacy Policies</li>
                </ul>
            </div>
            <div>
                <ul>
                    <p className='text-gray-500 mb-[50px]'>Newsletter</p>
                    <input className='w-[200px] border-b-2 mr-[11px] cursor-pointer' type="text" placeholder='Enter Your Email Address' />
                    <button className='text-black px-2 py-1 rounded-md border-b-2 uppercase'>Subscribe</button>
                </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default GeneraLayout