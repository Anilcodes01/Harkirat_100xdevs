export const LastComp = ({orderId, status, transactionId, refundDate, orderAmount}) => {
    return (
        <div className="flex justify-between ml-10 mr-14 mt-6 border-b pb-4">
            <span className="text-blue-600 font-medium">{orderId}</span>
            <div className="flex gap-2 items-center">
            <svg className="w-[10px] h-[10px] fill-[#64c242]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">


<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>

</svg>

            <span>{status}</span>
            </div>
            
            <span>{transactionId}</span>
            <span>{refundDate}</span>
            <span>{orderAmount}</span>
        </div>
    )
}