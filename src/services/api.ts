const BASE = 'http://209.38.231.125:4000/api';

export const getProducts = async () =>
  (await fetch(`${BASE}/products`)).json();

export const getParts = async () =>
  (await fetch(`${BASE}/products/parts`)).json();

export const createOrder = async (token:string, payload:any) =>
  (await fetch(`${BASE}/orders`, {
    method:'POST',
    headers:{ 'Content-Type':'application/json', 'Authorization':`Bearer ${token}` },
    body: JSON.stringify(payload)
  })).json();
