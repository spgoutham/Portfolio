import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
  props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
  const router = useRouter();

  const title = 'Goutham';
  const description = "Hello, Checkout my Portfolio";
  const domainName = 'your-domain.com'; // Replace 'your-domain.com' with your actual domain name

  return {
    title,
    description,
    canonical: `https://${domainName}/${router.asPath}`, // Use your domain name here
    openGraph: {
      title,
      description,
      site_name: 'Goutham',
      url: `https://${domainName}/${router.asPath}`, // Use your domain name here
      type: 'website',
      images: [
        {
          url: '/banner.png',
          alt: description,
          width: 1280,
          height: 720,
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
      handle: '@spgoutham',
      site: '@spgoutham',
    },
    ...props,
  };
}
