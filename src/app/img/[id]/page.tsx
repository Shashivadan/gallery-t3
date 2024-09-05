import Image from 'next/image'
import React from 'react'
import { getImagesId } from '~/server/queries'

export default async function Photo({ params: { id: PhotoId } }: { params: { id: number } }) {
  const image = await getImagesId(PhotoId)
  return (
    <div className=' flex items-center  justify-center />'>
      <Image src={image.url!} width={1024} height={1024} alt='adfa' />
    </div>
  )
}

