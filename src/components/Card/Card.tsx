import { CardProps } from "./Card.type"

function formatNumber(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Card(
    {
        voucherType,
        pointToRedeem,
        awardName,
        awardImage
    }: CardProps
) {
    let bgColor: string = '';

    if (voucherType === 'Voucher') {
        bgColor = 'bg-blue-600';
    } else if (voucherType === 'Products') {
        bgColor = 'bg-amber-700';
    } else if (voucherType === 'Giftcard') {
        bgColor = 'bg-yellow-500';
    }

    const formattedPointNumber = formatNumber(pointToRedeem)

    return (
        <div className='flex flex-col relative'>
            <div
                className={`flex flex-col min-h-[8em] justify-between p-4 bg-gray-200 shadow-md rounded-md transition-transform transform-gpu hover:-translate-y-1 hover:cursor-pointer`}
                style={{
                    backgroundImage: `url(${awardImage})`,
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className='flex flex-row justify-end'>
                    <span className={`rounded-md ${bgColor} py-1 px-2 text-white text-sm font-semibold`}>
                        {voucherType}
                    </span>
                </div>
                <div className='invert text-md font-semibold drop-shadow-lg'>{formattedPointNumber} Poin</div>
            </div>
            <span className='mt-2 font-bold'>{awardName}</span>            
        </div>
    )
}

export default Card