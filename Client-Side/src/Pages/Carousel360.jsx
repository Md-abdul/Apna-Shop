import Carousel from "react-elastic-carousel";

const products = [
  {
    pic: "https://rukminim1.flixcart.com/image/832/832/l5h2xe80/shirt/7/s/h/xs-juhg-try-this-original-imagg4wyccyjm3jf.jpeg?q=70",
    price: "550",
    title: "890 Cedar St",
  },
  {
    pic: "https://rukminim1.flixcart.com/image/832/832/kybvo280/t-shirt/l/o/e/m-mmst07-mm-industri-original-imagah2hszxexesa.jpeg?q=70",
    price: "1,850",
    title: "765 Walnut St",
  },
  {
    pic: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/r/i/v/xxl-aks-0150-ausk-original-imagk4nyd4c4hwug.jpeg?q=70",
    price: "920",
    title: "987 Elmwood Ave",
  },
  {
    pic: "https://images.bewakoof.com/t1080/men-s-1white1-t-shirt-584845-1679400843-1.jpg",
    price: "599",
    title: "234 Cherry St",
  },
  {
    pic: "https://images.bewakoof.com/t1080/women-s-pink-color-block-slim-fit-track-pants-512165-1660052207-6.jpg",
    price: "650",
    title: "678 Oakwood Dr",
  },
  {
    pic: "https://images.bewakoof.com/t1080/women-s-green-shorts-584978-1679564368-5.JPG",
    price: "499",
    title: "789 Magnolia Ave",
  },
  {
    pic: "https://rukminim1.flixcart.com/image/832/832/xif0q/track-pant/w/u/a/m-hpsbl210-hps-sports-original-imagzggzhe2cggtc.jpeg?q=70",
    price: "563",
    title: "345 Elm St",
  },
  {
    pic: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    price: "650",
    title: "678 Oakwood Dr",
  },
  {
    pic: "https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/r/q/m/-original-imagca5ajerqpfjy.jpeg?q=70",
    price: "499",
    title: "789 Magnolia Ave",
  },
  {
    pic: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: "563",
    title: "345 Elm St",
  },
];
const Carousel360 = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "90%" }}>
          <Carousel
            breakPoints={breakPoints}
            itemsToShow={4}
            enableAutoPlay={true}
          >
            {products.map((product, index) => (
              <div key={index} className="px-2">
                {/* Replace this with your product component */}
                <div
                  className="bg-white rounded-lg shadow-md p-4"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
                  }}
                >
                  <img
                    src={product.pic}
                    alt={product.name}
                    className="w-full mb-2"
                  />
                  <div className="text-sm text-gray-700">{product.title}</div>
                  <div className="text-xs text-gray-500">{product.price}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Carousel360;
