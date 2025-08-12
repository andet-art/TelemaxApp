import { getProducts, getParts } from './api';
import { useCart } from '../store/cart';

export async function hydratePrices(){
  const [products, parts] = await Promise.all([getProducts(), getParts()]);
  const prices: Record<string,number> = {};
  products.forEach((p:any)=> prices[`p:${p.id}`] = Number(p.price));
  parts.forEach((p:any)=> prices[`${p.type[0]}:${p.id}`] = Number(p.price||0));
  useCart.getState().setPrices(prices);
}
