import Banner1 from '../assets/banner.png'
export default function Banner(){
    return <div className='py-14'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <div className='flex flex-col justify-center'><img src={Banner1} alt="banner1" className='mx-auto'/></div>
            <div className='space-y-4  flex justify-center flex-col items-center'>
                <h1 className='text-4xl font-bold font-serif md:text-left'>We Belive that any team makes Project better</h1>
                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, elit,Lorem ipsum dolor sit amet, consectetur</p>
            <div >
                <button className='primary_btn  bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'>Discover Now</button>
            </div>
            </div>
        </div>

    </div>
}