'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'

export default function FAQ() {

    return (
        <section className='flex flex-col max-w-4xl mx-auto w-full py-12 px-4 lg:px-0 lg:py-24 gap-6'>
            <span className='flex w-full items-center justify-center mb-4'>
                <h2 className='text-3xl lg:text-5xl'>{'FAQ'}</h2>
            </span>
            <Disclosure as="div" className="flex">
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='flex flex-col border-[1px] w-full lg:rounded-full'>
                        <Disclosure.Button className={'flex flex-col lg:flex-row font-light justify-between items-center w-full px-12 py-4'}>
                            หลังจากฉีด GOURI จะกระจายตัวทั่วทั้งใบหน้าอย่างเป็น ธรรมชาติ โดยผลิตภัณฑ์ไม่มี ไมโครพาร์ทิเคิล
                            {/* <PlusIcon className={open ? 'rotate-45 transform w-5 h-5 transi' : '  w-5 h-5'} /> */}
                            <PlusIcon className={`${open ? 'rotate-45' : 'rotate-0'} w-5 h-5 transition-transform duration-200`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className={'flex font-medium justify-between items-center w-full px-12 pb-4'}>
                            {'หลังจากฉีด GOURI จะกระจายตัวทั่วทั้งใบหน้าอย่างเป็น ธรรมชาติ โดยผลิตภัณฑ์ไม่มี ไมโครพาร์ทิเคิล'}
                        </Disclosure.Panel>
                    </div>

                )}
            </Disclosure>
            <Disclosure as="div" className="flex">
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='flex flex-col border-[1px] w-full lg:rounded-full'>
                        <Disclosure.Button className={'flex flex-col lg:flex-row font-light justify-between items-center w-full px-12 py-4'}>
                            หลังจากฉีด GOURI จะกระจายตัวทั่วทั้งใบหน้าอย่างเป็น ธรรมชาติ โดยผลิตภัณฑ์ไม่มี ไมโครพาร์ทิเคิล
                            {/* <PlusIcon className={open ? 'rotate-45 transform w-5 h-5 transi' : '  w-5 h-5'} /> */}
                            <PlusIcon className={`${open ? 'rotate-45' : 'rotate-0'} w-5 h-5 transition-transform duration-200`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className={'flex font-medium justify-between items-center w-full px-12 pb-4'}>
                            {'หลังจากฉีด GOURI จะกระจายตัวทั่วทั้งใบหน้าอย่างเป็น ธรรมชาติ โดยผลิตภัณฑ์ไม่มี ไมโครพาร์ทิเคิล'}
                        </Disclosure.Panel>
                    </div>

                )}
            </Disclosure>
            <Disclosure as="div" className="flex">
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='flex flex-col border-[1px] w-full lg:rounded-full'>
                        <Disclosure.Button className={'flex flex-col lg:flex-row font-light justify-between items-center w-full px-12 py-4'}>
                            หลังจากฉีด GOURI จะกระจายตัวทั่วทั้งใบหน้าอย่างเป็น ธรรมชาติ โดยผลิตภัณฑ์ไม่มี ไมโครพาร์ทิเคิล
                            {/* <PlusIcon className={open ? 'rotate-45 transform w-5 h-5 transi' : '  w-5 h-5'} /> */}
                            <PlusIcon className={`${open ? 'rotate-45' : 'rotate-0'} w-5 h-5 transition-transform duration-200`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className={'flex font-medium justify-between items-center w-full px-12 pb-4'}>
                            {'หลังจากฉีด GOURI จะกระจายตัวทั่วทั้งใบหน้าอย่างเป็น ธรรมชาติ โดยผลิตภัณฑ์ไม่มี ไมโครพาร์ทิเคิล'}
                        </Disclosure.Panel>
                    </div>

                )}
            </Disclosure>
            <Disclosure as="div" className="flex">
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of an icon. */
                    <div className='flex flex-col border-[1px] w-full lg:rounded-full'>
                        <Disclosure.Button className={'flex flex-col lg:flex-row font-light justify-between items-center w-full px-12 py-4'}>
                            หลังจากฉีด GOURI จะกระจายตัวทั่วทั้งใบหน้าอย่างเป็น ธรรมชาติ โดยผลิตภัณฑ์ไม่มี ไมโครพาร์ทิเคิล
                            {/* <PlusIcon className={open ? 'rotate-45 transform w-5 h-5 transi' : '  w-5 h-5'} /> */}
                            <PlusIcon className={`${open ? 'rotate-45' : 'rotate-0'} w-5 h-5 transition-transform duration-200`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className={'flex font-medium justify-between items-center w-full px-12 pb-4'}>
                            {'หลังจากฉีด GOURI จะกระจายตัวทั่วทั้งใบหน้าอย่างเป็น ธรรมชาติ โดยผลิตภัณฑ์ไม่มี ไมโครพาร์ทิเคิล'}
                        </Disclosure.Panel>
                    </div>

                )}
            </Disclosure>
        </section>
    )
}