import car1 from '../../../assets/Banner/car1.jpg';
import car2 from '../../../assets/Banner/car2.jpg';
import car3 from '../../../assets/Banner/car3.jpg';
import car4 from '../../../assets/Banner/car4.jpg';

const Banner = () => {
    return (
        <div className="hero container mx-auto bg-base-200 my-4">
  <div className="hero-content flex-col lg:flex-row">
    <img src={car3} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;