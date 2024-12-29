import chefService from "../../assets/home/chef-service.jpg"
// backgroundImage: "url('/path-to-your-image.jpg')"
const ChefService = () => {
    return (
        <div className="relative flex justify-center items-center h-[572px] bg-cover bg-center" style={{ backgroundImage: `url(${chefService})` }}>
            <div className="bg-white bg-opacity-80 shadow-lg rounded-md p-10 text-center max-w-xl">
                <h1 className="text-3xl font-serif font-bold mb-4">BISTRO BOSS</h1>
                <p className="text-gray-700">
                Our Chef Service is dedicated to delivering a culinary experience like no other. Whether you&apos;re hosting an intimate dinner, a grand celebration, or simply craving exceptional flavors, our talented chefs bring artistry and passion to every dish.
                </p>
            </div>
        </div>
    );
};

export default ChefService;