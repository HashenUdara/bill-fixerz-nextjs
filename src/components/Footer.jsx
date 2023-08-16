import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Reach us',
    links: [
      {
        title: (
          <>
            Address <br/> 
            <span aria-hidden="true" className="text-neutral-100"> 
            Puttalam Road,
            <br/>
            Kurunegala
            </span>
          </>
        ),
        href: '/',
      },
      {
        title: (
          <>
            Email <br/> <span aria-hidden="true">info@billfixerz.com &rarr;</span>
          </>
        ),
        href: 'mailto:info@billfixerz.com',
      },
      {
        title: (
          <>
            Telephone <br/> <span aria-hidden="true">(+94)76 713 7766 &rarr;</span>
          </>
        ),
        href: 'tel:+94767137766',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '#' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-50">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-200">
              {section.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-50"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm" data-netlify="true" name="NewsletterForm" method="POST">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-100">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-200">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-100 ring-4 ring-transparent transition placeholder:text-neutral-300 focus:border-neutral-50 focus:outline-none focus:ring-neutral-50/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home" className="flex items-center">
            <Logo className="h-8" fillOnHover />
            <p className="ml-3 font-display text-neutral-100 [text-wrap:balance] font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            Billfixerz.
            </p>
          </Link>
          <p className="text-sm text-neutral-300">
            © Billfixerz. {new Date().getFullYear()} | Crafted by 
            <span className="text-neutral-100 font-semibold"> Hashen</span>
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}


