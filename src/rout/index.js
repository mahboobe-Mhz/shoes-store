import Navigo from "navigo";
import 'swiper/css/bundle';
import { HomePage1, brandChoiceFunc } from "../screens/home/homePage1";
import { page1 } from "../screens/start/page1";
import { brandPic } from "../screens/home/brandIcon/inedx";
import { brandName } from "../screens/home/barndName";
import { page2 } from "../screens/start/page2";
import {  page3 } from "../screens/start/page3";
import { Login } from "../screens/login";
import { ShowShoes } from "../screens/home/showshoes";
import {  brandPagee, fetchBrand } from "../screens/home/brandPage";
import { chooesColor, chooseSize, getShoesData, showShoesData, viewMore } from "../screens/showShoesData";
import { seeAll } from "../screens/home/seeAll";
import { newSwiper } from "../layOut/swiper";
import { getWishListData, wishList } from "../screens/wishList";
import { searchBox2, searchingRout } from "../component/searching";
import { choicesShoes, myCart, total } from "../screens/cart";
import { changeIconToCart, changeIconToOrder } from "../component/footer";
import { ChangAmount, OrderList, changeAddressData, changeShippingPrice, checkOut } from "../screens/checkout";
import { ShippingAddress, chooseAddress } from "../screens/shippingAddress";
import { chooseAddresss, chooseShipping } from "../screens/chooseShipping";
import { paymentMethod } from "../screens/paymentMethod";
import { paySuccess } from "../screens/paySuccess";
import { Active, MyOrder } from "../screens/myOrders";

const changePage =(page,data)=>{
    const root = document.getElementById("app")
    root.innerHTML=''
    root.appendChild(page(data))
}
export const Router = (pagee)=>{
    const router =new Navigo()

    router.on("/",()=>{
        changePage(page1)
      
    }).on('/welcome',()=>{
        changePage(page2)
      
    }).on('/aboutUs',()=>{
        changePage(page3)
        newSwiper()
    }).on('login',()=>{
        changePage(Login)
    }).on('/home',()=>{
        changePage(HomePage1)
        brandName()
        brandPic()
        ShowShoes("showShoes")
        brandChoiceFunc()
       
    }).on(`/${pagee}`,(pagee)=>{

      changePage(brandPagee,pagee.url)
       fetchBrand(pagee.url)
  
    }).on('/stuff',()=>{
  
        changePage(showShoesData)
        getShoesData()
        setTimeout(() => {
            viewMore()
        chooseSize()
        chooesColor()
        }, 1000);
        
   
    }).on('/All',()=>{
    changePage(seeAll)
    ShowShoes("showShoess")
    brandName()
    brandChoiceFunc()
    }).on('/wishList',()=>{
       changePage (wishList)
        getWishListData()
        brandName()
        brandPagee()
        brandChoiceFunc() 
    }).on('/search',()=>{
        changePage(searchingRout)
        searchBox2()
    }).on('/myCart',()=>{
        changePage(myCart)
        changeIconToCart()
        choicesShoes() 
    }).on('/checkOut',()=>{
        changePage(checkOut)
        OrderList()
        changeAddressData()
        changeShippingPrice()
        ChangAmount()
    }).on('/shippingAddress',()=>{
        changePage(ShippingAddress)
        chooseAddress()
    }).on('/chooseShipping',()=>{
        changePage(chooseShipping)
        chooseAddresss()
    }).on('/paymentMethod',()=>{
        changePage(paymentMethod)
    }).on('/paySuccess',()=>{
        changePage(paySuccess)
    }).on('/myOrder',()=>{
        changePage(MyOrder)
        changeIconToOrder()
        Active()
    })
    router.resolve()
    return router
}
