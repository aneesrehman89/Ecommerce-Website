import product1 from "../../../public/asset/productHomepage/product1.jpg";
import product2 from "../../../public/asset/productHomepage/product2.webp";
import product3 from "../../../public/asset/productHomepage/product3.jpg";
import product4 from "../../../public/asset/productHomepage/product4.jpg";
import product5 from "../../../public/asset/productHomepage/product5.webp";
import product6 from "../../../public/asset/productHomepage/product6.jpg";
import product7 from "../../../public/asset/productHomepage/product7.jpg";
import banner from "../../../public/asset/productHomepage/banner.jpeg";

export const mockHomePageData = {
  products: [
    {
      id: 1,
      image: product1,
      title: "Unstitched Jacquard Cotton 3 Piece",
      originalPrice: 5999,
      salePrice: 3599,
      discount: 10,
      rating: null,
      reviews: null,
    },
    {
      id: 2,
      image: product2,
      title: "Unstitched Jacquard Cotton 3 Piece",
      originalPrice: 5999,
      salePrice: 3599,
      discount: 10,
      rating: 5,
      reviews: 17,
    },
    {
      id: 3,
      image: product3,
      title: "Unstitched Jacquard Cotton 3 Piece",
      originalPrice: 5999,
      salePrice: 3599,
      discount: 10,
      rating: null,
      reviews: null,
    },
    {
      id: 4,
      image: product4,
      title: "Unstitched Jacquard Cotton 3 Piece",
      originalPrice: 5999,
      salePrice: 3599,
      discount: 10,
      rating: 5,
      reviews: 1,
    },
    {
      id: 5,
      image: product5,
      title: "Unstitched Jacquard Cotton 3 Piece",
      originalPrice: 5999,
      salePrice: 3599,
      discount: 10,
      rating: 5,
      reviews: 6,
    },
    {
      id: 6,
      image: product6,
      title: "Unstitched Jacquard Cotton 3 Piece",
      originalPrice: 5999,
      salePrice: 3599,
      discount: 10,
      rating: 5,
      reviews: 5,
    },
    {
      id: 7,
      image: product7,
      title: "Unstitched Jacquard Cotton 3 Piece",
      originalPrice: 5999,
      salePrice: 3599,
      discount: 10,
      rating: 5,
      reviews: 5,
    }
  ],
  hero: {
    collectionName: "Elan Collection",
    tagline: "On-demand meets limitless luxury",
    season: "PRE FALL '25",
    status: "LIVE NOW",
    totalProducts: 6,
    modelImage: banner,
  },
};
