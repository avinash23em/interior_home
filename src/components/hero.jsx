import Zero from '../assets/hero.png'
export default function Hero(){
    return <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[500px]">
        <div className="flex flex-col justify-center gap-5">
            <h1 className="text-3xl font-bold">SKETCH LUXURY INTERIOR DESIGN</h1>
            <p className="text-sm text-gray-500">Bring your dream to life with one-on-one design help & hand picked
            products tailored to your style, space and budget.</p>
        <div className='space-x-4'>
            <button className='primary_btn bg-black text-white'>Get Started</button>
            <button className='primary_btn'>Contact Us</button>
        </div>
        </div>
    <div className="flex flex-col items-center justify-center">
        <img src={Zero} alt="heroimg" className="w-[300px] object-cover"></img>
    </div>
        </div>
    </div>
}