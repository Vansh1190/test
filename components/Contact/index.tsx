import NewsLatterBox from "./NewsLatterBox";
import Image from 'next/image';
import contactImage from '../../public/images/contact/contactImage.jpg';
import { IoChatbubbleEllipses } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="flex w-full wow fadeInUp shadow-three mb-12 rounded-sm bg-yellow h-full rounded-2xl relative"
              data-wow-delay=".15s
              "
            >
              <div>
                <Image src={contactImage} alt={''} className={'hidden lg:block h-full w-auto rounded-l-2xl'}/>
              </div>
              <div className={'flex flex-col items-center lg:items-start gap-8 text-white h-full w-full lg:w-2/3 bg-yellow rounded-2xl right-0 p-4 md:p-10 lg:p-20'}>
                <h1 className={'text-2xl lg:text-3xl flex items-center gap-4'}>Reach Out To Us <IoChatbubbleEllipses size={40}/></h1>
                <form className={'w-full lg:w-96 flex flex-col gap-4'}>
                  <div className={'flex flex-col'}>
                    <label htmlFor={'name'}> Name </label>
                    <input name={'name'} id={'name'} className={'h-8 rounded-md focus:outline-none border-none text-black p-1'}/>
                  </div>
                  <div className={'flex flex-col'}>
                    <label htmlFor={'email'}> Email Address </label>
                    <input name={'email'} id={'email'} className={'h-8 rounded-md focus:outline-none border-none text-black p-1'}/>
                  </div>
                  <div className={'flex flex-col'}>
                    <label htmlFor={'message'}> Message </label>
                    <textarea name={'message'} id={'message'} className={'h-16 resize-none rounded-md focus:outline-none border-none text-black p-1'}/>
                  </div>
                  <button className={'mx-auto lg:mx-0 text-black bg-white rounded-l-xl rounded-tr-xl p-3 w-32 text-sm hover:bg-gray-200 transition-all duration-300'}>Send Message</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
