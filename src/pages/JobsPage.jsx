import { Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';

import jobs from '../jobs.json';

export const JobsPage = () => {
  return (
        <>
          <section>
            <div className='container m-auto py-6 px-6'>
              <Link to='/jobs' className='text-indigo-500 hover:text-indigo-600 flex items-center'>
                  <FaArrowLeft className='mr-2' /> Back to Job Listings
              </Link>
          </div>
        </section>

        <section className='bg-indigo-50'>
          <div className='container m-auto py-10 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
              <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>111</div>
                <h1 className='text-3xl font-bold mb-4'>11</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>Bosoton, MA</p>
                </div>
              </div>
              </main>
            </div>
          </div>
        </section>
      
      </>
  )
}

export default JobsPage;