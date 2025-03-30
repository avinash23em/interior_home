import Banners from '../assets/banner2.png'
export default function Banner2(){
    return <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className='space-y-4  flex justify-center flex-col items-center'>
                <h1 className='text-3xl font-bold md:text-left'>Simple Way To Make Stylish Livning Room</h1>
                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, elit,Lorem ipsum dolor sit amet, consectetur</p>
            <div >
                <button className='primary_btn  bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'>Contact Us</button>
            </div>
            </div>
            <div className='flex flex-col justify-center'><img src={Banners} alt="banner2" className='mx-auto'/></div>
        </div>

    </div>
}