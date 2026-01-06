import { BlogBody, User } from "@/utils/interfaces";
import { montserratFont, latoFont } from "@/utils/fonts";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

type Props = {
  id: string;
  title: string;
  body: BlogBody[];
  author: User;
};

export default function BlogCard({ id, title, body, author }: Props) {
  const firstParagraph = body.find(
    (section) =>
      section.type === "paragraph" ||
      section.type === "header1" ||
      section.type === "header2"
  );

  return (
    <Link
      href={"/blogs/" + id}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
    >
      {/* Decorative accent top bar */}
      <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-indigo-500" />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <span className="mb-2 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
            Article
          </span>
          <h2
            className={`${montserratFont.className} mb-3 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors`}
          >
            {title}
          </h2>
          <p
            className={`${latoFont.className} line-clamp-3 text-sm text-gray-600`}
          >
            {firstParagraph ? firstParagraph.text : ""}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">
              {author.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-900">
                {author.name}
              </span>
              <span className="text-[10px] text-gray-500">{author.job}</span>
            </div>
          </div>

          <span className="flex items-center gap-1 text-sm font-semibold text-purple-600 transition-all group-hover:gap-2">
            Lire plus <HiArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
