export default function News(){
    return <div className="py-14">
      
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <h1 className="text-4xl font-bold font-serif">
          Subsctibe to Our Newsletter
        </h1>
        <p className="text-gray-500 text-sm max-w-[350px] mx-auto">
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </p>
        <div className="flex justify-center !mt-10">
            <input type="text" placeholder="enter your email" className="px-4 py-4 border-[1px] border-black"/>
            <button className="bg-black text-white px-6 py-4">Subscribe</button>
        </div>
      </div>

    </div>
}