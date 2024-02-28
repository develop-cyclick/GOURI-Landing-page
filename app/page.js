import Image from "next/image";
import localFont from 'next/font/local'
import Link from "next/link";
import Innovation from "./components/Innovation";
import Review from "./components/Review";
import AbooutGouri from "./components/AboutGouri";
import FAQ from "./components/FAQ";
import FormMessage from "./components/FormMessage";


// Font files can be colocated inside of `app`
const ClassyVogue = localFont({
  src: './font/classyvogueregular.ttf',
  display: 'swap',
})

export default function Home() {
  return (
    <main className=" flex flex-col">
      <Image src={'/assets/logo.png'} width={134} height={717} className="absolute left-6 top-6 lg:top-12 lg:left-12 z-10 w-12 lg:w-16" />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen">
        <div className="absolute top-0 left-0 flex w-screen h-full lg:max-h-screen z-0">
          <Image
            src={'/assets/hero-banner.png'}
            width={2880}
            height={2048}
            priority
            className="object-cover">
          </Image>
        </div>

        <div className="flex flex-col items-center gap-8 z-10">
          <Image src={'https://gorgeousgouri.com/theme/basic/img/main/p-scene01-main.svg'} width={368} height={84} className=" w-1/3 lg:w-1/2" />
          <h2 className="text-4xl w-2/3 lg:w-full lg:text-5xl text-white font-light text-center">คุณจะคงความอ่อนเยาว์ไว้ได้อย่างไร?</h2>
          <p style={{ whiteSpace: 'pre-line' }} className={`${ClassyVogue.className} uppercase text-6xl text-center font-light text-white/50`}>{`how \n could you stay \nyoung?`}</p>
        </div>

        {/* Call To Action: Add LINE Official */}
        <Link href={'#'} className=" absolute bottom-16 flex  px-12 py-4 text-2xl lg:text-3xl font-light bg-white rounded z-10 hover:scale-95 transition-transform duration-500 ease-in-out" >{'สอบถามเพิ่มเติม'}</Link>
      </section>
      <Innovation />
      <Review />
      <AbooutGouri />
      <FAQ />
      <FormMessage />
    </main>
  );
}
