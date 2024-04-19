export const OrderSearch = () => {
    return (
        <div className="flex justify-between pr-2  pt-3">
            <div>
            <div className="w-full">

<form class="max-w-md mx-auto ml-10 mr-10 ">   
<label for="default-search" class="mb-2 text-sm font-medium  sr-only ">Search</label>
<div class="relative">
<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
</svg>
</div>
<input type="search" id="default-search" className="block w-full h-10 p-4 ps-10 text-sm  rounded border    " placeholder="Order ID or transaction ID" required />

</div>
</form>

</div>


            </div>
            <div className="flex gap-3">
            <div className="border rounded-md h-9 w-24 flex justify-center ">
                <div className="flex items-center justify-center gap-1">
                    <span className="text-md text-black-500">Sort</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>


                </div>
                
            </div>

            <div className="border h-9 w-12 flex rounded-md justify-center items-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

</div>
            </div>
           

        </div>
    )
}


