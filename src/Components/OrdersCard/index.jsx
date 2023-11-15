// import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props
    console.log("total " + totalProducts)
   

    return (
        <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <span className="font-light">01.02.23</span>
                    <span className="font-light">{totalProducts} articles</span>
                </div>
                <span className="font-medium text-2xl">${totalPrice}</span>
            </div>            
        </div>
    )
}

export default OrdersCard