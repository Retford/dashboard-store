import { useState } from 'react'
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine
} from 'react-icons/ri'
// COMPONENTES
import Sidebar from './components/shared/Sidebar'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <Sidebar showMenu={showMenu} />
      {/* Menú Móvil */}
      <nav className='lg:hidden bg-[#1F1D2B] fixed w-full bottom-0 left-0 text-gray-400 flex justify-between text-3xl py-2 px-8 items-center rounded-tl-xl rounded-tr-xl'>
        <button className='p-2'>
          <RiUser3Line />
        </button>
        <button className='p-2'>
          <RiAddLine />
        </button>
        <button className='p-2'>
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className='text-white p-2'>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20'>
        <div className='lg:col-span-6 md:p-8'>
          {/* Header */}
          <header>
            {/* Titulo en search */}
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
              <div>
                <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
                <p className='text-gray-500'>03 abril 2023</p>
              </div>
              <form>
                <div className='w-full relative'>
                  <RiSearch2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' />
                  <input
                    type='text'
                    placeholder='Buscar...'
                    className='bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none'
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6'>
              <a
                href='#'
                className='relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'
              >
                Hot dishes
              </a>
              <a href='#' className='py-2 pr-4'>
                Cold dishes
              </a>
              <a href='#' className='py-2 pr-4'>
                Soup
              </a>
              <a href='#' className='py-2'>
                Grill
              </a>
            </nav>
          </header>
          {/* Titulo Content */}
          <div className='flex items-center justify-between mb-16'>
            <h2 className='text-xl text-gray-300'>Choose Dishes</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {/* Cart */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center gap-2 text-ellipsis text-gray-300'>
              <img
                src='comida.png'
                className='w-64 h-48 object-cover -mt-20 shadow-2xl rounded-full'
              />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls available</p>
            </div>
            {/* Cart */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center gap-2 text-ellipsis text-gray-300'>
              <img
                src='comida.png'
                className='w-64 h-48 object-cover -mt-20 shadow-2xl rounded-full'
              />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls available</p>
            </div>
            {/* Cart */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center gap-2 text-ellipsis text-gray-300'>
              <img
                src='comida.png'
                className='w-64 h-48 object-cover -mt-20 shadow-2xl rounded-full'
              />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls available</p>
            </div>
            {/* Cart */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center gap-2 text-ellipsis text-gray-300'>
              <img
                src='comida.png'
                className='w-64 h-48 object-cover -mt-20 shadow-2xl rounded-full'
              />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls available</p>
            </div>
            {/* Cart */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center gap-2 text-ellipsis text-gray-300'>
              <img
                src='comida.png'
                className='w-64 h-48 object-cover -mt-20 shadow-2xl rounded-full'
              />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls available</p>
            </div>
            {/* Cart */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center gap-2 text-ellipsis text-gray-300'>
              <img
                src='comida.png'
                className='w-64 h-48 object-cover -mt-20 shadow-2xl rounded-full'
              />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className='lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full'>
          {/* Orders */}
          <div className='relative pt-16 text-gray-300 p-8'>
            <RiCloseLine className='absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl' />
            <h1 className='text-2xl my-4'>Orders #151416</h1>
            {/* Etiquetas */}

            <div className='flex items-center gap-4 flex-wrap mb-8'>
              <button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl'>
                Dine In
              </button>
              <button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
                To Go
              </button>
              <button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
                Delivery
              </button>
            </div>
            <div>
              {/* Car */}
              <div>
                <div className='grid grid-cols-6'>
                  <h5 className='col-span-4'>Item</h5>
                  <h5 className='col-span-1'>Quantity</h5>
                  <h5 className='col-span-1'>Price</h5>
                </div>
                {/* Products */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
