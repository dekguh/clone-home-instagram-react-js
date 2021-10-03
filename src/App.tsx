import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import { dataFeed, dataLogged, dataStories } from './data'
import 'react-multi-carousel/lib/styles.css'
import { AiFillHome, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BiMovie, BiLabel, BiMessageSquareAdd } from 'react-icons/bi'
import { IoBagHandleOutline, IoPaperPlaneOutline } from 'react-icons/io5'
import { HiDotsHorizontal } from 'react-icons/hi'
import { FaRegComment } from 'react-icons/fa'
import { ICardFeed } from './types'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const Header : React.FC = () => {
  return(
    <div className='fixed left-0 right-0 top-0 z-50 bg-white flex flex-row flex-nowrap items-center p-2 border-b border-gray-100'>
      <div className='flex-grow flex-shrink'>
        <img src="/images/logo-text.png" alt="logo" className='w-40' />
      </div>

      <div className='flex-grow-0 flex-shrink'>
        <ul className='flex flex-row flex-nowrap items-center'>
          <li className='flex-grow-0 flex-shrink pr-3'>
            <a href="#">
              <i className='text-xl'><BiMessageSquareAdd /></i>
            </a>
          </li>

          <li className='flex-grow-0 flex-shrink pr-3'>
            <a href="#">
              <i className='text-xl'><AiOutlineHeart /></i>
            </a>
          </li>

          <li className='flex-grow-0 flex-shrink pr-3'>
            <a href="#">
              <i className='text-xl'><IoPaperPlaneOutline /></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const Stories : React.FC = () => {
  return(
    <div className='pt-20 p-3'>
      <ul className='flex flex-row flex-nowrap items-center'>
        <li className='flex-grow-0 flex-shrink w-3/12'>
          <div className='px-2 text-center relative'>
              <div className='relative'>
                <img src={dataLogged.photoProfile} className='w-full rounded-full' alt="profile" />
                <span className='absolute bottom-0 right-0 block w-8 h-8 rounded-full border-4 border-white bg-blue-400 text-white'>
                  +
                </span>
              </div>
              <span className='text-sm'>{dataLogged.username}</span>
          </div>
        </li>

        <li className='flex-grow flex-shrink w-9/12'>
          <Carousel
            responsive={responsive}
            showDots={false}
            arrows={false}
            partialVisible={true}
            containerClass='w-full'
          >
            {dataStories.map((data, i) => (
              <div key={i} className='text-center px-2'>
                <div className='border-3px border-pink-500 rounded-full'>
                  <img src={data.photoProfile} className='border-2 border-white w-full mx-auto rounded-full' alt="profile" />
                </div>
                <span className='text-sm'>{data.username.length >= 10
                ? `${data.username.substring(0, 10)}..`
              : data.username}</span>
              </div>
            ))}
          </Carousel>
        </li>
      </ul>
    </div>
  )
}

const Navigation : React.FC = () => {
  return(
    <div className='fixed z-50 bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-3'>
      <ul className='flex flex-row flex-nowrap'>
        <li className='flex-grow flex-shrink px-1'>
          <a href="#">
            <i className='text-2xl'><AiFillHome className='mx-auto' /></i>
          </a>
        </li>

        <li className='flex-grow flex-shrink px-1'>
          <a href="#">
            <i className='text-2xl'><FiSearch className='mx-auto' /></i>
          </a>
        </li>

        <li className='flex-grow flex-shrink px-1'>
          <a href="#">
            <i className='text-2xl'><BiMovie className='mx-auto' /></i>
          </a>
        </li>

        <li className='flex-grow flex-shrink px-1'>
          <a href="#">
            <i className='text-2xl'><IoBagHandleOutline className='mx-auto' /></i>
          </a>
        </li>

        <li className='flex-grow flex-shrink px-1'>
          <a href="#">
            <img className='w-6 mx-auto' src={dataLogged.photoProfile} alt="profile" />
          </a>
        </li>
      </ul>
    </div>
  )
}

const CardFeed : React.FC<ICardFeed> = ({ username, photoProfile, photo, description, totalLike, totalComment, isLike, isSave }) => {
  const [liked, setLiked] = useState<boolean>(false)

  return(
    <div className='mb-8'>
      <div className='flex flex-row flex-nowrap items-center px-2 mb-2'>
        <div className='flex-grow flex-shrink'>
          <div className='flex flex-row flex-nowrap items-center'>
            <div className='flex-grow-0 flex-shrink pr-2'>
              <img className='w-10' src={photoProfile} alt='profile' />
            </div>
            <div className='flex-grow flex-shrink'>
              <span className='block font-medium'>{username}</span>
            </div>
          </div>
        </div>

        <div className='flex-grow-0 flex-shrink'>
          <button>
            <i className='text-2xl'><HiDotsHorizontal /></i>
          </button>
        </div>
      </div>

      <div className='px-1'>
        <img src={photo} alt={description} className='w-full h-72 object-cover mb-2' />

        <ul className='flex flex-row flex-nowrap'>
          <li className='flex-grow-0 flex-shrink pr-2'>
            <button onClick={e => setLiked(!liked)}>
              {liked
              ? <i className='text-xl text-red-500'><AiFillHeart /></i>
              : <i className='text-xl'><AiOutlineHeart /></i>}
            </button>
          </li>

          <li className='flex-grow-0 flex-shrink pr-2'>
            <button>
              <i className='text-xl'><FaRegComment /></i>
            </button>
          </li>

          <li className='flex-grow-0 flex-shrink pr-2'>
            <button>
              <i className='text-xl'><IoPaperPlaneOutline /></i>
            </button>
          </li>

          <li className='flex-grow flex-shrink text-right'>
            <button>
              <i className='text-xl'><BiLabel /></i>
            </button>
          </li>
        </ul>

        <span className='font-medium block mb-1'>{Intl.NumberFormat().format(totalLike)} suka</span>

        <p>
          <span className='font-medium'>{username}</span> {description}
        </p>

        <span className='text-gray-400'>tampilkan semua {Intl.NumberFormat().format(totalComment)} komentar</span>
      </div>
    </div>
  )
}

const Feed : React.FC = () => {
  return(
    <>
    {dataFeed.map((data, i) => (
      <CardFeed
        key={i}
        username={data.username}
        photoProfile={data.photoProfile}
        photo={data.photo}
        description={data.description}
        totalLike={data.totalLike}
        totalComment={data.totalComment}
        isLike={data.isLike}
        isSave={data.isSave}
      />
    ))}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Header />

      <div className='pb-11'>
        <Stories />

        <Feed />
      </div>

      <Navigation />
    </div>
  );
}

export default App;
