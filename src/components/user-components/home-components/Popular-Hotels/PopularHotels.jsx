import img1 from "/images/pexels-photo-7163619.jpeg";
import img2 from "/images/pexels-photo-1571469.jpeg";
import img3 from "/images/pexels-photo-2506988.jpeg";
import img4 from "/images/pexels-photo-6527036.webp";
import img5 from "/images/pexels-photo-3201735.jpeg";
import img6 from "/images/pexels-photo-7163619.jpeg";
import img7 from "/images/pexels-photo-6434634 (1).webp";
import { useEffect, useState } from "react";

function PopularHotels() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "DELUX",
      href: "#",
      imageSrc: img1,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 2,
      name: "DELUX",
      href: "#",
      imageSrc: img2,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 3,
      name: "DELUX",
      href: "#",
      imageSrc: img3,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 4,
      name: "DELUX",
      href: "#",
      imageSrc: img4,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 5,
      name: "DELUX",
      href: "#",
      imageSrc: img5,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 6,
      name: "DELUX",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 7,
      name: "DELUX",
      href: "#",
      imageSrc: img7,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 8,
      name: "DELUX",
      href: "#",
      imageSrc: img4,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 11,
      name: "DELUX",
      href: "#",
      imageSrc: img1,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 12,
      name: "DELUX",
      href: "#",
      imageSrc: img2,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 13,
      name: "DELUX",
      href: "#",
      imageSrc: img3,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 14,
      name: "DELUX",
      href: "#",
      imageSrc: img4,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 15,
      name: "DELUX",
      href: "#",
      imageSrc: img5,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 16,
      name: "DELUX",
      href: "#",
      imageSrc: img6,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 17,
      name: "DELUX",
      href: "#",
      imageSrc: img7,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
    {
      id: 18,
      name: "DELUX",
      href: "#",
      imageSrc: img4,
      imageAlt: "Front of men's DELUX in 2 beds.",
      price: "₹2999/day",
      color: "2 beds",
    },
  ]);

  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 8));

  const handleShowMore = () => {
    const nextVisibleProducts = products.slice(0, visibleProducts.length + 4);
    setVisibleProducts(nextVisibleProducts);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our popular rooms
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="group relative hover:shadow-lg rounded-md"
            >
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-2.5 ">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {visibleProducts.length != products.length && (
        <div
          className="flex item-center justify-center mx-auto w-60  bg-white border border-sky-600 rounded-lg py-2 px-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          onClick={handleShowMore}
        >
          Show More
        </div>
      )}
    </div>
  );
}

export default PopularHotels;
