import React from 'react'

export default function HomeTutor() {
  return (
   <>
    <div className="flex row -mx-4 -mb-10 text-center">
      
      <div className="rounded-lg w-full h-[400px] overflow-hidden">
        <a className="relative block   
                      bg-gray-900 group" href="##">
                    <div className="absolute  object-cover w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[800px] bg-[url('data:image/jpeg;base64,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')] inset-0 
                              group-hover:opacity-50">
                    </div>
                    <img alt="testimonial" class="w-20 absolute top-5 right-5   h-20 mb-8 object-cover  rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
                    <div className="relative p-10">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div>
                                <div className="p-2">
                                   
                                    <p className="text-xl text-white">
                                        Welcome to GeeksforGeeks.
                                    </p>
                                    <div className='md:m-[80px] sm:m-[40px]'>
                                    <button className="px-4 py-2 text-sm mr-6 rounded-md  
                                            text-white bg-gray-600">
                                        Join as student
                                    </button>
                                    <button className="px-4 py-2 text-sm 
                                            text-white bg-gray-600">
                                          Join as taecher
                                    </button>
                                    </div>
                                </div>
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </a>
        </div>
      
        
      
      
    </div>
   <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
   <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Serach</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='/teacherprofile'>Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='/teacherprofile'>Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='/teacherprofile'>Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}
