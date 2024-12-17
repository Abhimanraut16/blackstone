
import Image from "next/image";
import BgAbout from '../../access/assets/images/about-ban.jpg'
import LeftImage from '../../access/assets/images/banner/shilajit-3.png'

const About = () => {
  return (
    <div className="">
      <div className="relative border-b-2 bg-transparent ">
        <div className="relative">
          <div className="relative">
            <Image
              src={BgAbout}
              alt="about"
              className="w-full sm:h-10 md:h-[550px] object-fill"
              height={500} width={500}
            />
            {/* Overlay for transparency */}
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
          </div>

          <div className=" absolute top-20 transform w-full  text-center px-4">
            <div className="flex gap-8">
              {/* left */}
              <div className="w-5/12 border-2">
                <div className=" text-white pl-24 ">
                  <Image src={LeftImage} alt="leftImage" width={400} height={500} />
                </div>
              </div>
              {/* right */}
              <div className="w-7/12 border-2 h-[400px] border-red-800">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-varela text-white">About Us</h2>
                <h4 className="text-base sm:text-lg md:text-xl text-lemon font-poppins pt-4">
                  Black Stone The Shilajit
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
