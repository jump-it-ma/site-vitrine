import type { Metadata } from 'next';
import { Jost, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Script from 'next/script';
import { AiFillLinkedin } from 'react-icons/ai';
import CodeViewer from '../../../components/Blog/CodeViewer';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import ReturnToTop from '../../../components/ReturnToTop';
import { pageMetadata } from '../../../content/general';
import { blogsData } from '../../../data/blogsData';
import { readableDate } from '../../../utils/functions';

const jostFont = Jost({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });

type Props = {
    params: {
        slug: string
    }
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const blog_id = params.slug;
    const blog = blogsData.find((blog) => blog.id === blog_id);

    return {
        title: blog ? blog.title : "Alee Conseil - 404",
        description: pageMetadata.description,
        metadataBase: new URL(pageMetadata.baseUrl),
        alternates: {
            canonical: '/blogs/' + blog_id,
            languages: {
                'fr': '/blogs/' + blog_id,
            },
        },
        icons: {
            icon: 'https://www.aleeconseil.com/favicon.ico',
            apple: 'https://www.aleeconseil.com/apple-icon.png',
            shortcut: ['https://www.aleeconseil.com/favicons/shortcut-icon-128.png', 'https://www.aleeconseil.com/favicons/shortcut-icon-192.png'],
            other: [
              {
                rel: 'apple-touch-icon-precomposed',
                url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-precomposed.png',
              },
              {
                rel: 'apple-touch-icon',
                url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-76.png',
              },
              {
                rel: 'apple-touch-icon',
                url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-120.png',
              },
              {
                rel: 'apple-touch-icon',
                url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-152.png',
              },
              {
                rel: 'icon',
                url: 'https://www.aleeconseil.com/favicons/icon-16.png',
              },
              {
                rel: 'icon',
                url: 'https://www.aleeconseil.com/favicons/icon-32.png',
              },
              {
                rel: 'icon',
                url: 'https://www.aleeconseil.com/favicons/icon-48.png',
              }
            ],
          },
        openGraph: {
            title: pageMetadata.title,
            description: pageMetadata.description,
            siteName: pageMetadata.siteName,
            url: 'https://www.aleeconseil.com',
            images: {
                url: 'https://www.aleeconseil.com/favicon.ico',
                width: 96,
                height: 96,
            },
            locale: 'fr-MA',
            type: 'website',
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': 'large',
                'max-image-preview': 'large',
                'max-snippet': 1024,
            }
        },
        themeColor: "#644E9B",
        category: 'technology'
    }
}

