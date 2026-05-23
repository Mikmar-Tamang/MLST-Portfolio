export interface User {
  _id: string;
  id?: string;
  email: string;
  name: string;
  picture: string;
}

export interface CommentData {
  _id: string;
  content: string;
  userId: User;
  createdAt: string;
  updatedAt: string;
}

export interface GoogleCallbackResponse {
  credential: string;
  clientId: string;
  select_by: string;
}

export interface ApiResponse {
  success: boolean;
  user?: User;
  comments?: CommentData[];
  comment?: CommentData;
  error?: string;
  message?: string;
}