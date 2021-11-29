import MainPage from "./pages/MainPage"
import TestPage from "./pages/TestPage"
import ProfilePage from "./pages/ProfilePage"

export const privateRoutes = [
    {path: '/', element: <MainPage/>, id: 1},
    {path: 'test', element: <TestPage/>, id: 2},
    {path: 'profile', element: <ProfilePage/>, id: 3},
    {path: '*', element: <MainPage/>, id: 4},
]

export const publicRoutes = [
    {path: '/', element: <MainPage/>, id: 1},
    {path: '*', element: <MainPage/>, id: 2},
]