export default function Blog({ params }: Props) {
    const blog_id = params.slug;
    const blog = blogsData.find((blog) => blog.id === blog_id);

    if (!blog) {
        return (
            <div className="flex flex-col justify-center items-center gap-6 w-screen h-screen bg-black text-white text-center">
                <p className="text-5xl font-bold">404</p>
                <p className="text-3xl font-medium">Article Non trouvée</p>
            </div>
        )
    }

    return (
        <div
            itemScope
            itemType='https://schema.org/Blog'
            className="flex flex-col justify-between items-center w-full min-h-[100vh] bg-ac-gray2"
        >
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-6L5ZVZDMVJ" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-6L5ZVZDMVJ');
        `}
            </Script>

            <ReturnToTop />
            <Navbar />

            <div className="flex flex-col justify-start items-center w-full bg-ac-gray2">
                <div className="flex flex-col justify-start items-start w-full gap-12 pt-10 px-6 sm:px-12 md:px-20 xm:px-6 lg:px-12 xl:px-20 mx-6 sm:mx-12 md:mx-20 xm:mx-6 lg:mx-12 xl:mx-20">
                    <h1 itemProp='name' className={jostFont.className + " font-bold text-3xl xm:text-5xl lg:text-5xl xl:text-6xl text-left text-black"}>
                        {blog.title}
                    </h1>
                    <div className={montserratFont.className + " flex flex-col xm:flex-row justify-start items-start xm:items-center gap-6 xm:gap-32 font-medium text-xl text-left text-black"}>
                        <p itemProp='dateCreated'>{readableDate(blog.date)}</p>
                        <p>par {blog.author.name}</p>
                    </div>
                </div>
                <div className={montserratFont.className + " w-[97%] flex flex-col xm:flex-row justify-start items-center xm:items-start rounded-md bg-white gap-16 py-8 px-2 fold:px-6 sm:px-12 md:px-20 xm:px-6 lg:px-12 xl:px-20 mx-2 fold:mx-6 sm:mx-12 md:mx-20 xm:mx-6 lg:mx-12 xl:mx-20 my-11"}>
                    {/* Article Body */}
                    <div className="flex w-full flex-col justify-start items-start gap-8">
                        <p className="uppercase font-medium text-base text-black text-left">Share</p>
                        <div className="w-full h-px bg-black"></div>
                        <div className="flex flex-col justify-start items-start gap-10 break-words">
                            {blog.body.map(section => {
                                if (section.type === "image" && section.url) {
                                    return (
                                        <figure key={section.section} className='flex flex-col justify-center items-center self-center text-center'>
                                            <Image className='max-h-[500px] max-w-[500px] w-[90%]' width={500} height={500} src={section.url} alt={blog.id} />
                                            <figcaption>{section.imageCaption}</figcaption>
                                        </figure>
                                    )
                                }
                                if (section.type === "paragraph" && section.text) {
                                    return (
                                        <h3 key={section.section} className={"font-medium text-lg text-black text-left " + (section.section === 1 ? "indent-5" : "")}>
                                            {section.text}
                                        </h3>
                                    )
                                }
                                if (section.type === "dangerousParagraph" && section.text) {
                                    return (
                                        <h3 dangerouslySetInnerHTML={{__html: section.text}} key={section.section} className={"font-medium text-lg text-black text-left " + (section.section === 1 ? "indent-5" : "")}/>
                                    )
                                }
                                if (section.type === "header1" && section.text) {
                                    return (
                                        <h2 key={section.section} className={"font-semibold text-2xl text-black text-left " + (section.section === 1 ? "indent-5" : "")}>
                                            <strong>{section.text}</strong>
                                        </h2>
                                    )
                                }
                                if (section.type === "header2" && section.text) {
                                    return (
                                        <h2 key={section.section} className={"font-semibold text-xl text-black text-left " + (section.section === 1 ? "indent-5" : "")}>
                                            {section.text}
                                        </h2>
                                    )
                                }
                                if (section.type === "itemize" && section.items) {
                                    return (
                                        <div key={section.section} className="flex flex-col justify-start items-start gap-3 ml-5">
                                            {section.items.map((item) => {
                                                if (item.title === "" && item.body === "") {
                                                    return <></>
                                                }
                                                return (
                                                    <h4 key={item.title ? item.title : item.body} className="font-medium text-lg text-black text-left">
                                                        <span>● </span>
                                                        {item.title &&
                                                            <>
                                                                <span className='italic font-semibold'>{item.title}</span>
                                                                {" "} : {" "}
                                                            </>
                                                        }
                                                        {item.body}
                                                    </h4>
                                                )
                                            })}
                                        </div>
                                    )
                                }
                                if (section.type === "enumerate" && section.items) {
                                    return (
                                        <div key={section.section} className="flex flex-col justify-start items-start gap-3 ml-5">
                                            {section.items.map((item, index) => {
                                                if (item.title === "" && item.body === "") {
                                                    return <></>
                                                }
                                                return (
                                                    <h4 key={item.title ? item.title : item.body} className="font-medium text-lg text-black text-left">
                                                        <span>{index + 1}. </span>
                                                        {item.body}
                                                    </h4>
                                                )
                                            })}
                                        </div>
                                    )
                                }
                                if (section.type === "link" && section.text) {
                                    return (
                                        <a key={section.section} target='_blank' rel="noopener" href={section.text} className="anchor-style">{section.text}</a>
                                    )
                                }
                                if (section.type === "code" && section.code) {
                                    return (
                                        <CodeViewer key={section.section} code={section.code} showLines={true} />
                                    )
                                }
                                if (section.type === "iframe" && section.url) {
                                    return (
                                        <iframe key={section.section} style={{ height: 100 * (9 / 16) + "vw" }} className={'max-w-full xm:!h-[280px] lg:!h-[360px] self-center'} allow="fullscreen" width={640} height={360} src={section.url} ></iframe>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    {/* Auteur Card */}
                    <div className="sticky top-48 flex flex-col justify-start items-center gap-6 px-2 fold:px-6 py-6 rounded-2xl bg-ac-gray mt-24">
                        <div className="flex justify-center items-center w-full relative -mt-24">
                            <div className="w-32 xs:w-40 h-32 xs:h-40 rounded-full absolute overflow-hidden bg-zinc-300"></div>
                            <Image className='object-contain object-center w-32 xs:w-40 h-32 xs:h-40 rounded-full border-2 border-zinc-500 z-30' src={blog.author.image} width={160} height={160} alt='user' />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-4">
                            <div className="flex flex-col justify-start items-center gap-1">
                                <p itemProp='author' className="uppercase font-bold text-2xl text-black text-center">{blog.author.name}</p>
                                <p itemProp='audience' className="font-semibold text-xl text-black text-center">{blog.author.job}</p>
                            </div>
                            <a target='_blank' rel="noopener" href={blog.author.contact} className="flex justify-center items-center">
                                <AiFillLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}