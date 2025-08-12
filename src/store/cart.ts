import { create } from 'zustand';

type CartItem = { product_id?: number; starter_id?:number; ring_id?:number; top_id?:number; quantity:number; price?:number; };
type State = {
  items: CartItem[];
  prices: Record<string, number>; // key: p:ID or s/r/t:ID
  add:(i:CartItem)=>void; remove:(idx:number)=>void; setPrices:(p:State['prices'])=>void; clear:()=>void;
  total:()=>number;
};

export const useCart = create<State>((set,get)=>({
  items: [],
  prices: {},
  add: (i)=> set({ items:[...get().items, {...i, quantity: Math.max(1,i.quantity||1)}] }),
  remove: (idx)=> set({ items:get().items.filter((_,i)=>i!==idx) }),
  setPrices: (p)=> set({ prices: p }),
  clear: ()=> set({ items:[] }),
  total: ()=> get().items.reduce((sum,i)=>{
    const keyProd = i.product_id ? `p:${i.product_id}` : '';
    const u =
      i.product_id
        ? get().prices[keyProd]||0
        : (get().prices[`s:${i.starter_id}`]||0) + (get().prices[`r:${i.ring_id}`]||0) + (get().prices[`t:${i.top_id}`]||0);
    return sum + u * (i.quantity||1);
  },0),
}));
