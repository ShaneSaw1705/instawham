export interface PostData {
  title: string
  content: string
  user_id: string
}

export interface Post extends PostData {
  id: number
}