'use client';

import Image from "next/image";
import ExternalLinkCard from "@/components/ExternalLinkCard";

import {
    TwitterIcon,
    KaggleIcon,
    GithubIcon,
    LinkedinIcon,
    LinkIcon
} from "../components/Links";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage({ data }) {
  return (
    <div className="flex flex-col items-center mx-auto w-full mt-16 px-8">
      <Image
        className="rounded-full"
        src={data.avatar}
        width={96}
        height={96}
        alt={data.name}
      />
      <h1 className="font-bold mt-4 text-xl mb-8">{data.name}</h1>
      {data.links.map((link) => (
        <ExternalLinkCard key={link.href} {...link} />
      ))}
      <div className="flex gap-4 items-center mt-8">
      {
      data.socials.map((link) => {

        if (link.href.includes('twitter')) {
          return <TwitterIcon key={link.href}/>;
        }
        else if (link.href.includes('kaggle')) {
          return <KaggleIcon key={link.href}/>;
        }
        else if (link.href.includes('github')) {
          return <GithubIcon key={link.href}/>;
        }
        else if (link.href.includes('linkedin')) {
          return <LinkedinIcon key={link.href}/>;
        }
        else {
          return <LinkIcon key={link.href}/>;
        }
      })
    }
      </div>
      
    </div>
  );
}