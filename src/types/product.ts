export interface Product {
  id: number;
  name: string;
  capacity: string;
  color: string;
  colorsavailable: string[];
  price: string;
  priceDiscount: string;
  brand: string;
  categoryId: number;
  description: { title: string; text: string[] }[];
  resolution: string;
  screen: string;
  processor: string;
  ram: string;
  year: string;
  cells: string[];
  images: string[];
  capacitiesavailable: string[];
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface IPhone extends Product {
  camera: string;
  zoom: string;
}

export interface IPad extends Product {
  camera: string;
  zoom: string;
}

export interface AppleWatch extends Product {
  camera: string | null;
  zoom: string | null;
}
