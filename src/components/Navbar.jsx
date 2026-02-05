// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { useSelector, useDispatch } from "react-redux";
// // // // import { logout } from "../redux/Slice/authSlice";

// // // // export const Navbar = () => {
// // // //   const { isLoggedIn, user } = useSelector((s) => s.auth);
// // // //   const dispatch = useDispatch();

// // // //   const logoutUser = () => {
// // // //     localStorage.clear();
// // // //     dispatch(logout());
// // // //   };

// // // //   return (
// // // //     <nav style={{ display: "flex", gap: 15, marginBottom: 20 }}>
// // // //       <Link to="/">Home</Link>
// // // //       {isLoggedIn && (
// // // //         <>
// // // //           <Link to="/dashboard">Dashboard</Link>
// // // //           <Link to="/settings">Settings</Link>
// // // //           {user.role === "admin" && <Link to="/admin">Admin</Link>}
// // // //           <span>
// // // //             👤 {user.name} ({user.role})
// // // //           </span>
// // // //         </>
// // // //       )}
// // // //       {isLoggedIn ? (
// // // //         <button onClick={logoutUser}>Logout</button>
// // // //       ) : (
// // // //         <>
// // // //           <Link to="/login">Login</Link>
// // // //           <Link to="/signup">Signup</Link>
// // // //         </>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };



// // // import React from "react";
// // // import { NavLink } from "react-router-dom";

// // // const Navbar = () => {
// // //   const linkBase = "text-sm font-semibold transition-opacity";
// // //   const linkInactive = "opacity-60 hover:opacity-100";
// // //   const linkActive = "text-[#47baeb] opacity-100";

// // //   const iconBase =
// // //     "flex items-center justify-center rounded-full size-10 transition-all";
// // //   const iconBg =
// // //     "bg-[#e8eff2] dark:bg-[#1e2d35] text-[#0f171a] dark:text-white hover:bg-[#6cc0e4]/20";

// // //   return (
// // //     <header className="sticky top-0 z-50 w-full glass-card border-b-0 px-6 py-4 flex items-center justify-between mx-auto max-w-[1440px] mt-4 rounded-full">

// // //       {/* LEFT: Logo + Links */}
// // //       <div className="flex items-center gap-8">
// // //         {/* Logo */}
// // //         <NavLink to="/" end>
// // //           <div className="flex items-center gap-3">
// // //             <div className="size-10 bg-[#47baeb] rounded-full flex items-center justify-center text-white" />
// // //             <h2 className="text-xl font-black tracking-tight">Aura AI</h2>
// // //           </div>
// // //         </NavLink>

// // //         {/* Navigation Links */}
// // //         <nav className="hidden md:flex items-center gap-6 flex-wrap">
// // //           <NavLink
// // //             to="/dash"
// // //             className={({ isActive }) =>
// // //               `${linkBase} ${isActive ? linkActive : linkInactive}`
// // //             }
// // //           >
// // //             Dash
// // //           </NavLink>

// // //           <NavLink
// // //             to="/order"
// // //             className={({ isActive }) =>
// // //               `${linkBase} ${isActive ? linkActive : linkInactive}`
// // //             }
// // //           >
// // //             Order Tracking
// // //           </NavLink>

// // //           <NavLink
// // //             to="/product-discovery"
// // //             className={({ isActive }) =>
// // //               `${linkBase} ${isActive ? linkActive : linkInactive}`
// // //             }
// // //           >
// // //             Product Discovery
// // //           </NavLink>
// // //         </nav>
// // //       </div>

// // //       {/* CENTER: Search */}
// // //       <div className="flex flex-1 justify-center max-w-md mx-8">
// // //         <div className="relative w-full">
// // //           <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#47baeb]">
// // //             search
// // //           </span>
// // //           <input
// // //             className="w-full bg-white/50 dark:bg-white/10 border-none rounded-full pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-[#47baeb]/50 placeholder:text-gray-400 text-sm"
// // //             placeholder="Search your aesthetic..."
// // //             type="text"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* RIGHT: Icons */}
// // //       <div className="flex items-center gap-3">
// // //         {/* Wishlist */}
// // //         <NavLink
// // //           to="/wishlist"
// // //           className={({ isActive }) =>
// // //             `${iconBase} ${iconBg} ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
// // //           }
// // //         >
// // //           {/* Favorite icon can go here */}
// // //         </NavLink>

// // //         {/* Cart */}
// // //         <NavLink
// // //           to="/luxury"
// // //           className={({ isActive }) =>
// // //             `${iconBase} ${iconBg} relative ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
// // //           }
// // //         >
// // //           {/* Cart icon can go here */}
// // //           <span className="absolute -top-1 -right-1 bg-[#6cc0e4] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#f6f7f8] dark:border-[#121c20]">
// // //             2
// // //           </span>
// // //         </NavLink>

