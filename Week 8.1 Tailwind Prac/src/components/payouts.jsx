export const Payouts = ({payouts, refunds}) => {

    return (
        <div className="pt-12 pl-6 flex gap-4">
            <button className="rounded-full h-8 w-32 bg-neutral-200 text-gray-500">Payouts({payouts})</button>
            <button className="rounded-full h-8 w-32 bg-blue-600 text-white">Refunds({refunds})</button>
        </div>
    )
}