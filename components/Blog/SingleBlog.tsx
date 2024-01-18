import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-2 top-2 z-20 inline-flex opacity-90 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary  sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6  text-base font-medium text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;