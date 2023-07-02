<template>
    <h1>Cart page</h1>
    <h2 v-for="item in filteredCartItem">
        {{ item.name }} - {{ getItemLength(item.id) }}

        <button @click="removeOneItem(item.id)">Remove one</button>
        <button @click="removeAll(item.id)">Remove all {{ item.name }}</button>
    </h2>
</template>

<script>
export default {
    props: {
        cartItem: {
            type: Array,
            required: true
        }
    },

    emits: ['update-cart'],
    computed: {
        filteredCartItem() {
            return this.cartItem.filter((item, index) => {
                return index === this.cartItem.findIndex(obj => {
                    return JSON.stringify(obj) === JSON.stringify(item);
                })
            })
        }
    },
    methods: {
        getItemLength(itemId) {
            const sameItems = this.cartItem.filter(item => item.id === itemId);
            return sameItems.length
        },

        removeOneItem(itemId) {

            const index = this.cartItem.findIndex(item => item.id === itemId);
            if (index !== -1) {
                this.cartItem.splice(index, 1);
            }

            localStorage.setItem("cart", JSON.stringify(this.cartItem))
        },

        removeAll(itemId) {
            const filteredItems = this.cartItem.filter(item => item.id !== itemId);
            this.$emit("update-cart", filteredItems);
            localStorage.setItem("cart", JSON.stringify(filteredItems))
            console.log(filteredItems)
        }
    }
}
</script>