import clsx from 'clsx'
import Link from 'next/link'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

function Tel({ name, tele, children, invert = false }) {
  return (
    <Link
      href={tele}
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </Link>
  )
}

function Email({ name, email, children, invert = false }) {
  return (
    <Link
      href={email}
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </Link>
  )
}
export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Address" invert={invert}>
          Puttalam Road,
          <br/>
          Kurunegala
        </Office>
      </li>
      <li>
        <Tel name="Telephone" tele="tel:+94767137766" invert={invert}>
          (+94)76 713 7766
        </Tel>
      </li>
      
    </ul>
  )
}
