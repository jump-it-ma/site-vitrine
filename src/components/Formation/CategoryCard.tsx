import { currency, dailyHours } from '@/utils/constants';

import { Lato, Montserrat } from 'next/font/google';
import Image from 'next/image';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  onClick: () => void;
}

const montserratFont = Montserrat({ subsets: ["latin"] });
const latoFont = Lato({ weight: "400", subsets: ["latin"] });

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  description,
  image,
  onClick,
}) => {
  return (
    <div className="
                  flex flex-col justify-between items-center w-full cursor-pointer
                  bg-white py-5 px-6 
                  rounded-xl border shadow-formation-unhover xm:hover:shadow-formation-hover
                  transition ease-in-out duration-100 hover:duration-300 
                  xm:hover:scale-105 hover:z-50 
                  max-w-[270px] fold:max-w-[320px]"
          onClick={onClick}
    >
      <div className="
                  flex flex-col justify-between items-center w-full
                  gap-6
                  transition ease-in-out duration-100 hover:duration-300"
      >
        <div
          className="flex flex-col justify-start items-center gap-3 w-full"
        >
          <div className="flex justify-between items-center w-full">
            <Image
              className='w-16 fold:w-[75px] lg:w-16 lg2:w-[75px] h-16 fold:h-[75px] lg:h-16 lg2:h-[75px]'
              src={image}
              width={75}
              height={75}
              alt={name} />
            <h1 className={montserratFont.className + " text-lg fold:text-xl lg:text-2xl lg2:text-xl text-purple-600 text-right font-medium w-min"}>
              {name}
            </h1>
          </div>
          <div className="bg-purple-600 h-0.5 w-full"></div>
          <h2 className={latoFont.className + " text-black text-base text-center font-medium line-clamp-2"}>
            {description}
          </h2>
        </div>
      </div>
    </div>

  );
};

export default CategoryCard;