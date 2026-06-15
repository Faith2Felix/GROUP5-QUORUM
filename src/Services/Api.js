const BASE_URL = import.meta.env.VITE_API_URL;

// Validate BASE_URL at startup
if (!BASE_URL) {
  console.error("VITE_API_URL is not defined in environment variables");
  throw new Error("API base URL is not configured");
}

// Helper to get auth token
const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Generic fetch wrapper with error handling
const fetchWithConfig = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const token = getAuthToken();
  
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  
  // Add Authorization header if token exists
  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }
  
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  
  // Don't set Content-Type for FormData (browser will set it with boundary)
  if (config.body instanceof FormData) {
    delete config.headers["Content-Type"];
  }
  
  try {
    const response = await fetch(url, config);
    
    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    let data;
    
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    
    // Return success or error based on HTTP status
    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        error: data.message || data.error || `HTTP ${response.status}`,
        data: null,
      };
    }
    
    return {
      success: true,
      status: response.status,
      data: data,
      error: null,
    };
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    return {
      success: false,
      status: 0,
      error: error.message || "Network error",
      data: null,
    };
  }
};

// REGISTER
export const registerUser = async (userData) => {
  const response = await fetchWithConfig("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  
  // If registration successful and token returned, save it
  if (response.success && response.data?.token) {
    localStorage.setItem("token", response.data.token);
    if (response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
  }
  
  return response;
};

// LOGIN
export const loginUser = async (userData) => {
  const response = await fetchWithConfig("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  
  // If login successful and token returned, save it
  if (response.success && response.data?.token) {
    localStorage.setItem("token", response.data.token);
    if (response.data.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
  }
  
  return response;
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// GET CURRENT USER
export const getCurrentUser = async () => {
  const response = await fetchWithConfig("/api/auth/me", {
    method: "GET",
  });
  
  if (response.success && response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  
  return response;
};

// Generic API methods for other endpoints
export const apiGet = async (endpoint) => {
  return fetchWithConfig(endpoint, { method: "GET" });
};

export const apiPost = async (endpoint, data) => {
  return fetchWithConfig(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const apiPut = async (endpoint, data) => {
  return fetchWithConfig(endpoint, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const apiDelete = async (endpoint) => {
  return fetchWithConfig(endpoint, { method: "DELETE" });
};

export const apiUpload = async (endpoint, formData) => {
  return fetchWithConfig(endpoint, {
    method: "POST",
    body: formData,
    // Don't set Content-Type - FormData needs multipart/form-data
  });
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Get auth token (for debugging)
export const getToken = () => {
  return getAuthToken();
};
