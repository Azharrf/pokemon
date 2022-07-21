import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  icon?: string;
  title?: string;
  classBtn: string;
}

export default function Button(props: ButtonProps) {
  const { link, icon, title, classBtn, ...nativeProps } = props

  if (link) {
    return (
      <Link href={`/${link}`}>
        <a className={classBtn}>
          {icon && <i className={icon} />}
          {title}
        </a>
      </Link>
    )
  }

  return (
    <button type="button" className={classBtn} {...nativeProps}>
      {icon && <i className={icon} />}
      {title && title}
    </button>
  )
}
