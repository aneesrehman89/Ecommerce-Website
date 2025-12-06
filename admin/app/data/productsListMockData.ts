import { ProductListItem, ProductListStatus } from "../types/product";

export const mockProducts: ProductListItem[] = [
  {
    id: "1",
    name: "Casual Sunglasses",
    category: "Sunglass",
    stock: "124 Low Stock",
    price: 47,
    status: ProductListStatus.PUBLISHED,
    image: "https://i.pravatar.cc/80?img=1",
    stockStatus: 'low'
  },
  {
    id: "2",
    name: "T-Shirt",
    category: "Clothes",
    stock: 124,
    price: 47,
    status: ProductListStatus.PUBLISHED,
    image: "https://i.pravatar.cc/80?img=2",
    stockStatus: 'normal'
  },
  {
    id: "3",
    name: "Green Tea",
    category: "Beauty",
    stock: "Out of Stock",
    price: 47,
    status: ProductListStatus.DRAFT_LIST,
    image: "https://i.pravatar.cc/80?img=3",
    stockStatus: 'out'
  },
  {
    id: "4",
    name: "Denim Shirt",
    category: "Clothes",
    stock: "124 Low Stock",
    price: 47,
    status: ProductListStatus.INACTIVE,
    image: "https://i.pravatar.cc/80?img=4",
    stockStatus: 'low'
  },
  {
    id: "5",
    name: "Casual Jacket",
    category: "Clothes",
    stock: "Out of Stock",
    price: 47,
    status: ProductListStatus.STOCK_OUT,
    image: "https://i.pravatar.cc/80?img=5",
    stockStatus: 'out'
  },
  {
    id: "6",
    name: "Cap",
    category: "Cap",
    stock: 124,
    price: 47,
    status: ProductListStatus.PUBLISHED,
    image: "https://i.pravatar.cc/80?img=6",
    stockStatus: 'normal'
  },
  {
    id: "7",
    name: "Nike Cats",
    category: "Shoes",
    stock: 124,
    price: 47,
    status: ProductListStatus.INACTIVE,
    image: "https://i.pravatar.cc/80?img=7",
    stockStatus: 'normal'
  },
  {
    id: "8",
    name: "Cooling Fan",
    category: "Electronic",
    stock: "124 Low Stock",
    price: 47,
    status: ProductListStatus.STOCK_OUT,
    image: "https://i.pravatar.cc/80?img=8",
    stockStatus: 'low'
  },
  {
    id: "9",
    name: "Man Watch",
    category: "Watch",
    stock: "124 Low Stock",
    price: 47,
    status: ProductListStatus.STOCK_OUT,
    image: "https://i.pravatar.cc/80?img=9",
    stockStatus: 'low'
  },
  {
    id: "10",
    name: "Cooling Fan",
    category: "Electronic",
    stock: "124 Low Stock",
    price: 47,
    status: ProductListStatus.STOCK_OUT,
    image: "https://i.pravatar.cc/80?img=8",
    stockStatus: 'low'
  },
  {
    id: "11",
    name: "Man Watch",
    category: "Watch",
    stock: "124 Low Stock",
    price: 47,
    status: ProductListStatus.STOCK_OUT,
    image: "https://i.pravatar.cc/80?img=9",
    stockStatus: 'low'
  },
  {
    id: "12",
    name: "Cooling Fan",
    category: "Electronic",
    stock: "124 Low Stock",
    price: 47,
    status: ProductListStatus.STOCK_OUT,
    image: "https://i.pravatar.cc/80?img=8",
    stockStatus: 'low'
  },
  {
    id: "13",
    name: "Man Watch",
    category: "Watch",
    stock: "124 Low Stock",
    price: 47,
    status: ProductListStatus.STOCK_OUT,
    image: "https://i.pravatar.cc/80?img=9",
    stockStatus: 'low'
  },
];

export const categories = [
  "All Categories",
  "Default",
  "Bridal Lehengas",
  "Bridal Maxi/Gowns",
  "Bridal Sharara/Gharara",
  "Bridal Sarees",
  "Bridal Suits"
];

export const statuses = [
  "All Status",
  ProductListStatus.PUBLISHED,
  ProductListStatus.DRAFT_LIST,
  ProductListStatus.INACTIVE,
  ProductListStatus.STOCK_OUT
];