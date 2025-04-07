import React from "react";

const custom_menu_list = [
  {
    menu_name: "All",
    menu_image:
      "https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg", // Grid of various foods
  },
  {
    menu_name: "Breakfast",
    menu_image: "https://media.istockphoto.com/id/625232510/photo/breakfast-served-with-coffee-juice-egg-and-rolls.jpg?s=612x612&w=0&k=20&c=FpzWoH6EyCJGzUntgj5vmyj-BncNETFqQ1af78EMBb8=",
  },

  {
    menu_name: "Main Course",
    menu_image: "https://media.istockphoto.com/id/996699224/photo/assorted-indian-food-for-lunch-or-dinner-rice-lentils-paneer-dal-makhani-naan-chutney-spices.jpg?s=612x612&w=0&k=20&c=WjUXTcVnvbeiBJ2H2nNefpjk_B4zXikjkUFG-GhSJ54=", // Steak or main dish
  },
  {
    menu_name: "Dessert",
    menu_image: "https://static.vecteezy.com/system/resources/thumbnails/035/985/777/small/ai-generated-tcookie-plate-dessert-food-photo.jpg", // Cake or sweet dessert
  },
];

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col items-center text-center gap-5 overflow-hidden my-8" id="menu">
      <h1 className="text-4xl font-bold text-center md:text-start text-black my-4">
        Explore our Menu
      </h1>
      <p className="md:max-w-[60%] text-gray-600 text-xl leading-relaxed mb-6">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>

      <div className="flex justify-between items-center gap-5 md:gap-10 text-center my-5 overflow-x-scroll no-scrollbar">
        {custom_menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev == item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className=" w-48 flex flex-col justify-center text-center "
            >
              <img
                src={item.menu_image}
                alt=""
                className={
                  category === item.menu_name
                    ? "border-4 border-solid border-red-400 p-1 w-48 h-48 object-cover cursor-pointer rounded-full animate-clicked"
                    : "w-48 h-48 object-cover cursor-pointer rounded-full"
                }
              />
              <p className="mt-3 text-slate-900 text-lg cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2 h-[2px] bg-[#e2e2e2] border-none " />
    </div>
  );
};

export default ExploreMenu;
