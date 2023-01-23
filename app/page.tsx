import { get } from '@vercel/edge-config';
import { redirect } from 'next/navigation';
import Image from "next/image";
import ExternalLinkCard from "@/components/ExternalLinkCard";
import {
    TwitterIcon,
    KaggleIcon,
    GithubIcon,
    LinkedinIcon,
    LinkIcon
} from "@/components/Links";

export const dynamic = 'force-dynamic',
  runtime = 'edge';

interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}



export default async function HomePage() {

  const data: Data | undefined = await get('linktree');

  if (!data) {
    // not working yet https://github.com/vercel/next.js/issues/44232
    redirect('https://linktr.ee/selenagomez');
  }

  const getLinkIconFromHref = (href: string) => {
    if (href.includes('twitter')) {
      return <TwitterIcon/>
    }
    else if (href.includes('kaggle')) {
      return <KaggleIcon/>
    }
    else if (href.includes('github')) {
      return <GithubIcon/>
    }
    else if (href.includes('linkedin')) {
      return <LinkedinIcon/>
    }
    else {
      return <LinkIcon/>;
    }
  }

  return (
    <div className="flex flex-col items-center mx-auto w-full mt-16 px-8">
      <Image
        className="rounded-full"
        src={data.avatar}
        width={96}
        height={96}
        alt={data.name}
      />
      <h1 className="font-bold mt-4 text-xl mb-8 text-gray-50">{data.name}</h1>
      {data.links.map((link: Link) => (
        <ExternalLinkCard key={link.href} {...link} />
      ))}
      <div className="flex gap-4 items-center mt-8 text-white">
      {
        data.socials.map((social: Social) => {
          return (
            <a
              aria-label={`${social.title} link`}
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getLinkIconFromHref(social.href)}
            </a>
          )
          
        })
      }
      </div>
    </div>
  );
}

