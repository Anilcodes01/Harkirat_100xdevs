import { RevenueCard2 } from "./RevenueCard2"
import { RevenueCard1 } from "./RevenueCard1"


export const Overview = () => {


    return (
        <div className="flex flex-col gap-4 bg-white-500">
<div className="flex justify-between pl-6 pr-4 h-16 items-center">
    <span className="text-xl font-bold">Overview</span>
    <div className="flex rounded border h-10 items-center pl-2 pr-2 border-black-150">
        <span>This Month</span>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4  ml-1 font-bold"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
    </div>
    
   </div>
   
        </div>
      


   
    )

}