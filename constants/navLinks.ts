export interface NavLink {
  label: string
  path: string
}

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Contact", path: "/contact" },
  { label: "About", path: "/about" },
  { label: "Sign Up", path: "/signup" },
]
