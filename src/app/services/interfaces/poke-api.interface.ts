export interface PokeAPIResponse {
  query: string
  results: Result[]
  pagination: Pagination
  metadata: Metadata
}

export interface Result {
  id: string
  card_info: CardInfo
  tcgplayer: any
  cardmarket: Cardmarket
}

export interface CardInfo {
  name: string
  set_code: string
  set_id: string
  card_number: string
}

export interface Cardmarket {
  product_name: string
  prices: Price[]
  product_url: string
}

export interface Price {
  avg?: number
  low?: number
  avg1?: number
  avg7?: number
  avg30?: number
  trend: number
  updated_at: string
  variant_type: string
}

export interface Pagination {
  page: number
  limit: number
  total: number
  total_pages: number
}

export interface Metadata {
  total_count: number
  tcg: number
  cardmarket: number
  tcg_only: number
  cardmarket_only: number
  both_sources: number
}
