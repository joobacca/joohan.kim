import Head from 'next/head';
import profilePic from '../static/profilepic.jpeg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joo Han Kim | Web developer based in Hamburg</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='h-full flex flex-col justify-center items-center'>
        <div className='grow w-1/2 md:w-1/3 flex flex-col justify-center items-center'>
          <div className='w-full pb-1 relative'>
            <div
              className='absolute rounded-full bg-gray-200 w-full h-full p-4 bg-cover'
              style={{ backgroundImage: `url(${profilePic.src})` }}
            />
          </div>
        </div>
        <div className='text-center p-4'>
          <p className='text-2xl'>Joo Han Kim</p>
          
        </div>
      </div>
    </>
  )
}
