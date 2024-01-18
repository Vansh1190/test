import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name,schedule, CeremonyName, id } = testimonial;

  return (
    <div className="w-full">
      <div
        className="wow border-l-4 border-[#f59e0b] border-solid fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-[#fffbeb] p-4 duration-300 hover:shadow-one px-4"
        data-wow-delay=".1s"
      >
        <div className="flex flex-col p-0 ">
          <h3 className="p-0 m-0 font-bold" >{CeremonyName}</h3>
          <p>{schedule}</p>
          {/* <div className="relative w-full max-w-[80%] overflow-hidden rounded-[5px]">

          </div> */}
          {/* <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
