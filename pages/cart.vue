<script setup lang="ts">
import { computed, definePageMeta, navigateTo, ref } from "#imports"
import Button from "~/components/button/Button.vue"
import Input from "~/components/input/Input.vue"

definePageMeta({ layout: "with-breadcum" })

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

const cartItems = ref<CartItem[]>([
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image: "https://storage.aoc.com/assets/21573/G15_KV-large.png",
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: 550,
    quantity: 2,
    image:
      "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-5.png?v=1",
  },
])

const couponCode = ref("")
const shippingFee = 0

const subtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
)
const total = computed(() => subtotal.value + shippingFee)

const handleUpdateQuantity = ({ id, value }: { id: number; value: number }) => {
  const product = cartItems.value.find(i => i.id === id)
  if (product) product.quantity = value
}

const handleRemoveItem = (id: number) => {
  cartItems.value = cartItems.value.filter(i => i.id !== id)
}

const applyCoupon = () => {
  alert(`Applied coupon: ${couponCode.value}`)
}

const updateCart = () => {
  alert("Cart updated!")
}
</script>

<template>
  <div class="mx-auto">
    <CartTable
      :items="cartItems"
      @update:quantity="handleUpdateQuantity"
      @remove-item="handleRemoveItem"
    />

    <div class="flex flex-wrap justify-between items-center gap-4 mt-6">
      <Button
        variant="thirdary"
        size="sm"
        @click="navigateTo('/')"
      >
        Return To Shop
      </Button>
      <Button
        variant="thirdary"
        size="sm"
        @click="updateCart"
      >
        Update Cart
      </Button>
    </div>

    <div class="flex items-start justify-between mt-20">
      <div class="flex items-center w-131.75 min-w-0 gap-4">
        <Input
          v-model="couponCode"
          variant="code"
          placeholder="Coupon Code"
        />

        <div>
          <Button
            variant="primary"
            size="sm"
            :style="{ width: '13.1875rem', px: 2 }"
            @click="applyCoupon"
          >
            Apply Coupon
          </Button>
        </div>
      </div>

      <div class="border border-black rounded-md p-6 w-117.5">
        <h2 class="text-[1.25rem] font-medium mb-6 mt-1">Cart Total</h2>

        <div class="flex border-b border-black justify-between pb-3.5 mb-4.5">
          <span>Subtotal:</span>
          <span>${{ subtotal }}</span>
        </div>

        <div class="flex border-b border-black justify-between pb-3.5 mb-4">
          <span>Shipping:</span>
          <span>{{ shippingFee === 0 ? "Free" : `$${shippingFee}` }}</span>
        </div>

        <div class="flex justify-between text-black font-[normal] mb-4">
          <span>Total:</span>
          <span>${{ total }}</span>
        </div>

        <div class="flex items-center justify-center mb-2">
          <Button
            variant="primary"
            size="sm"
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
