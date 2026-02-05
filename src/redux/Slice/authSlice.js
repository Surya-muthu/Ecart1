// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/api";

// /* ===== LOGIN THUNK ===== */
// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, { dispatch, rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}/login/`, {
//         email: email.trim(),
//         password: password.trim(),
//       });
//       const data = response.data;

//       // Store tokens in localStorage
//       localStorage.setItem("accessToken", data.access);
//       localStorage.setItem("refreshToken", data.refresh);
//       localStorage.setItem("user", JSON.stringify(data.user));

//       // Update Redux state
//       dispatch(
//         loginSuccess({
//           user: data.user,
//           accessToken: data.access,
//           refreshToken: data.refresh,
//         })
//       );

//       return data;
//     } catch (err) {
//       return rejectWithValue(
//         err.response?.data?.detail || err.message || "Login failed"
//       );
//     }
//   }
// );

// /* ===== LOGOUT THUNK ===== */
// export const logoutUser = () => (dispatch) => {
//   // Clear Redux and localStorage
//   dispatch(logout());
// };

// /* ===== SLICE ===== */
// const initialState = {
//   user: null,
//   accessToken: null,
//   refreshToken: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.user = action.payload.user;
//       state.accessToken = action.payload.accessToken;
//       state.refreshToken = action.payload.refreshToken;
//       state.isLoggedIn = true;
//     },
//     restoreSession: (state) => {
//       const accessToken = localStorage.getItem("accessToken");
//       const refreshToken = localStorage.getItem("refreshToken");
//       const user = localStorage.getItem("user");

//       if (accessToken && refreshToken) {
//         state.accessToken = accessToken;
//         state.refreshToken = refreshToken;
//         state.isLoggedIn = true;
//         state.user = user ? JSON.parse(user) : null;
//       }
//     },
//     logout: (state) => {
//       state.user = null;
//       state.accessToken = null;
//       state.refreshToken = null;
//       state.isLoggedIn = false;

//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("refreshToken");
//       localStorage.removeItem("user");
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(loginUser.rejected, (state) => {
//       state.isLoggedIn = false;
//     });
//   },
// });

// export const { loginSuccess, restoreSession, logout } = authSlice.actions;
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const selectUser = (state) => state.auth.user;
// export default authSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

/* ===== LOGIN THUNK ===== */
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login/`, {
        email: email.trim(),
        password: password.trim(),
      });
      const data = response.data;

      // Store tokens in localStorage
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Update Redux state
      dispatch(
        loginSuccess({
          user: data.user,
          accessToken: data.access,
          refreshToken: data.refresh,
        })
      );

      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.detail || err.message || "Login failed"
      );
    }
  }
);

/* ===== REGISTER THUNK ===== */
export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register/`, payload);
      const data = response.data;

      // Optionally auto-login after register
      if (data.user && data.access && data.refresh) {
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("user", JSON.stringify(data.user));

        dispatch(
          loginSuccess({
            user: data.user,
            accessToken: data.access,
            refreshToken: data.refresh,
          })
        );
      }

      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.detail || err.message || "Registration failed"
      );
    }
  }
);

/* ===== LOGOUT THUNK ===== */
export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

/* ===== SLICE ===== */
const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    restoreSession: (state) => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      const user = localStorage.getItem("user");

      if (accessToken && refreshToken) {
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = user ? JSON.parse(user) : null;
        state.isLoggedIn = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoggedIn = false;
      });
  },
});

/* ===== EXPORTS ===== */
export const { loginSuccess, restoreSession, logout } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
