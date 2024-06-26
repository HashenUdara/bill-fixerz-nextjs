import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoMitsubishi from '@/images/partners/1.png'
import logoReact from '@/images/partners/7.png'
import logoFlutter from '@/images/partners/3.png'
import logoGithub from '@/images/partners/8.png'
import logoSQL from '@/images/partners/5.png'
import logoNode from '@/images/partners/6.png'
import logoVS from '@/images/partners/2.png'
import logoAWS from '@/images/partners/4.png'

import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import { Button } from '@/components/Button'
import services from '@/components/ServicesData';
import { Logo } from '@/components/Logo'


const clients = [
  ['AWS Cloud', logoAWS],
  ['React', logoReact],
  ['NodeJS', logoNode],
  ['Flutter', logoFlutter],
  ['VSCode', logoVS],
  ['Github', logoGithub],
  ['Mitsubishi', logoMitsubishi],
  ['MySQL', logoSQL],
]

function Clients() {
  return (
    <div className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56 backdrop-blur-2xl">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left [text-wrap:balance]">
            Empowering Innovation Through Cutting-Edge Technologies
          </h2>
          <div className="h-px flex-auto bg-neutral-300" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn className="flex items-center">
                  <Image src={logo} alt={client} unoptimized width="30" />
                  <h2 className="font-display  ml-3 font-semibold tracking-wider text-white text-left text-sm sm:text-base">
                    {client}
                </h2>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="text-neutral-500">
          Embark on a journey of boundless potential as we offer a complete range of services. 
          We&apos;re your steadfast companion in traversing the digital realm, ensuring your business flourishes in this era of innovation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition bg-neutral-50 hover:bg-indigo-200 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>

      </Container>
    </>
  )
}

function OurServices() {

  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="text-neutral-300">
          Embark on a journey of boundless potential as we offer a complete range of services. 
          We&apos;re your steadfast companion in traversing the digital realm, ensuring your business flourishes in this era of innovation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={index} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition bg-neutral-50 hover:bg-neutral-200 sm:p-8">
                
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <span className="font-semibold">
                    Services
                  </span>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{service.no}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {service.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

    </>
  );
}

function Services() {
  return (
    <>
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl w-full">
        <svg
          className="relative  h-[21.1875rem] max-w-none -translate-x-1/2 sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <SectionIntro
        eyebrow="Our Collective Commitment"
        title="We Embrace Values That Define Us"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="text-neutral-300">
          We are not just a mere collection of individuals. We are a cohesive alliance, bound by a shared vision and fortified by unwavering core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Loyalty" >
              Embracing unwavering commitment, we stand united in fostering enduring relationships and dedicated partnerships that fuel our journey of growth.

            </ListItem>
            <ListItem title="Trust">
              Building on a foundation of integrity, we cultivate an environment where trust is not just earned but cherished, nurturing an atmosphere of reliability and transparency.

            </ListItem>
            <ListItem title="Compassion">
              Infused with empathy, we extend a helping hand to each other and those we serve, fostering a community that cares and uplifts in every endeavor.

            </ListItem>
            
          </List>
        </div>

      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Step into tomorrow with Billfixerz, where cutting-edge solutions meet seamless automation. Elevate your business to new heights as we empower you to embrace innovation, streamlining operations and propelling growth beyond limits.',
    
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56 ">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] w-full">
          <svg
            className="relative -z-10 h-[21.1875rem] max-w-none rotate-[30deg] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".2"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-7xl">
            Automate your future, Accelerate your growth
          </h1>
          <p className="mt-6 text-xl text-neutral-200">
            Step into tomorrow with Billfixerz, where cutting-edge solutions meet seamless automation. 
            Elevate your business to new heights as we empower you to embrace innovation, streamlining operations and propelling growth beyond limits.
          </p>
        </FadeIn>

      </Container>

      <Clients />

      {/*<CaseStudies caseStudies={caseStudies} />*/}

      <OurServices />
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: '', logo: "" }}
      >
        Fueling Innovation, Fostering Growth, and Igniting Possibilities – Our values resonate through every solution we craft, driving businesses towards a future where technology transforms dreams into reality.
      </Testimonial>

      <Services />

      <ContactSection />


    </>
  )
}
