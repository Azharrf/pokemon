import Link from 'next/link';
import React from 'react'
import Button from '../../atoms/Button';

interface CardProps {
  id: string;
  title: string;
  images: string;
  name: string;
  titleButton: any;
}

export default function Card(props: CardProps) {
  const { id, title, images, name, titleButton } = props
  return (
    <Link href={`/detail/${id}`}>
      <div className="item-card">
        <p className="title">{title}</p>
        <div className="image-card mt-3">
          <img src={images} alt="Logo" />
        </div>
        <h4 className="name my-3">{name}</h4>
        <div className="button-group">
          {titleButton.length > 0 && titleButton.map((t: { name: string }, i: number) => (
            <Button key={i} classBtn="btn btn-primary" title={t.name} disabled />
          ))}
        </div>
      </div>
    </Link>
  )
}
