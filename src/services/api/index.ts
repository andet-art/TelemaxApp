// src/services/api/index.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://209.38.231.125:4000", // your backend droplet IP + port
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth requests
export const signup = (data: any) => api.post("/api/auth/signup", data);
export const signin = (data: any) => api.post("/api/auth/signin", data);

// Health check
export const healthCheck = () => api.get("/api/health");

// Two-factor authentication (if you have these routes)
export const enableTwoFA = (data: any) => api.post("/api/twofa/enable", data);
export const verifyTwoFA = (data: any) => api.post("/api/twofa/verify", data);

// Products (if you have these routes)
export const getProducts = () => api.get("/api/products");
export const createProduct = (data: any) => api.post("/api/products", data);
export const updateProduct = (id: string, data: any) => api.put(`/api/products/${id}`, data);
export const deleteProduct = (id: string) => api.delete(`/api/products/${id}`);

// Orders (if you have these routes)
export const getOrders = () => api.get("/api/orders");
export const createOrder = (data: any) => api.post("/api/orders", data);
export const getOrderById = (id: string) => api.get(`/api/orders/${id}`);

// Builder (if you have these routes)
export const getBuilderConfig = () => api.get("/api/builder");
export const saveBuilderConfig = (data: any) => api.post("/api/builder", data);

// Admin routes (if you have these routes)
export const getAdminStats = () => api.get("/api/admin/stats");
export const getAdminUsers = () => api.get("/api/admin/users");
export const getAdminCatalog = () => api.get("/api/admin/catalog");

// Export the axios instance as default for custom requests
export default api;