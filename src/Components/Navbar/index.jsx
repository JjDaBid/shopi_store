import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'


const Navbar = () => {

    const context = useContext(ShoppingCartContext)

    const activeStyle = "underline underline-offset-4"


    const getNavLinkClassName = (isActive) => (isActive ? activeStyle : undefined);

    
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCategory()}                
                        className={({ isActive }) => getNavLinkClassName(isActive)}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}  
                        className={({ isActive}) => getNavLinkClassName(isActive)}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}  
                        className={({ isActive}) => getNavLinkClassName(isActive)}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('futnitures')}  
                        className={({ isActive}) => getNavLinkClassName(isActive)}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        onClick={() => context.setSearchByCategory('toys')}  
                        className={({ isActive}) => getNavLinkClassName(isActive)}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}  
                        className={({ isActive}) => getNavLinkClassName(isActive)}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">                
                    david@mail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive}) => getNavLinkClassName(isActive)}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive}) => getNavLinkClassName(isActive)}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive}) => getNavLinkClassName(isActive)}
                    >
                        Sing In
                    </NavLink>
                </li>
                <li className="flex items-center">                 
                    <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
                    <div>{context.cartProducts.length}</div>                
                </li>          
                
            </ul>
        </nav>
    )
}
export default Navbar