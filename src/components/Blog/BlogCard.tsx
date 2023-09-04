import { BlogBody, User } from "@/utils/interfaces";
import { Jost, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const jostFont = Jost({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });

type Props = {
    id: string,
    title: string,
    body: BlogBody[],
    author: User
}

export default function BlogCard({ id, title, body, author }: Props) {
    const firstParagraph = body.find((section) => section.type === "paragraph" || section.type === "header1" || section.type === "header2");
    return (
        <Link href={"/blogs/" + id} className="w-full flex flex-col justify-between items-start py-5 px-6 border-2 gap-4 cursor-pointer transition duration-300 border-ac-bleu group text-black hover:text-white hover:bg-ac-bleu">
            <div
                itemScope
                itemType="https://schema.org/Article"
                className="w-full flex flex-col justify-start items-start gap-4"
            >
                <h1
                    itemProp="headline"
                    className={jostFont.className + " font-bold text-2xl text-left line-clamp-2 md:h-16"}
                >
                    {title}
                </h1>
                <h2
                    itemProp="description"
                    className={montserratFont.className + " font-normal text-sm text-left line-clamp-6"}
                >
                    {firstParagraph ? firstParagraph.text : ""}
                </h2>
                <p itemProp="author" itemScope itemType="https://schema.org/Person" className="hidden">
                    <span itemProp="name">{author.name}</span>
                    <span itemProp="url">{author.contact}</span>
                </p>
                <p itemProp="articleBody" className="hidden">{firstParagraph ? firstParagraph.text : ""}</p>
                <Image itemProp="image" className="hidden" src="https://www.aleeconseil.com/logo.png" width={16} height={16} alt="Image" />
            </div>
            <p className={montserratFont.className + " w-full text-[#5C8BFC] group-hover:text-black underline text-left font-semibold text-base"}>
                Lire plus
            </p>
        </Link>
    )
}