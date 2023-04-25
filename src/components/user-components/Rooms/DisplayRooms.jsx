import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

function DisplayRooms() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [holder, setHolder] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(holder.slice(0, 8));

  const [roomType, setRoomType] = useState('All');

  useEffect(() => {
    if (roomType == 'All') {
      return setHolder([...products]);
    } else {
      const display = products.filter((room) => {
        return room.category == roomType;
      });
      setHolder(display);
    }
  }, [roomType]);
  useEffect(() => {
    setVisibleProducts(holder.slice(0, 8));
  }, [holder]);
  const handleShowMore = () => {
    const nextVisibleProducts = holder.slice(0, visibleProducts.length + 4);
    setVisibleProducts(nextVisibleProducts);
  };

  const getData = async () => {
    await api.get('/admin/get-hotel-data').then((response) => {
      const data = response.data;
      setProducts([...data]);
      setHolder([...data]);
    });
  };
  useEffect(() => {
    setVisibleProducts(products.slice(0, 8));
    getData();
  }, []);

  return (
    <div className='bg-white h-auto w-screen flex '>
      <sidebar className='h-auto md:w-80  border-gray-300 p-6 border-r sticky '>
        <div className='sticky-top-10'>
          <h1 className='font-sans font-bold text-lg'>Filters</h1>
          <div className='border-b p-4 h-72'>
            <div>
              <h4>Popular locations in Calicut</h4>
              <input type='search' placeholder='search' className='p-2 h-1 rounded-xl' />
            </div>
            <div className='flex flex-wrap gap-2 w-60 mt-3'>
              <div className='w-auto p-2 h-9  bg-gray-200'>kgm</div>
              <div className='w-auto p-2 h-9  bg-gray-200'>kuttikattoor</div>
              <div className='w-auto p-2 h-9  bg-gray-200'>medical Collage</div>
              <div className='w-auto p-2 h-9  bg-gray-200'>Kovoor</div>
              <div className='w-auto p-2 h-9  bg-gray-200'>Mavoor</div>
            </div>
            <h3 className='text-blue-600 font-sans font-semibold mt-4'>+ View More</h3>
          </div>
          <div className='input-block font-sans p-4'>
            <label htmlFor='' className='input-label block '>
              Sort By
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className=' px-4 py-2 w-48 border  '
              name='category'
              id='category'
            >
              <option value='other'>Popularity</option>
              <option value='hotel'>Guest Ratings</option>
              <option value='villa'>Price Low to High</option>
              <option value='resort'>Price High to Low</option>
            </select>
          </div>
          <div className='p-4 h-auto '>
            <h1> Hotel Facilites</h1>
            <div className='flex flex-row items-center gap-4 '>
              <input type='checkbox' />
              <label htmlFor=''>check 1</label>
            </div>
            <div className='flex flex-row items-center gap-4 '>
              <input type='checkbox' />
              <label htmlFor=''>check 1</label>
            </div>
            <div className='flex flex-row items-center gap-4 '>
              <input type='checkbox' />
              <label htmlFor=''>check 1</label>
            </div>

            <h2 className='text-blue-600 font-sans font-semibold mt-4'> +View More</h2>
          </div>
        </div>
      </sidebar>

      <div className='overflow-aut  w-3/4'>
        <div className='bg-whie '>
          <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            {/* <div className="bg- ml-2 mr-4 mt-7  w-full  h-10 flex items-center font-semibold  justify-start md:gap-2 text-sm md:w-1/2 ">
          <a
            className="text-blue-900 flex-1 hover:font-bold focus:font-bold  text-center"
            onClick={() => setRoomType("All")}
          >
            All
          </a>
          <a
            className="text-blue-800 flex-1 hover:font-bold focus:font-bold text-center "
            onClick={() => setRoomType("deluxe")}
          >
            Delux
          </a>
          <a
            className="text-blue-800 flex-1 hover:font-bold focus:font-bold text-center"
            onClick={() => setRoomType("suite")}
          >
            Suite
          </a>
          <a
            className="text-blue-800 flex-1 hover:font-bold focus:font-bold  text-center"
            onClick={() => setRoomType("supreme")}
          >
            Premium
          </a>
        </div> */}

            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Rooms
        </h2> */}

            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 justify-center   '>
              {visibleProducts?.map((product, i) => (
                <div key={product?._id} className='group   relative hover:shadow-lg rounded-md'>
                  <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 '>
                    <img
                      src={product?.images}
                      alt={product?.imageAlt}
                      className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    />
                  </div>
                  <div className='mt-4 flex justify-between p-2.5 '>
                    <div>
                      <h3 className='text-sm text-gray-700'>
                        <a onClick={() => navigate('/single-room-details')}>
                          <span aria-hidden='true' className='absolute inset-0' />
                          {product?.roomName} <span> / </span> {product?.category}
                        </a>
                      </h3>
                      <p className='mt-1 text-sm text-gray-500'>{product?.numberofBeds} beds</p>
                    </div>
                    <p className='text-sm font-medium text-gray-900'>{product?.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {visibleProducts?.length != holder?.length && (
            <div
              className='flex item-center justify-center mx-auto w-60  bg-white border border-sky-600 rounded-lg py-2 px-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50'
              onClick={handleShowMore}
            >
              Show More
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default DisplayRooms;
