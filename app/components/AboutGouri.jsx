import Image from "next/image"


export default function AboutGouri() {
    return (
        <section className="flex flex-col w-full h-full gap-12 lg:gap-24 bg-gradient-to-t from-[#a7a7a7] via-[#D9D9D9]">
            <div className="relative flex flex-col lg:flex-row w-full lg:h-[1220px]">
                <Image src={'/assets/bigg.png'} width={730} height={763} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-[600px]" />
                <div className="flex justify-end items-center lg:w-1/2">
                    <div className="flex flex-col lg:w-4/6 gap-12 p-4">
                        <h2 className="text-3xl lg:text-5xl font-light">GOURI (กูริ) คืออะไร ?</h2>
                        <p style={{ whiteSpace: 'pre-line' }} className="text-base lg:text-xl font-light uppercase text-justify">
                            {

                                `Gouri คือ Polycaprolactone หรือ PCL ชนิดเหลว สำหรับฉีดเป็นเครื่องมือแพทย์ที่จดทะเบียนอย่างถูกต้อง \n
                                Gouri ช่วยฟื้นฟูสภาพผิวให้กลับมาอ่อนเยาว์อีกครั้งด้วย การเสริมสร้างคอลลาเจน (Collagenesis) ทั่วทั้งใบหน้า \n

                                หลังจากฉีด GOURI ตัวยาจะกระจายตัวได้ดีทั่วทั้งใบหน้า
                                โดยผลิตภัณฑ์ไม่มี ไมโครพาร์ทิเคิล (Microparticles)
                                มีความปลอดภัย และช่วยเสริมสร้างคอลลาเจนทั่วทั้ง
                                บริเวณที่ต้องการฉีด โดยแพทย์ผู้ชำนาญเฉพาะทาง
                                จะฉีด เพียง 2-4 จุดเท่านั้น\n

                                Gouri ช่วยแก้ไขการเสื่อมสภาพของผิว ให้ดีขึ้นอย่าง ยั่งยืน ด้วยการฟื้นฟูคุณภาพผิวใหแข็งแรงดู
                                อ่อนเยาว์อีกครั้ง`
                            }
                        </p>
                    </div>
                </div>
                <div className="flex items-end justify-end lg:w-1/2 lg:pl-24">
                    <div className="flex items-end justify-end w-full">
                        <Image src={'/assets/about-01.png'} width={301} height={613} className=" w-full lg:h-[1024px] object-cover object-bottom" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:h-[600px] w-full items-end gap-12">
                <div className="flex lg:w-6/12 order-2 lg:order-1">
                    <Image src={'/assets/about-03.png'} width={1580} height={1192} />
                </div>
                <div className="flex flex-col justify-end w-full lg:w-5/12 border-l-[1px] border-black px-4 lg:pl-16 h-fit gap-12 lg:order-2">
                    <h2 className="text-3xl lg:text-5xl font-light">{'CESABP Technology'}</h2>
                    <p style={{ whiteSpace: 'pre-line' }} className=" text-base lg:text-xl font-light uppercase text-justify">
                        {`เทคโนโลยีพอลิเมอร์ชนิดละลายน้ำได้
                    และย่อยสลายได้ทางชีวภาพที่ออกฤทธิ์
                    ในการเสริมสร้างคอลลาเจน และด้วย CESABP
                    (Collagenesis-Enabled Solubilized Active
                    and Biodegradable Polymer Technology)
                    ของโรงงานเด็กซ์ลีโว (DEXLEVO) ซึ่งเป็น
                    เทคโนโลยีเอกสิทธิ์เฉพาะ ทำให้สาร
                    Polycaprolactone หรือ PCL ของ Gouri นั้น
                    อยู่ในรูปแบบของเหลว 100% (Liquid form)
                    สามารถกระจายตัวได้ดี และไม่เป็นอันตรายต่อร่างกาย
                    จึงช่วยให้เกิดการเสริมสร้างคอลลาเจนของผิว
                    ตามธรรมชาติโดยไม่เกิดการอุดตันในเส้นเลือด
                    และไม่เกิดเป็นไมโครพาร์ทิเคิล (microparticles)`}
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center py-12 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto w-full gap-y-12 lg:gap-y-24">
                    <div className="flex flex-col w-full items-center justify-center col-span-1 gap-6 ">
                        <Image src={'/assets/icons/i-1.png'} width={200} height={200} className="w-36" />
                        <span style={{ whiteSpace: 'pre-line' }} className="text-xl text-center">
                            {`ลดเลือน \n ริ้วรอยร่องตื้น`}</span>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center col-span-1 gap-6 border-x-[1px] border-black">
                        <Image src={'/assets/icons/i-2.png'} width={200} height={200} className="w-36" />
                        <span style={{ whiteSpace: 'pre-line' }} className="text-xl text-center">
                            {`ผิวแน่นกระชับ \n เต่งตึง`}</span>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center col-span-1 gap-6">
                        <Image src={'/assets/icons/i-3.png'} width={200} height={200} className="w-36" />
                        <span style={{ whiteSpace: 'pre-line' }} className="text-xl text-center">
                            {`รอยดำ รอยสิว \n ดูจางลง`}</span>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center col-span-1 gap-6">
                        <Image src={'/assets/icons/i-6.png'} width={200} height={200} className="w-36" />
                        <span style={{ whiteSpace: 'pre-line' }} className="text-xl text-center">
                            {`ผิวเปล่งปลั่ง \n กระจ่างใส`}</span>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center col-span-1 gap-6 border-x-[1px] border-black">
                        <Image src={'/assets/icons/i-5.png'} width={200} height={200} className="w-36" />
                        <span style={{ whiteSpace: 'pre-line' }} className="text-xl text-center">
                            {`ผิวชุ่มชื้น`}</span>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center col-span-1 gap-6">
                        <Image src={'/assets/icons/i-4.png'} width={200} height={200} className="w-36" />
                        <span style={{ whiteSpace: 'pre-line' }} className="text-xl text-center">
                            {`เริ่มเห็นความเปลี่ยนแปลง \n ภายใน 1-2 สัปดาห์`}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}