import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {

    // Shopping Cart - Quantity increment
    const [count, setCount] = useState(0);

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);    
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);    
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)        

    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    });

    // Shopping cart - Adding prodcuts to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping cart - Order
    const [order, setOrder] = useState([])

    // Get Products
    const [items, setItems] = useState(null)

    const [filteredItems, setFilteredItems] = useState(null)

    // Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    // Get Products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response =>response.json())
          .then(data => setItems(data))
      }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    useEffect(() => {
    if (searchByTitle) {
        setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    } else if (searchByCategory) {
        setFilteredItems(filteredItemsByCategory(items, searchByCategory));
    } else {
        setFilteredItems(items);
    }
  }, [items, searchByTitle, searchByCategory]);
    

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}