

// eslint-disable-next-line react/prop-types
const FoodCard = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const {name, image, price, recipe} = item
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400 text-orange-400 my-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;