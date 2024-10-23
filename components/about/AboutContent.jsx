"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbStar } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { TfiTarget } from "react-icons/tfi";
import { IoIosArrowRoundUp } from "react-icons/io";

const AboutContent = () => {
    return (
        <>
            <Part1 />
            <Part2 />
            <Part3 />
            <Part4 />
        </>
    )
}

export default AboutContent

// ============ Part One =============

const Part1 = () => {
    return (
        <div className='px-4 xl:px-40 grid grid-cols-2 max-md:flex flex-col  items-center  my-2'>
            {/* ----- Image ------ */}
            <Image src='/about/about-content-1.png' alt='alt' height={400} width={400} className='max-md:w-full' />
            {/* ----- Content ------ */}
            <div className='flex flex-col gap-4 max-md:py-8'>
                <h2 className='text-primary font-[600] '>مـن نحـن ؟</h2>
                <h3 className='text-[30px] font-[600] max-md:text-[20px]'>مبتكرو الحياة الذكية</h3>
                <p className='text-lightGray max-md:leading-7 '>نحن نرفع مستوى أنفسنا، وتعتمد أهدافنا لعام 2030 على التزامنا المستمر وتعكس طموحاتنا الجريئة للتغلب على التحديات وتمكين وتحسين حياة كل شخص على وجه الأرض من خلال منتجاتنا الذكية. لدينا طموحات كبيرة، وشعور متزايد بالحاجة الملحة لدفع الابتكار الذي يجعل العالم أكثر أمانًا، ويبني مجتمعات صحية وحيوية، ويزيد الإنتاجية.

                    نحن نبتكر باستمرار لتعميق تأثير جهود شركتنا واستكشاف طرق جديدة لتطبيق التكنولوجيا على منتجاتنا لمعالجة التغيرات في سرعة الحياة المتزايدة باستمرار.</p>
            </div>
        </div>
    )
}


// ============ Part Two =============

const Part2 = () => {
    return (
        <div className='px-4 xl:px-40 my-2 py-8 flex flex-col gap-4 items-center w-full'>
            {/* ----- Head ------ */}
            <div className='flex flex-col items-center justify-center gap-3'>
                <h2 className='text-primary font-[600] text-lg'>قيمنـا الاساسيـة</h2>
                <h3 className='text-[35px] font-[500] max-md:text-[20px]'>ركائز التميز</h3>
                <p>في هيبنوتيك، نسترشد بأربع قيم أساسية تدفع كل ما نقوم به :</p>
            </div>
            {/* ----- Content ------ */}
            <div className='flex flex-col gap-4 max-md:py-8'>
                <div className=" mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center  mx-auto">
                        {/* Right Features */}
                        <div className="text-right flex flex-col gap-8">
                            <FeatureCard
                                title="الابتكار"
                                description="الريادة في احدث تقنيات الامان الذكي للتفاعل مع حياتك"
                            />
                            <FeatureCard
                                title="التمكين"
                                description="توفير الادوات اللازمة لإنشاء مساحات معيشية مخصصة وفعالة"
                            />
                        </div>
                        {/* Center Image */}
                        <Image
                            src="/about/about-content-2.png"
                            alt="Smart Lock Device"
                            width={400}
                            height={400}
                            className="h-full w-full "
                        />
                        {/* Left Features */}
                        <div className="text-right flex flex-col gap-8">
                            <FeatureCard
                                title="ذكي"
                                description="نقدم منتجات تحاكي مبادئ ذكية وتحويلية لا مثيل لها"
                            />
                            <FeatureCard
                                title="الموثوقية"
                                description="استمتع براحة الموثوقية المطلقة مع حلول سيبريون الرقمية"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Link href='/' className='w-fit text-white py-2 px-4 hover:bg-lightPrimary bg-primary cust-trans rounded-md'>اكتشف منتجاتنـا</Link>
        </div>
    )
}

    ;


const FeatureCard = ({ title, description }) => (
    <div className={`bg-teal-50 hover:bg-teal-200 group p-4 cursor-pointer rounded-lg relative group hover:shadow-sm cust-trans flex flex-col gap-2`}>
        <div className=" w-8 h-8 bg-teal-100 flex items-center justify-center rounded-full">
            <TbStar className='text-primary' />
        </div>
        <h3 className="text-primary font-[600] text-md  group-hover:text-white cust-trans">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white cust-trans">{description}</p>
    </div>
);

