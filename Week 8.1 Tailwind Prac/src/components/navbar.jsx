import React from "react"

 const Navbar = () => {
    return (
        <div>
 <div className="w-full h-16 bg-yellow-500 flex justify-center items-center p-6 ">
            <div className="flex gap-3">
             <span className="text-xl font-bold">Payouts</span>
             <div className="flex gap-2">
             <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
             <span className="text-sm">How it works</span>
             </div>
            </div>
            <div className="w-full">

            <form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium  sr-only ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full h-10 p-4 ps-10 text-sm   rounded     " placeholder="Search Mockups, Logos..." required />
        
    </div>
</form>

            </div>
            <div>
hi from div3
            </div>
        </div>
        </div>
       
    )
}

export default Navbar;