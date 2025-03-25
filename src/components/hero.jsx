import Zero from '../assets/hero.png'
export default function Hero(){
    return <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[500px] gap-10">
        <div className="flex flex-col justify-center gap-7 p-4 md:pr-16 md:text-left pt-20 md:pt-0 py-10">
            <h1 className="text-3xl font-bold">SKETCH LUXURY INTERIOR DESIGN</h1>
            <p className="text-sm text-gray-500">Bring your dream to life with one-on-one design help & hand picked
            products tailored to your style, space and budget.</p>
        <div className='space-x-4'>
            <button className="primary_btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]">Get Started</button>
            <button className='primary_btn'>Contact Us</button>
        </div>
        </div>
    <div className="flex flex-col items-center justify-center">
        <img src={Zero} alt="heroimg" className="w-[80%] md:w-[500px] object-cover md:scale-125"></img>
    </div>
        </div>
    </div>
}