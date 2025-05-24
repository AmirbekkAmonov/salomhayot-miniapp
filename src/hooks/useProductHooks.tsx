import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ProductState {
  likedItems: string[];
  cartItems: string[];
  toggleLike: (key: string) => void;
  toggleCartItem: (key: string) => void;
  isLiked: (key: string) => boolean;
  isInCart: (key: string) => boolean;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      likedItems: [],
      cartItems: [],

      toggleLike: (key: string) => {
        set(state => {
          const likedItems = state.likedItems;
          if (likedItems.includes(key)) {
            return { likedItems: likedItems.filter(itemKey => itemKey !== key) };
          } else {
            return { likedItems: [...likedItems, key] };
          }
        });
      },
      

      toggleCartItem: (key: string) => {
        set(state => {
          const cartItems = state.cartItems;
          if (cartItems.includes(key)) {
            return { cartItems: cartItems.filter(itemKey => itemKey !== key) };
          } else {
            return { cartItems: [...cartItems, key] };
          }
        });
      },

      isLiked: (key: string) => get().likedItems.includes(key),
      isInCart: (key: string) => get().cartItems.includes(key),
    }),
    {
      name: 'product-storage', // localStorage key nomi
      storage: createJSONStorage(() => localStorage), // localStorage ni to‘g‘ri adapterga o‘rnatish
    }
  )
);
