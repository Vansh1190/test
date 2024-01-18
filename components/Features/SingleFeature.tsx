import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp FeatureServices bg-[#faefdc] p-4 rounded-[15px] border-2 primaryColor flex items-center justify-center" data-wow-delay=".15s">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md  bg-opacity-10 text-primary">
          {/* {icon} */}
          <Image src={icon} alt="" width={50} height={50}/>
        </div>
        <h3 className="text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
