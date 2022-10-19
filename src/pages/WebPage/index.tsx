import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const WebPage = () => {
  return (
    <div className='bg-primary-bg w-full overflow-hidden'>
        <div className='sm:px-16 px-6 flex justify-center items-center'>
          <div className='xl:max-w-[1280px] w-full'>
            <Navbar />
          </div>
        </div>

        <div className='bg-primary-bg flex justify-center items-center'>
          <div className='xl:max-w-[1280px] w-full'>
            <Outlet />
          </div>
        </div>
    </div>
    
  )
}

export default WebPage;