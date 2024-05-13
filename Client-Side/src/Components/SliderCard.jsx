// import React from "react";

export const  SliderCard = () => {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full">
        <div className="text-center">
          <div className="text-3xl font-semibold text-gray-800 mb-2">With Great Outcomes.</div>
          <div className="text-base font-normal text-gray-600 mb-8">Our customers have gotten offers from awesome companies.</div>
        </div>
        <div className="overflow-hidden relative">
          <div className="flex">
            <div className="flex animate-scroll left-0">
              {row1.map((el, index) => (
                <div key={index} className="flex-shrink-0 w-80 mr-4">
                  <img src={el} alt={`image-${index}`} className="rounded-lg shadow-md" />
                </div>
              ))}
            </div>
            <div className="flex animate-scroll right-0">
              {row2.map((el, index) => (
                <div key={index} className="flex-shrink-0 w-80 mr-4">
                  <img src={el} alt={`image-${index}`} className="rounded-lg shadow-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default App;