// // //         {/* Profile Avatar */}
// // //         <NavLink
// // //           to="/premium-account"
// // //           className="ssize-10 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-800"
// // //           style={{
// // //             backgroundImage:
// // //               'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATH_-fpaWUviKCO9PDWz-qUz0l7PhpcaCUfldK0kCUvkUHyzaiZe0e0NZ4Jb2Gtb6eIz_35MJlIPoc3ePg1JYVoPDbgEsOZG9PG2v-MyO_spaXRJOGAfYonqr03O1vq3PvaMvvyhGinzFiblCKbMPqQpmhjSJLW28-MPg7TwPjdN5WRVt4G7jHaFbZ1ar3f7evyHENZJqxkK1dnNzzIgQbc0F9p9FJw_NUZvi3kZohu366FH9sMQSP3WA4lACHCtjJ-8vLuX2NZSs")',
// // //             backgroundSize: "cover",
// // //             backgroundPosition: "center",
// // //             width: "50px",
// // //             height: "50px",
// // //             display: "inline-block",
// // //           }}
// // //         />
// // //       </div>

// // //     </header>
// // //   );
// // // };

// // // export default Navbar;


// // import React, { useState } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { Dashboard } from "../pages/Dashboard";

// // const Navbar = () => {
// //   // Simulate user login state (replace with real auth state later)
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// // const navigate = useNavigate();
// //   const linkBase = "text-sm font-semibold transition-opacity";
// //   const linkInactive = "opacity-60 hover:opacity-100";
// //   const linkActive = "text-[#47baeb] opacity-100";

// //   const iconBase =
// //     "flex items-center justify-center rounded-full size-10 transition-all";
// //   const iconBg =
// //     "bg-[#e8eff2] dark:bg-[#1e2d35] text-[#0f171a] dark:text-white hover:bg-[#6cc0e4]/20";

// //   const handleLoginClick = () => {
// //     // Redirect to /dash
// //     navigate("/login");
// //   };

// //   return (
// //     <header className="sticky top-0 z-50 w-full glass-card border-b-0 px-6 py-4 flex items-center justify-between mx-auto max-w-[1440px] mt-4 rounded-full">

// //       {/* LEFT: Logo + Links */}
// //       <div className="flex items-center gap-8">
// //         {/* Logo */}
// //         <NavLink to="/" end>
// //           <div className="flex items-center gap-3">
// //             <div className="size-10 bg-[#47baeb] rounded-full flex items-center justify-center text-white" />
// //             <h2 className="text-xl font-black tracking-tight">Aura AI</h2>
// //           </div>
// //         </NavLink>

// //         {/* Navigation Links */}
// //         <nav className="hidden md:flex items-center gap-6 flex-wrap">
// //           {/* Links visible to everyone */}

// //           <NavLink
// //             to="/product-discovery"
// //             className={({ isActive }) =>
// //               `${linkBase} ${isActive ? linkActive : linkInactive}`
// //             }
// //           >
// //             Product Discovery
// //           </NavLink>

// //           {/* Links visible only to logged-in users */}
// //           {isLoggedIn && (
// //             <>
// //               <NavLink
// //                 to="/dash"
// //                 className={({ isActive }) =>
// //                   `${linkBase} ${isActive ? linkActive : linkInactive}`
// //                 }
// //               >
// //                 Dash
// //               </NavLink>

// //               <NavLink
// //                 to="/order"
// //                 className={({ isActive }) =>
// //                   `${linkBase} ${isActive ? linkActive : linkInactive}`
// //                 }
// //               >
// //                 Order Tracking
// //               </NavLink>
// //             </>
// //           )}
// //         </nav>
// //       </div>

// //       {/* CENTER: Search */}
// //       <div className="flex flex-1 justify-center max-w-md mx-8">
// //         <div className="relative w-full">
// //           <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#47baeb]">
// //             search
// //           </span>
// //           <input
// //             className="w-full bg-white/50 dark:bg-white/10 border-none rounded-full pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-[#47baeb]/50 placeholder:text-gray-400 text-sm"
// //             placeholder="Search your aesthetic..."
// //             type="text"
// //           />
// //         </div>
// //       </div>

// //       {/* RIGHT: Icons */}
// //       <div className="flex items-center gap-3">
// //         {!isLoggedIn ? (
// //           // Show login button if not logged in
// //           <button
// //             onClick={handleLoginClick}
// //             className="px-4 py-2 bg-[#47baeb] text-white rounded-full hover:bg-[#36a2d1]"
// //           >
// //             Login
// //           </button>
// //         ) : (
// //           // Show profile, wishlist, cart if logged in
// //           <>
// //             <NavLink
// //               to="/wishlist"
// //               className={({ isActive }) =>
// //                 `${iconBase} ${iconBg} ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
// //               }
// //             >
// //               {/* Favorite icon here */}
// //             </NavLink>

