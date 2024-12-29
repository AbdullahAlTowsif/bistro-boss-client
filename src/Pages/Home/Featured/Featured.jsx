import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle heading={"Featured Menu"} subHeading={"Check it Out"}></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>{new Date().toLocaleString()}</p>
                    <p className="uppercase">Where Can I Get Some?</p>
                    <p>Indulge in the finest selections from our kitchen, carefully curated to showcase the best of our culinary expertise. Each dish in our Featured Menu is crafted with premium ingredients, a passion for flavor, and a commitment to excellence.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;