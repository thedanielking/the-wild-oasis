import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles"

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Checkin from "./pages/Checkin";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      //staleTime: 60 * 1000, // this is the amount of time the data will stay fresh
      staleTime: 0,
    }
  })

  //provide the react query just like context api. 
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element= {<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element= {<Dashboard />} />
          <Route path="bookings" element= {<Bookings />} />
          <Route path="booking/:bookingId" element= {<Booking />} />
          <Route path="checkin/:bookingId" element= {<Checkin />} />
          <Route path="cabins" element= {<Cabins />} />
          <Route path="users" element= {<Users />} />
          <Route path="settings" element= {<Settings />} />
          <Route path="account" element= {<Account />} />
        </Route>        
        <Route path="login" element= {<Login />} />
        <Route path="*" element= {<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    <Toaster 
    position="top-center"
    gutter={12}
    containerStyle={{margin: "8px"}}
    toastOptions={{
      success: {
        duration: 3000,
      },
      error: {
        duration: 5000,
      },
      style: {
        fontSize: "16px",
        maxWidth: "500px",
        padding: "16px 20px",
        backgroundColor: "var(--color-grey-0)",
        color: "var(--color-grey-700)"
      }
    }}
     />
    </QueryClientProvider> 
  )
}

export default App
