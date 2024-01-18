import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "",
    CeremonyName: "Pre-Prana Pratistha sacraments and Adhivas Protocols",
    schedule: "January 16-21, 2024",
  },
  {
    id: 2,
    name: "",
    CeremonyName: "Prayaschita and Karmakuti Poojan",
    schedule:"January 16, 2024",
    
  },
  {
    id: 3,
    name: "",
    CeremonyName: "Parisar Pravesh of the Murti",
    schedule:"January 17, 2024",
  },
  {
    id: 4,
    name: "",
    CeremonyName: "Teerth Poojan, Jal Yatra, and Gandhadhivas",
    schedule:"January 18, 2024 (Evening)",
  },
  {
    id: 3,
    name: "",
    CeremonyName: "Aushadhadhivas, Kesaradhivas, Ghritadhivas    ",
    schedule:"January 19, 2024 (Morning)",
  },
  {
    id: 3,
    name: "",
    CeremonyName: "Dhanyadhivas",
    schedule:"January 19, 2024 (Evening)",
  },
  {
    id: 3,
    name: "",
    CeremonyName: "Sharkaradhivas",
    schedule:"January 20, 2024 (Morning)",
  },
  {
    id: 3,
    name: "",
    CeremonyName: "Pushpadhivas",
    schedule:"January 20, 2024 (Evening)",
  },
  {
    id: 3,
    name: "",
    CeremonyName: "Madhyadhivas",
    schedule:"January 21, 2024 (Morning)",
  },
  {
    id: 3,
    name: "",
    CeremonyName: "Shaiyadhivas",
    schedule:"January 21, 2024 (Evening)",
  },
  {
    id: 3,
    name: "",
    CeremonyName: "Prana Pratistha Ceremony with honorable guests",
    schedule:"January 22, 2024",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-light relative z-10 pt-8">
      <div className="container">
        <SectionTitle
          title="Ceremony Highlights"
          paragraph={`The "Ayodhya GPT" is a comprehensive guide for those looking to participate in the Pran Pratishtha ceremony in Ayodhya. This pivotal event, scheduled for January 22, 2024, marks the installation of Lord Ram's idol, symbolizing faith and unity.`}
          width="100%"
        />
        
        <div className="grid bg-white py-8 px-6 grid-cols-1 gap-x-8 gap-y-4 shadow-xl ">
          <h1 className="text-black text-xl">Timelines of Prana Pratishtha and Related Events:</h1>
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
     
    </section>
  );
};

export default Testimonials;
