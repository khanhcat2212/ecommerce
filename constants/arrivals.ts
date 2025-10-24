interface Arrival {
  title: string
  subtitle: string
  image: string
  link: string
  size?: "large" | "medium" | "small"
}

export const arrivals: Arrival[] = [
  {
    title: "PlayStation 5",
    subtitle: "Black and White version of the PS5 coming out on sale.",
    image:
      "https://wallpapers.com/images/featured/ps5-console-png-ywbv2gv3gfw23o3w.jpg",
    link: "#",
    size: "large",
  },
  {
    title: "Women's Collections",
    subtitle: "Featured woman collections that give you another vibe.",
    image:
      "https://www.professionalbeauty.com.au/wp-content/uploads/2016/12/iStock-510172592.jpg",
    link: "#",
    size: "medium",
  },
  {
    title: "Speakers",
    subtitle: "Amazon wireless speakers",
    image:
      "https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/393652-smart-speakers-amazon-echo-2nd-generation-59795.png",
    link: "#",
    size: "small",
  },
  {
    title: "Perfume",
    subtitle: "GUCCI INTENSE OUD EDP",
    image:
      "https://xxivstore.com/wp-content/uploads/2020/06/Gucci-bloom-edp-1.png",
    link: "#",
    size: "small",
  },
]
