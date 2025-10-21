import { useFetch } from "#app"
import { API_URL, LIMIT, OFFSET } from "~/constants/API"

interface IPoke {
  name: string
  url: string
}
interface IPokeAPI {
  results: IPoke[]
  count: number
  next: string
}

export const useFetchPoke = () => {
  const { data } = useFetch<IPokeAPI, unknown>(`${API_URL}`, {
    query: {
      limit: LIMIT,
      offset: OFFSET,
    },
    server: true,
    pick: ["results"],
  })

  return { data: data || [] }
}
