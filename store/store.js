import create from 'zustand';

export const useStore = create(
    (set) => ({
        // cart
        cart: {
            pizzas: [],
        },

        // add pizza in cart
        addPizza: (data) => 
        set((state) => ({
                cart: {
                    pizzas: [...state.cart.pizzas, data],
                }
        })),

        // reset the cart
        resetCart: () =>
        set(()=> ({
            cart: {
                pizzas: []
            }
        }))
    })
    );