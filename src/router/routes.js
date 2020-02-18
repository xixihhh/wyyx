// 引入路由
import Home from '../pages/Home/Home'
import Class from '../pages/Class/Class'
import Buy from '../pages/Buy/Buy'
import ShopCart from '../pages/ShopCart/ShopCart'
import Mine from '../pages/Mine/Mine'
import Login from '../pages/Login/Login'

export default [
    {
        path:'/home',
        component: Home

    },
    {
        path:'/class',
        component:Class

    },
    {
        path:'/buy',
        component:Buy

    },
    {
        path:'/shopcart',
        component:ShopCart

    },

    {
        path:'/mine',
        component:Mine

    },
    {
        path:'/login',
        component:Login

    },
    {
        path:'/',
        redirect:'/home'
    }


]