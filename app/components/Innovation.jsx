import localFont from 'next/font/local'
import Image from 'next/image'

// Font files can be colocated inside of `app`
const ClassyVogue = localFont({
    src: '../font/classyvogueregular.ttf',
    display: 'swap',
})

export default function Innovation() {
    return (
        <section className="relative flex flex-col justify-between h-screen lg:h-[1400px] w-full bg-gradient-to-t from-[#A7A7A7] to-[#D9D9D9] pb-20">
            <div className=" flex h-2/3 w-full pl-16 pt-20 lg:pl-32 lg:pt-44">
                <h2 style={{ whiteSpace: 'pre-line' }} className={`${ClassyVogue.className} text-4xl lg:text-8xl font-light z-20`}>
                    <span className='bg-clip-text uppercase text-transparent bg-gradient-to-tr from-[#B6F7FB] via-white to-[#F7D9FF]'>
                        {`new innnovation \n fully liquid type \n pcl injectable`}
                    </span>
                </h2>
                <Image src={'/assets/innovation-01.png'} width={600} height={750} className=' absolute right-0 top-12 lg:top-20 lg:bottom-0 lg:w-[40dvw] z-0' />
            </div>
            <div className="flex flex-col justify-center lg:justify-start lg:flex-row h-1/3 w-full gap-6 z-20">
                <div className='relative hidden lg:flex w-full lg:w-1/3'>
                    <Image src={'/assets/innovation-02.png'} width={600} height={750} className=' absolute -left-2 bottom-0 w-[35dvw]' />
                </div>
                <div className='flex flex-col items-start justify-center lg:justify-end w-full lg:w-2/3 pt-12 px-4 lg:pl-12 border-l-[1px] border-black gap-4 '>
                    <h2 style={{ whiteSpace: 'pre-line' }} className='w-full text-3xl lg:text-6xl font-normal text-center lg:text-start'>{`ด้วยเทคโนโลยี CESABP \nโดย DEXLEVO INC.`}</h2>
                    <p style={{ whiteSpace: 'pre-line' }} className='w-full text-lg lg:text-3xl font-light text-center lg:text-start'>
                        {`GOURI ช่วยฟื้นฟูสภาพผิวให้กลับมาอ่อนเยาว์ \n อีกครั้งด้วยการเสริมสร้างคอลลาเจนทั่วทั้งใบหน้า \n ซึ่งเป็นการดูแลขั้นพื้นฐานเพื่อชะลอการเสื่อมสภาพ \n ไปตามวัยของผิว`}
                    </p>
                </div>
            </div>

        </section>
    )
}