// //             <NavLink
// //               to="/luxury"
// //               className={({ isActive }) =>
// //                 `${iconBase} ${iconBg} relative ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
// //               }
// //             >
// //               <span className="absolute -top-1 -right-1 bg-[#6cc0e4] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#f6f7f8] dark:border-[#121c20]">
// //                 2
// //               </span>
// //             </NavLink>

// //             <NavLink
// //               to="/premium-account"
// //               className="ssize-10 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-800"
// //               style={{
// //                 backgroundImage:
// //                   'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATH_-fpaWUviKCO9PDWz-qUz0l7PhpcaCUfldK0kCUvkUHyzaiZe0e0NZ4Jb2Gtb6eIz_35MJlIPoc3ePg1JYVoPDbgEsOZG9PG2v-MyO_spaXRJOGAfYonqr03O1vq3PvaMvvyhGinzFiblCKbMPqQpmhjSJLW28-MPg7TwPjdN5WRVt4G7jHaFbZ1ar3f7evyHENZJqxkK1dnNzzIgQbc0F9p9FJw_NUZvi3kZohu366FH9sMQSP3WA4lACHCtjJ-8vLuX2NZSs")',
// //                 backgroundSize: "cover",
// //                 backgroundPosition: "center",
// //                 width: "50px",
// //                 height: "50px",
// //                 display: "inline-block",
// //               }}
// //             />
// //           </>
// //         )}
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;


// import React, { useState } from "react";
// export const { loginSuccess, restoreSession, logout } = authSlice.actions;
// import { NavLink, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const linkBase = "text-sm font-semibold transition-opacity";
//   const linkInactive = "opacity-60 hover:opacity-100";
//   const linkActive = "text-[#47baeb] opacity-100";

//   const iconBase =
//     "flex items-center justify-center rounded-full size-10 transition-all";
//   const iconBg =
//     "bg-[#e8eff2] dark:bg-[#1e2d35] text-[#0f171a] dark:text-white hover:bg-[#6cc0e4]/20";

//   // Handle login success
//   const handleLoginClick = () => {
//     setIsLoggedIn(true);    // mark user as logged in
//     navigate("/dashboard");       // redirect to dashboard
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full glass-card border-b-0 px-6 py-4 flex items-center justify-between mx-auto max-w-[1440px] mt-4 rounded-full">

//       {/* LEFT: Logo + Links */}
//       <div className="flex items-center gap-8">
//         {/* Logo */}
//         <NavLink to={isLoggedIn ? "/dashboard" : "/"} end>
//           <div className="flex items-center gap-3">
//             <div className="size-10 bg-[#47baeb] rounded-full flex items-center justify-center text-white" />
//             <h2 className="text-xl font-black tracking-tight">Aura AI</h2>
//           </div>
//         </NavLink>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex items-center gap-6 flex-wrap">
//           {/* Links visible to everyone */}
//           <NavLink
//             to="/product-discovery"
//             className={({ isActive }) =>
//               `${linkBase} ${isActive ? linkActive : linkInactive}`
//             }
//           >
//             Product Discovery
//           </NavLink>

//           {/* Links only visible when logged in */}
//           {isLoggedIn && (
//             <>

//               <NavLink
//                 to="/order"
//                 className={({ isActive }) =>
//                   `${linkBase} ${isActive ? linkActive : linkInactive}`
//                 }
//               >
//                 Order Tracking
//               </NavLink>
//             </>
//           )}
//         </nav>
//       </div>

//       {/* CENTER: Search */}
//       <div className="flex flex-1 justify-center max-w-md mx-8">
//         <div className="relative w-full">
//           <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#47baeb]">
//             search
//           </span>
//           <input
//             className="w-full bg-white/50 dark:bg-white/10 border-none rounded-full pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-[#47baeb]/50 placeholder:text-gray-400 text-sm"
//             placeholder="Search your aesthetic..."
//             type="text"
//           />
//         </div>
//       </div>

//       {/* RIGHT: Icons */}
//       <div className="flex items-center gap-3">
//         {!isLoggedIn ? (
//           <button
//             onClick={handleLoginClick}
//             className="px-4 py-2 bg-[#47baeb] text-white rounded-full hover:bg-[#36a2d1]"
//           >
//             Login
//           </button>
//         ) : (
//           <>
//             <NavLink
//               to="/wishlist"
//               className={({ isActive }) =>
//                 `${iconBase} ${iconBg} ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
//               }
//             >
//               {/* Favorite icon here */}
//             </NavLink>

