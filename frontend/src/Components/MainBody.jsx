import React, { useState } from "react";

export function Home() {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center justify-center w-full">
          <img
            className="object-cover w-full h-full rounded-2xl"
            src="https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1581442353249-5YKSPLFWQQHQCA055MHY/Restaurant-Food-Pics.png"
            alt="Food"
          />
          <div className="absolute left-10 text-center text-white font-[outfit]">
            <div className="text-2xl ">Order your favourite food at</div>
            <div className="text-4xl font-extrabold">Foodie.</div>
          </div>
        </div>
      </div>
    );
  }

  export function Menu() {

    const foodItems = [
        { name: "biryani", value: 81 },
        { name: "burger", value: 87 },
        { name: "butter-chicken", value: 22 },
        { name: "dessert", value: 36 },
        { name: "dosa", value: 83 },
        { name: "idly", value: 77 },
        { name: "pasta", value: 34 },
        { name: "pizza", value: 95 },
        { name: "rice", value: 35 },
        { name: "samosa", value: 22 }
      ];
      let favourites = [];
      let foodItem;
      for (let index = 0; index <= 19; index++) {
        foodItem = foodItems[Math.floor(10*Math.random())];
        favourites.push(<div className="flex flex-col justify-center p-3 rounded-lg m-5 shadow-md"
         key={index}>
        <img
            className="object-cover w-50 h-50 rounded-lg "
            src={`https://foodish-api.com/images/${foodItem.name}/${foodItem.name}${index+1}.jpg`}
            />
        <div className="font-semibold">{foodItem.name}</div>
        <div className="text-orange-500">${foodItem.value}</div>
            </div>
        )
    }
      const [currentIndex, setCurrentIndex] = useState(-1);
    return (
        <>
        <>
        <p className="text-3xl font-semibold">Explore Our Menu</p>
        <p className="text-slate-500">dive into a world of rich flavors and culinary delights. Whether you're craving something spicy like biryani or dosa, or in the mood for comfort food like butter chicken or pasta, there's something here for every taste bud. From quick bites like samosas and burgers to hearty meals like pizza and rice dishes, the variety ensures you'll never run out of delicious options. Don’t forget to satisfy your sweet tooth with a tempting dessert at the end. Each item is crafted to delight, so take your time, explore the menu, and enjoy every bite.</p>
        </>
        <div className="flex p-2 scroll-x overflow-x-auto">
            {foodItems.map((item, index) => (
                <div key={index} className="place-self-center flex flex-col items-center rounded-lg m-5">
                    <img
                        className={"object-cover w-20 h-20 rounded-[100%] " + (currentIndex===index ? "outline-5 outline-orange-500" : "")}
                        src={`https://foodish-api.com/images/${item.name}/${item.name}${index+1}.jpg`}
                        onClick={() => {
                            setCurrentIndex(index);
                        }}
                    />
                    <div className="font-semibold">{item.name}</div>
                </div>
            ))}
        </div>
        {(currentIndex != -1)?
        <>
        <div className="text-2xl font-semibold">{foodItems[currentIndex].name}</div>
            <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
                {
                    favourites.map((item, index) => {
                       
                            return (
                                <div key={index} className="flex flex-col justify-center p-3 rounded-lg m-5 shadow-md">
                                    <img
                                        className="object-cover w-50 h-50 rounded-lg "
                                        src={`https://foodish-api.com/images/${foodItems[currentIndex].name}/${foodItems[currentIndex].name}${index+1}.jpg`}
                                    />
                                    <div className="font-semibold">{foodItems[currentIndex].name}</div>
                                    <div className="text-orange-500">${foodItem.value}</div>
                                </div>
                            );
                        
                    })
                }
            </div>
        </>:
        <>
        <div className="text-2xl font-semibold">Top Rated</div>
            <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
                {
                    favourites
                }
            </div>
        </>}
        </>
      
    );
  
}

export function AboutUs() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center justify-center w-full">
                <img
                    className="object-cover w-full h-full rounded-2xl"
                    src="https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1581442353249-5YKSPLFWQQHQCA055MHY/Restaurant-Food-Pics.png"
                    alt="Food"
                />
                <div className="absolute left-10 text-center text-white font-[outfit]">
                    <div className="text-2xl ">Order your favourite food at</div>
                    <div className="text-4xl font-extrabold">Foodie.</div>
                </div>
            </div>
        </div>
    );
}
