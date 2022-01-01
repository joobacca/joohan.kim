import Head from 'next/head';
import profilePic from '../static/profilepic.jpeg';
import github from '../static/github.png';
import youtube from '../static/youtube.png';
import instagram from '../static/instagram.png';
import { SocialImage } from '../components/SocialImage';
import SocialLink from '../components/SocialLink';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joo Han Kim | Web developer based in Hamburg</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='h-full flex flex-col justify-center items-center'>
        <div className='grow w-2/3 sm:w-1/3 md:w-1/4 flex flex-col justify-center items-center'>
          <div className='w-full pb-1 relative'>
            <div
              className='absolute rounded-full bg-gray-200 w-full h-full p-4 bg-cover'
              style={{ backgroundImage: `url(${profilePic.src})` }}
            />
          </div>
        </div>
        <div className='text-center p-4'>
          <p className='text-2xl'>Joo Han Kim</p>
          <p className='my-4'>
            I like playing guitar and with new technologies. Currently hyping Next.js.
          </p>
          <p className='text-lg hover:underline'><a href="mailto:kontakt@joohan.kim">kontakt@joohan.kim</a></p>
          <div className='w-2/3 md:w-1/2 mx-auto'>
            <hr className='my-2 px-2' />
            <div className='mx-auto flex justify-around'>
              <SocialLink title='GitHub' href='https://github.com/joobacca/' src={github.src} />
              <SocialLink title='Instagram' href='https://www.instagram.com/joobacca2/' src={instagram.src} />
              <SocialLink title='YouTube' href='https://www.youtube.com/channel/UCaZMME_f-4mgSvj_l4t7Ktg' src={youtube.src} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
