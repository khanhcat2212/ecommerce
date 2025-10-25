<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ChevronDown, ChevronUp, X } from "lucide-vue-next"
import { defineEmits } from "vue"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

const props = defineProps<{
  items: CartItem[]
}>()

const emit = defineEmits(["update:quantity", "remove-item"])

const updateQuantity = (id: number, value: number) => {
  emit("update:quantity", { id, value })
}

const removeItem = (id: number) => {
  emit("remove-item", id)
}
</script>

<template>
  <div class="flex flex-col gap-10">
    <div
      class="grid grid-cols-4 text-gray-600 shadow-sm font-medium px-10 py-6 bg-white rounded-lg"
    >
      <div>Product</div>
      <div>Price</div>
      <div>Quantity</div>
      <div class="text-right">Subtotal</div>
    </div>

    <div
      v-for="item in items"
      :key="item.id"
      class="group grid grid-cols-4 items-center bg-white rounded-xl shadow-sm px-8 py-5 transition hover:shadow-lg"
    >
      <div class="relative flex items-center gap-4">
        <button
          class="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-[18px] h-[18px] flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
          @click="removeItem(item.id)"
        >
          <p class="items-center text-[12px] font-bold">✕</p>
        </button>
        <img
          :src="item.image"
          alt=""
          class="w-16 h-16 object-contain"
        />
        <span class="font-medium">{{ item.name }}</span>
      </div>

      <div>${{ item.price }}</div>

      <div
        class="flex items-center border rounded-md w-18 h-11 overflow-hidden px-3"
      >
        <input
          type="text"
          :value="item.quantity"
          class="w-full outline-none text-[1rem]"
          style="
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
          "
          @input="
            updateQuantity(
              item.id,
              +($event.target as HTMLInputElement).value.replace(
                /[^0-9]/g,
                '',
              ) || 1,
            )
          "
        />

        <div class="w-4">
          <button
            class="w-4 h-4 flex items-center justify-center text-[4px]"
            @click="updateQuantity(item.id, item.quantity + 1)"
          >
            <ChevronUp />
          </button>
          <button
            class="w-4 h-4 flex items-center justify-center text-[4px]"
            @click="updateQuantity(item.id, Math.max(1, item.quantity - 1))"
          >
            <ChevronDown />
          </button>
        </div>
      </div>

      <div class="text-right font-semibold">
        ${{ item.price * item.quantity }}
      </div>
    </div>
  </div>
</template>
