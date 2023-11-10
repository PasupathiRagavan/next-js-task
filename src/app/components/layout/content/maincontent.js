import React  from 'react';

const MainContent = ({children}) => {
 
  return (
    /* <!-- Content --> */
    <main className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <div className="flex min-h-screen flex-col">
        { children }
      </div>
    </main>
   /*  <!-- End Content --> */
  )
}

export default MainContent;