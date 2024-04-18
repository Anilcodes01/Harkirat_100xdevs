export const RevenueCard1 = ({ title, amount, orderCount, day, time  }) => {
    return (
        <div className="rounded bg-white-500 ">
 <div className="bg-blue-700 rounded-t-md shadow-md ">
        <div className="text-white flex gap-2 p-4">
          {title}{" "}
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
        </div>
        <div className="flex justify-between pl-3 pb-3">
          <div className="font-semibold text-3xl text-white">₹ {amount}</div>
          {orderCount ? (
            <div className="flex cursor-pointer font-sm flex flex-col justify-center">
                <div className="flex">
  
              
              <div className="text-white underline">{orderCount} orders</div>
              
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            </div>
          ) : null}
        </div>
      
        
      </div>
      <div className="bg-blue-900 h-10 items-center rounded-b-md">
<div className="flex justify-between ">
    <span className="mt-2 ml-2 text-white">Next Payout date:</span>
    <span className="mt-2 mr-2 text-white">{day}, {time} PM</span>
</div>
      </div>
     
      
        </div>
        
     
    );
  };
  