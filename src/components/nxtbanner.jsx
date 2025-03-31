import Banners from '../assets/banner2.png'
export default function Banner2(){
    return <div className='py-14'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div className='space-y-4  flex justify-center flex-col items-center p-4'>
                <h1 className='text-4xl font-bold  font-serif md:text-left'>Simple Way To Make Stylish Livning Room</h1>
                <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, elit,Lorem ipsum dolor sit amet, consectetur</p>
            <div className='flex gap-3'>
                <div className='max-w-[80px] space-y-2'>
                    <p className='text-3xl font-bold font-serif'>15</p>
                    <p className='text-gray-500'>Years of experience</p>
                 </div>
                 <div className='max-w-[80px] space-y-2'>
                    <p className='text-3xl font-bold font-serif'>350</p>
                    <p className='text-gray-500'>Happy Clients</p>
                 </div>
                 <div className='max-w-[80px] space-y-2'>
                    <p className='text-3xl font-bold font-serif'>20</p>
                    <p className='text-gray-500'>Awards</p>
                 </div>
            </div>
            <div >
                <button className='primary_btn  bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'>Contact Us</button>
            </div>
            </div>
            <div className='flex flex-col justify-center'><img src={Banners} alt="banner2" className='mx-auto'/></div>
        </div>

    </div>
}