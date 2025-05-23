import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ProductState {
  likedItems: number[];
  cartItems: number[];
  toggleLike: (id: number) => void;
  toggleCartItem: (id: number) => void;
  isLiked: (id: number) => boolean;
  isInCart: (id: number) => boolean;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      likedItems: [],
      cartItems: [],

      toggleLike: (id: number) => {
        set(state => {
          const likedItems = state.likedItems;
          if (likedItems.includes(id)) {
            return { likedItems: likedItems.filter(itemId => itemId !== id) };
          } else {
            return { likedItems: [...likedItems, id] };
          }
        });
      },

      toggleCartItem: (id: number) => {
        set(state => {
          const cartItems = state.cartItems;
          if (cartItems.includes(id)) {
            return { cartItems: cartItems.filter(itemId => itemId !== id) };
          } else {
            return { cartItems: [...cartItems, id] };
          }
        });
      },

      isLiked: (id: number) => get().likedItems.includes(id),
      isInCart: (id: number) => get().cartItems.includes(id),
    }),
    {
      name: 'product-storage', // localStorage key nomi
      storage: createJSONStorage(() => localStorage), // localStorage ni to‘g‘ri adapterga o‘rnatish
    }
  )
);
