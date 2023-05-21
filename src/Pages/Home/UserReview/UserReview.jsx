import React from 'react';
import ReviewCard from './ReviewCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const UserReview = () => {
    const userReviews = [
        {
          id: 1,
          userImage: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1684690082~exp=1684690682~hmac=5efad6b527da37586cb02192e7e253149bb4fb9a28c58228b6b3aa567b08e211",
          userName: "John Doe",
          rating: "4.5",
          review:
            "The toy cars from this shop are amazing! My kid loves playing with them. The quality is top-notch, and the designs are very detailed. Highly recommended!",
        },
        {
          id: 2,
          userImage: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?w=1380&t=st=1684690102~exp=1684690702~hmac=2b39f4c4fc708571fd78b71938a4d121186fc15741cfa513267048c8d5af7cba",
          userName: "Jane Smith",
          rating: "5",
          review:
            "I recently purchased a toy car for my nephew, and he couldn't be happier. The customer service was excellent, and the delivery was prompt. Great experience overall!",
        },
        {
          id: 3,
          userImage: "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=1380&t=st=1684690118~exp=1684690718~hmac=3cde7a2132556448fdf23d89bc8bff0fc68565526e61dcd6549d50743a159be5",
          userName: "Mike Johnson",
          rating: "4",
          review:
            "These toy cars are fantastic! The range of models available is impressive, and the prices are very reasonable. I will definitely be buying more for my collection.",
        },
        {
          id: 4,
          userImage: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=1380&t=st=1684690132~exp=1684690732~hmac=c95a20a434dc07fed05c8c0193c2e320604d588210fc96bd7fe5a701e1844fe6",
          userName: "Emily Johnson",
          rating: "4.5",
          review: "I bought a toy car from this shop for my son's birthday, and he absolutely loves it! The attention to detail and durability of the car are impressive. Highly recommended!",
        },
        {
          id: 5,
          userImage: "https://img.freepik.com/free-photo/portrait-friendly-confident-caucasian-bearded-guy-with-moustache-wearing-glasses-smiling-politely-looking-relaxed-calm-gray-wall-listening-customer-complaint-gray-wall_176420-22514.jpg?w=1380&t=st=1684690146~exp=1684690746~hmac=0f6abf898273005e3859fbf128bec5920effb28e4bb8e4ba48aaab199662dcac",
          userName: "Sophia Williams",
          rating: "5",
          review: "I've purchased multiple toy cars from this store, and I'm always impressed with the quality and variety. The cars are built to last and provide endless fun for my kids. Excellent service as well!",
        },
        {
          id: 6,
          userImage: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1684690160~exp=1684690760~hmac=7c6eb1c11d18aab9dded4a161c974ea5450ffe2aea5ec45dfe5952670ec6c561",
          userName: "Oliver Brown",
          rating: "4",
          review: "The toy cars I purchased from this shop exceeded my expectations. The attention to detail and quality of materials used are remarkable. I'm very satisfied with my purchase!",
        }
        
        // Add more user reviews here
      ];
    
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };
    
      return (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold my-8 text-center">User Reviews</h1>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {userReviews.map((review) => (
              <ReviewCard
                key={review.id}
                userImage={review.userImage}
                userName={review.userName}
                review={review.review}
                rating={review.rating}
              />
            ))}
          </Carousel>
        </div>
      );
    };

export default UserReview;