import Image from "next/image";
import Link from "next/link";

export default function Review() {
    return (
        <section className="relative flex flex-col items-center lg:justify-center w-full h-[80dvh] lg:min-h-[780px]">
            <Image src={'/assets/bg-review.png'} width={1440} height={780} priority className="absolute top-0 left-0 h-full lg:w-full object-cover" />
            <div className="flex flex-col items-center justify-center mt-32 lg:mt-0 w-full z-20 gap-6">
                <h2 style={{ whiteSpace: 'pre-line' }} className="text-3xl lg:text-5xl font-light text-white leading-snug">{`การต่อต้านริ้วรอยทั้งหมด \n แก้ปัญหาได้ด้วย GOURI`}</h2>
                <hr className=" border-b-[0.5px] border-white w-60" />
                <Link href='https://edencolors.co.th/th/product/gouri-1' target='_blank' className="flex py-2  justify-center  text-2xl font-normal text-black bg-white rounded w-2/3 lg:w-1/4 hover:scale-95 transition-transform duration-500 ease-in-out">{'รีวิวประสบการณ์จากผู้ใช้'}</Link>
            </div>
        </section>
    );
}