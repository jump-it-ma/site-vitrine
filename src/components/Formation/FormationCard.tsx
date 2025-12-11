import { dailyHours } from "@/utils/constants";
import { latoFont, montserratFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  formation_id: string;
  title: string;
  hero: string;
  image_url: string;
  duration: number;
};

export default function FormationCard({
  formation_id,
  title,
  hero,
  image_url,
  duration,
}: Props) {
  return (
    <Link
      href={"/formations/" + formation_id}
      className="group relative flex flex-col justify-between w-full max-w-[320px] bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-zinc-100"
    >
      <div className="p-6 flex flex-col gap-4">
        {/* Header with Icon and Title */}
        <div className="flex items-start justify-between gap-4">
          <div className="relative w-16 h-16 shrink-0 md:w-[70px] md:h-[70px] bg-purple-50 rounded-xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
            <Image
              src={image_url}
              width={50}
              height={50}
              alt={title}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col items-end">
            <span
              className={`${montserratFont.className} text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-md`}
            >
              Formation
            </span>
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex flex-col gap-2">
          <h3
            className={`${montserratFont.className} text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors`}
          >
            {title}
          </h3>
          <p
            className={`${latoFont.className} text-sm text-gray-500 line-clamp-3 leading-relaxed`}
          >
            {hero}
          </p>
        </div>
      </div>

      {/* Footer with Metadata */}
      <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2 text-gray-600">
          <Image
            src="/Formations/hourglass.png"
            width={18}
            height={18}
            alt="Durée"
            className="opacity-60"
          />
          <span className={`${montserratFont.className} text-sm font-medium`}>
            {Math.ceil(duration / dailyHours)} jours ({duration}h)
          </span>
        </div>

        <span
          className={`${montserratFont.className} text-sm font-bold text-purple-600 group-hover:underline decoration-2 underline-offset-4`}
        >
          Découvrir
        </span>
      </div>
    </Link>
  );
}
