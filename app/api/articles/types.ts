export interface ArticleApi {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  },
  views: number
  userId: number
}

export interface ArticleType {
  id: number
  imageUrl: string
  title: string
  body: string
  likes: number
  views: number
  tags?: TagType[]
}

export interface TagApi {
  slug: string
  name: string
  url: string
}

export interface TagType {
  slug: string
  name: string
  url: string
}