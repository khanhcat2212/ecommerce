export interface Account {
  label: string
  href: string
}

export const accounts: Account[] = [
  { label: "My Account", href: "/" },
  { label: "Login / Register", href: "/login" },
  { label: "Cart", href: "/cart" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Shop", href: "/shop" },
]