//             <NavLink
//               to="/luxury"
//               className={({ isActive }) =>
//                 `${iconBase} ${iconBg} relative ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
//               }
//             >
//               <span className="absolute -top-1 -right-1 bg-[#6cc0e4] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#f6f7f8] dark:border-[#121c20]">
//                 2
//               </span>
//             </NavLink>

//             <NavLink
//               logout 
//               className="ssize-10 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-800"
//               style={{
//                 backgroundImage:
//                   'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATH_-fpaWUviKCO9PDWz-qUz0l7PhpcaCUfldK0kCUvkUHyzaiZe0e0NZ4Jb2Gtb6eIz_35MJlIPoc3ePg1JYVoPDbgEsOZG9PG2v-MyO_spaXRJOGAfYonqr03O1vq3PvaMvvyhGinzFiblCKbMPqQpmhjSJLW28-MPg7TwPjdN5WRVt4G7jHaFbZ1ar3f7evyHENZJqxkK1dnNzzIgQbc0F9p9FJw_NUZvi3kZohu366FH9sMQSP3WA4lACHCtjJ-8vLuX2NZSs")',
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 width: "50px",
//                 height: "50px",
//                 display: "inline-block",
//               }}
//             />
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/Slice/authSlice"; // adjust path if needed

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkBase = "text-sm font-semibold transition-opacity";
  const linkInactive = "opacity-60 hover:opacity-100";
  const linkActive = "text-[#47baeb] opacity-100";

  const iconBase =
    "flex items-center justify-center rounded-full size-10 transition-all";
  const iconBg =
    "bg-[#e8eff2] dark:bg-[#1e2d35] text-[#0f171a] dark:text-white hover:bg-[#6cc0e4]/20";

  // Handle login navigation
  const handleLogin = () => {
    navigate("/login"); // redirect to login page
  };

  // Handle logout
  const handleLogout = () => {
    dispatch(logout()); // clears slice state
    navigate("/"); // redirect home
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b-0 px-6 py-4 flex items-center justify-between mx-auto max-w-[1440px] mt-4 rounded-full">

      {/* LEFT: Logo + Links */}
      <div className="flex items-center gap-8">
        <NavLink to={isLoggedIn ? "/dashboard" : "/"} end>
          <div className="flex items-center gap-3">
            <div className="size-10 bg-[#47baeb] rounded-full flex items-center justify-center text-white" />
            <h2 className="text-xl font-black tracking-tight">Aura AI</h2>
          </div>
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 flex-wrap">
          <NavLink
            to="/product-discovery"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Product Discovery
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="/order"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Order Tracking
            </NavLink>
          )}

          {isLoggedIn && user?.role === "admin" && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Admin
            </NavLink>
          )}
        </nav>
      </div>

      {/* CENTER: Search */}
      <div className="flex flex-1 justify-center max-w-md mx-8">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#47baeb]">
            search
          </span>
          <input
            className="w-full bg-white/50 dark:bg-white/10 border-none rounded-full pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-[#47baeb]/50 placeholder:text-gray-400 text-sm"
            placeholder="Search your aesthetic..."
            type="text"
          />
        </div>
      </div>

      {/* RIGHT: Icons / Auth */}
      <div className="flex items-center gap-3">
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-[#47baeb] text-white rounded-full hover:bg-[#36a2d1]"
          >
            Login
          </button>
        ) : (
          <>
            {/* Wishlist */}
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `${iconBase} ${iconBg} ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
              }
            ></NavLink>

            {/* Cart */}
            <NavLink
              to="/luxury"
              className={({ isActive }) =>
                `${iconBase} ${iconBg} relative ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
              }
            >
              <span className="absolute -top-1 -right-1 bg-[#6cc0e4] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#f6f7f8] dark:border-[#121c20]">
                2
              </span>
            </NavLink>

            {/* Profile Avatar */}
            <div className="relative">
              <NavLink
                to="/premium-account"
                className="ssize-10 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-800"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATH_-fpaWUviKCO9PDWz-qUz0l7PhpcaCUfldK0kCUvkUHyzaiZe0e0NZ4Jb2Gtb6eIz_35MJlIPoc3ePg1JYVoPDbgEsOZG9PG2v-MyO_spaXRJOGAfYonqr03O1vq3PvaMvvyhGinzFiblCKbMPqQpmhjSJLW28-MPg7TwPjdN5WRVt4G7jHaFbZ1ar3f7evyHENZJqxkK1dnNzzIgQbc0F9p9FJw_NUZvi3kZohu366FH9sMQSP3WA4lACHCtjJ-8vLuX2NZSs")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "50px",
                  height: "50px",
                  display: "inline-block",
                }}
              />
              {/* Logout button overlay */}
              <button
                onClick={handleLogout}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
