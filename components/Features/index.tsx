import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-14 md:py-7 lg:py-8">
        <div className="container">
          <SectionTitle
            title="Traveling to Ayodhya? Let AyodhyaGPT be your guiding light."
            paragraph="We'll guide your every step"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="flex justify-center flex-col items-center gap-2 mt-8">
            <button className="bg-primaryColor py-2 px-6 rounded-[8px] m-auto text-white font-bold">Start your Ayodhya journey today</button>
            <p className="opacity-80">Your All-in-One Guide to Reaching Ayodhya.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