// ============ Part Three =============
const Part3 = () => {
    return (
        <div className='pe-4 xl:pe-40 max-md:px-4 max-md:xl:px-40 grid grid-cols-2 gap-8 max-md:gap-16 items-center justify-between max-md:flex flex-col-reverse my-8 py-6 '>
            {/* --------- Image -------- */}
            <div className='h-[400px] max-md:h-[300px] overflow-hidden rounded-e-3xl max-md:rounded-xl max-md:w-full '>
                <Image
                    src='/about/about-content-3.jfif'
                    alt='about content 3'
                    width={500}
                    height={0}
                    className='w-full h-[400px] max-md:h-[300px]'
                />
            </div>
            {/* --------- Content -------- */}
            <div className='flex flex-col gap-3'>
                <h2 className='text-primary font-[600] text-lg'>هدفنـا</h2>
                <h3 className='text-lightGray font-[600] mb-[20px] '>نحن نؤمن بالتقدم</h3>
                <div className='relative ps-[50px] flex flex-col gap-16 py-4 '>
                    {/* Item */}
                    <div className=' flex justify-between items-start gap-5'>
                        <div className='text-primary bg-teal-50 h-[40px] w-[40px] ] z-20 flex items-center justify-center rounded-full absolute start-0'>
                            <FiEye size={20} />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-primary '>إيماننـا</h3>
                            <p className='text-lightGray'>نؤمن بالتقدم العلمي وبالعقول المبتكرة التي تسعى لتحسين جودة الحياة وتعزيز راحة الإنسان والمجتمع، وتكمن مهمتنا بتمكين الناس حول العالم لتحقيق النجاح والعيش برفاهية وأريحية باستخدام أجهزتنا الذكية.</p>
                        </div>
                    </div>
                    {/* Item */}
                    <div className=' flex gap-5'>
                        <div className='text-primary bg-teal-50 h-[40px] w-[40px] ] z-20 flex items-center justify-center rounded-full absolute start-0'>
                            <TfiTarget size={20} />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-primary '>هدفنــا</h3>
                            <p className='text-lightGray'>نسعى لتسخير موارد عالمنا للنهوض بالمجتمع وشركات التكنولوجيا الحديثة. أن ندفع أنفسنا وأقراننا نحو تحقيق مستقبل أكثر شمولاً ومواكبة التطور الحديث.</p>
                        </div>
                    </div>
                    {/* ------- Span Line Column --------- */}
                    <span className='absolute  h-[110%] start-[18px] rounded-full z-10 -top-[5%] border-2'
                        style={{
                            borderImageSource: 'linear-gradient(180deg, rgba(236, 228, 228, 0) 0%, #ECE4E4 26%, #ECE4E4 75.5%, rgba(236, 228, 228, 0) 100%)',
                            borderImageSlice: 1
                        }}>
                    </span>
                </div>
            </div>
        </div>
    )
}

// ============ Part Three =============
const Part4 = () => {
    return (
        <div className=' bg-[url(/about/about-content-4.jpg)] bg-cover bg-center w-full relative h-[500px] mt-12'>
            <div className='w-full h-full bg-black/50'>
                <div className='px-4 xl:px-40 flex flex-col gap-4 w-[70%] max-md:w-full h-full justify-center'>
                    <h2 className='text-primary font-semibold text-[40px] max-md:text-[25px]'>الـوس | Illus</h2>
                    <p className='text-white '>
                        علامة تجارية تركز على توفير حلول ومنتجات الإضاءة المعمارية المتوافقة مع البشر للاستخدام الداخلي والخارجي. نحن شركة رائدة في مجال إضاءة المكاتب الاحترافية ونلتزم بتوفير حلول إضاءة ممتازة لتحسين نوعية حياة الأشخاص، ومساعدة الشركات على تحسين الإنتاجية، وجعل المدن أكثر ملاءمة للعيش.
                    </p>
                    <Link href='/' className='px-4 py-2 bg-primary flex w-fit gap-1 items-center justify-between rounded-md text-white cust-trans hover:bg-lightPrimary'>
                        زيـارة الموقع الإلكتروني
                        <span className='bg-teal-200 rounded-md w-6 h-6 text-white flex relative'>
                            <IoIosArrowRoundUp size={25} className=' absolute -top-2 -right-2 rotate-45 ' />
                        </span>
                    </Link>
                </div>
            </div>
        </div>

    )
}



