import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { ApiResponse } from '../type/types';

const api: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const googleLogin = async (token: string): Promise<ApiResponse> => {
  const response = await api.post<ApiResponse>('/auth/google', { token });
  return response.data;
};

export const checkAuth = async (): Promise<ApiResponse> => {
  const response = await api.get<ApiResponse>('/auth/verify');
  return response.data;
};

export const logout = async (): Promise<{ success: boolean }> => {
  const response = await api.post<{ success: boolean }>('/auth/logout');
  return response.data;
};

export const getComments = async (): Promise<ApiResponse> => {
  const response = await api.get<ApiResponse>('/comments');
  return response.data;
};

export const createComment = async (content: string): Promise<ApiResponse> => {
  const response = await api.post<ApiResponse>('/comments', { content });
  return response.data;
};

export const deleteComment = async (commentId: string): Promise<{ success: boolean }> => {
  const response = await api.delete<{ success: boolean }>(`/comments/${commentId}`);
  return response.data;
};

export const updateComment = async (commentId: string, content: string): Promise<ApiResponse> => {
  const response = await api.put<ApiResponse>(`/comments/${commentId}`, { content });
  return response.data;
};