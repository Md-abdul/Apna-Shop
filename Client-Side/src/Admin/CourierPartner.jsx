// import  from 'react'
// import { TiStarFullOutline } from "react-icons/ti";
export const CourierPartner = () => {
  const courierPartners = [
    {
      name: "Dtdc",
      des: "DTDC stands for Desk to Desk Courier and Cargo and is a premier courier and logistics company in India that has been offering comprehensive logistics ...",
      area: "All India",
    },
    {
      name: "Gati",
      des: "GATI: Another of the older players, GATI, headquartered in Mumbai, was established in the year 1990 and currently has a professional team of more than 2500 ...",
      area: "Jharkhand",
    },
    {
      name: "Shadowfax",
      des: " Shadowfax. Shadowfax is a leading shipping partner. They provide end-to-end logistics solutions. Their clients include hundreds of eCommerce enterprises ...",
      area: "Pan India",
    },
    {
      name: "Aramex",
      des: "Aramex. Aramex is an ecommerce delivery company that started in the UAE and was acquired in India by Delhivery. Aramex provides shipping services in 220+ ...",
      area: "Delhi",
    },
    {
      name: "Xpressbees",
      des: "Xpressbees. Xpressbees, best known for its speedy and affordable parcel service, is one of India's fastest courier services providers. As Xpressbees ...",
      area: "Bengaluru",
    },
    {
      name: "Safexpress",
      des: "Safexpress was founded by Pawan Jain in 1997 and is one of the most trusted courier services in India. It offers a wide range of logistics services. This ...",
      area: "Gujarat",
    },
    {
      name: "First Flight Couriers",
      des: "First Flight Couriers Ltd. ... It is a known company for eCommerce logistics, and many companies utilize its services to ship across the country. First flight has ...",
      area: "Pan India",
    },
    {
      name: "iThink Logistics",
      des: "iThink Logistics is one of the few companies in the list of courier companies in India that offer full insurance coverage for all shipments. It is among the ...",
      area: "J&K",
    },
    {
      name: "Shiprocket",
      des: "Shiprocket has a network of over 24,000 pin codes across India and provides a range of shipping options such as same-day delivery, next-day delivery, and ...",
      area: "Pune",
    },
    {
      name: "DotZot",
      des: "Dotzot is DTDC's division solely for providing shipping services to e-commerce sellers. It aims to enhance the e-retail delivery experience by focusing on ...",
      area: "Pan India",
    },
  ];

  return (
    <div style={{ backgroundColor: "#e3e3df" }}>
      <div className="w-4/5 mx-auto mr-10 ">
        <div style={{ backgroundColor: "#e3e3df" }}>
          <div
            className=" px-4 py-8 mx-auto md:w-4/5 lg:w-11/12"
            style={{
              width: "75rem",
            }}
          >
            <h1 className="text-3xl font-bold mb-6">Courier Partners</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courierPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {partner.name}
                  </h2>
                  <p className="text-l mb-2">{partner.des}</p>
                  <p className="text-gray-600 mb-2">Area: {partner.area}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500">
                      {[...Array(partner.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ))}
                    </span>
                    <span className="text-gray-600 ml-1">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                          4.95
                        </p>
                        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                          out of
                        </p>
                        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                          5
                        </p>
                      </div>
                    </span>
                  </div>
                  {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Select
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
