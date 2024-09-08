import { TypeSizes } from "./sizes.interface";

export interface IProduct extends TypeSizes {
  id: number;
  image: string;
  price_new: string;
  price_old: string;
  title: string;
  product_colors: IProductColorImages[];
};

interface IProductColorImages {
  product_color_images: IImagePath[];
}

interface IImagePath {
  image_path: string;
}


