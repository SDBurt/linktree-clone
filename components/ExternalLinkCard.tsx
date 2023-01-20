import Image from "next/image";
import { LinkIcon } from "@/components/Links";

export default function ExternalLinkCard({href, title, image}: {href: string, title: string, image?: string}) {
    return (
      <a className="flex items-center p-1 w-full rounded 
                    hover:scale-105 transition-all border border-gray-100 mb-3 bg-gray-50"
          href={href}
      >
        <div className="flex justify-between w-full items-center">
          <div className="w-10 h-10">
            {image && <Image
              className="rounded-sm"
              src={image}
              alt={image}
              width={40}
              height={40}
            />}
          </div>
          <h2 className="font-semibold text-center">
            {title}
          </h2>
          <div className="flex items-center justify-center w-10 h-10">
            <LinkIcon />
          </div>
        </div>
      </a>
    )
  }
  