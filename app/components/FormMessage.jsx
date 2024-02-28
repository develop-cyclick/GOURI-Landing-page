import Link from "next/link";

export default function FormMessage() {
    return (
        <section className="flex flex-col w-full bg-gradient-to-b from-[#A7A7A7] py-12 gap-12">
            <div className="flex flex-col w-full items-center justify-center">
                <h2 className="text-2xl lg:text-5xl w-2/3 lg:w-full text-center">{'สนใจสั่งซื้อ สำหรับแพทย์และคลินิกเท่านั้น'}</h2>
            </div>
            <div className=" flex flex-col lg:flex-row w-full justify-center items-center gap-12 lg:gap-28">
                <div className="flex flex-col items-center gap-2">
                    <span className="flex px-4 py-4 rounded-full bg-white">
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 0.366211C2.73858 0.366211 0.5 2.60479 0.5 5.36621V9.36621C0.5 20.9642 9.90202 30.3662 21.5 30.3662H25.5C28.2614 30.3662 30.5 28.1276 30.5 25.3662V22.6023C30.5 21.466 29.858 20.4272 28.8416 19.919L24.0098 17.5031C22.3769 16.6866 20.3994 17.5057 19.8221 19.2377L19.2266 21.0243C19.0003 21.7031 18.3039 22.1072 17.6023 21.9669C13.2106 21.0885 9.77769 17.6557 8.89935 13.2639C8.75902 12.5623 9.16312 11.8659 9.84195 11.6397L12.0592 10.9006C13.5464 10.4048 14.4012 8.84772 14.021 7.32691L12.8489 2.6386C12.515 1.3031 11.315 0.366211 9.93845 0.366211H5.5Z" fill="black" />
                        </svg>
                    </span>
                    <p className="text-2xl lg:text-4xl font-medium">{'Phone'}</p>
                    <div className="flex flex-col">
                        <Link href={'tel:02-125-0142'} className="lg:text-xl">
                            {'02-125-0142'}
                        </Link>
                        <Link href={'tel:01-553-6615'} className="lg:text-xl">
                            {'01-553-6615'}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="flex px-4 py-4 rounded-full bg-white">
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 5.36621C0.5 3.70936 1.84315 2.36621 3.5 2.36621H27.5C29.1569 2.36621 30.5 3.70936 30.5 5.36621V7.78137L15.5 16.2189L0.5 7.78134V5.36621Z" fill="black" />
                            <path d="M0.5 10.076V25.3662C0.5 27.0231 1.84315 28.3662 3.5 28.3662H27.5C29.1569 28.3662 30.5 27.0231 30.5 25.3662V10.0761L15.5 18.5136L0.5 10.076Z" fill="black" />
                        </svg>
                    </span>
                    <p className="text-2xl lg:text-4xl font-medium">{'Email:'}</p>
                    <div className="flex flex-col">
                        <Link href={'email:admin@edencolorsthailand.com'} className="lg:text-xl">
                            {'admin@edencolorsthailand.com'}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="flex px-4 py-4 rounded-full bg-white">
                        <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.4186 11.563C30.08 1.51122 16.0924 -2.2921 7.69433 2.29031C-4.93013 9.15208 0.388453 23.6205 13.3907 25.2813L13.5658 25.3155C13.9764 25.3945 14.0859 25.4998 14.1133 25.5445C14.1653 25.6235 14.1379 25.7788 14.116 25.863C13.9381 26.5842 13.7164 27.2817 13.8615 28.0897C14.2858 30.248 16.6453 29.1847 17.8388 28.4345C19.347 27.5817 20.7704 26.621 21.838 25.8788C26.8965 22.4887 32.2343 18.2748 31.4158 11.5657L31.4186 11.563ZM10.1497 16.1165H7.47534C7.07022 16.1165 6.75269 15.7901 6.75269 15.4006V10.0049C6.75269 9.07838 8.17883 9.07575 8.17883 10.0049V14.6873H10.1497C11.1132 14.7478 11.116 16.0586 10.1497 16.1191V16.1165ZM12.9527 15.3822C12.8897 16.3086 11.5266 16.3113 11.4636 15.3822V9.98644C11.5266 9.05996 12.8897 9.05733 12.9527 9.98644V15.3822ZM19.5523 15.3822C19.5742 16.0428 18.6299 16.3455 18.2412 15.7954L15.6188 12.3053V15.3822C15.5559 16.3086 14.1297 16.3113 14.1297 15.3822V10.1391C14.1297 9.47319 15.0604 9.17577 15.4573 9.72587L18.0961 13.2133V9.98381C18.0961 9.05733 19.5304 9.05469 19.5551 9.98381L19.5496 15.3795L19.5523 15.3822ZM24.8819 15.9981H21.2604C20.8553 15.9981 20.5296 15.6717 20.5296 15.2821C20.5296 13.9372 20.5296 11.2393 20.5296 9.89432C20.5296 9.50478 20.858 9.19946 21.2604 9.19946H24.7696C25.7332 9.19946 25.7359 10.5708 24.7696 10.5708H22.005V11.8815H24.2468C25.2104 11.8815 25.2131 13.2528 24.2468 13.2528H22.005V14.5636H24.8819C25.8454 14.5636 25.8481 15.9349 24.8819 15.9954V15.9981Z" fill="black" />
                        </svg>
                    </span>
                    <p className="text-2xl lg:text-4xl font-medium">{'Phone'}</p>
                    <div className="flex flex-col">
                        <Link href={'#'} className="lg:text-xl">
                            {'@edencolors'}
                        </Link>
                    </div>
                </div>
            </div>
            <form className="flex flex-col p-12 lg:p-20 gap-6 shadow-xl bg-white max-w-5xl mx-auto w-full rounded-md">
                <div className="flex flex-col lg:flex-row w-full gap-6">
                    <div className="flex flex-col lg:w-1/2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="px-4 py-4 w-full border-[1px] rounded" />
                        <input
                            type={'tel'}
                            name="phone"
                            placeholder="Phone"
                            className="px-4 py-4 w-full border-[1px] rounded" />
                        <input
                            type={'email'}
                            name="email"
                            placeholder="Email"
                            className="px-4 py-4 w-full border-[1px] rounded" />
                    </div>
                    <div className="flex lg:w-1/2">
                        <textarea
                            name="message"
                            placeholder="Text here..."
                            className="px-4 py-4 w-full border-[1px] rounded" />
                    </div>
                </div>
                <button className="px-4 py-4 w-full border-[1px] rounded bg-black text-white text-2xl">
                    {'Send Message'}
                </button>
            </form>
        </section>
    )
}