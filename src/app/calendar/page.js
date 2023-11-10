import React from 'react'
import CustomText from '../components/base/Text'

const Calendar = () => {
  return (
    <section>
        {/*  <!-- Page Heading --> */}
        <div>
          <CustomText as="h1" className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">Calendar</CustomText>
          <CustomText as="p" className="mt-2 text-lg text-gray-800 dark:text-gray-400">Calendar content goes here.</CustomText>
        </div>
      	{/*  <!-- End Page Heading --> */}
    </section>
  )
}

export default Calendar