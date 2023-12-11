export interface Cimetery {
  id: number;
  name: string;
  email: string;
  description: string;
  address: string;
  city: string;
  country: string;
  link: string;
  phone: string;
  laltitude: number;
  longitude: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  photo?: string;
  photoName?: string;
}
