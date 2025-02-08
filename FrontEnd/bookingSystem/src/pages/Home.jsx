import heroImage from "../assets/bookingImage2.jpg";

const Home = () => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <img
          src={heroImage}
          className="w-1/2 max-h-[90vh]  rounded-lg"
          alt="Centered Image"
        />
      </div>
    </>
  );
};

export default Home;
