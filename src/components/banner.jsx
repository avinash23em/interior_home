import Banner1 from '../assets/banner.png'
export default function Banner(){
    return <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className='flex flex-col justify-center'><img src={Banner1} alt="banner1" className='mx-auto'/></div>
            <div className='space-y-4  flex justify-center flex-col items-center'>
                <h1 className='text-3xl font-bold'>We Belive that any team makes Project better</h1>
                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, elit,Lorem ipsum dolor sit amet, consectetur</p>
            <div >
                <button className='primary_btn'>Discover Now</button>
            </div>
            </div>
        </div>

    </div>
}