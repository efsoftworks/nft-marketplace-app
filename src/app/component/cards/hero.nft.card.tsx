interface IHeroNftCard {
    imageUrl: string
}
const HeroNftCard = (props: IHeroNftCard) => {
    return (
        <div className='tf-card-box style-2 rounded-2xl bg-slate-800 relative' style={{
            width: "100%",
            height: "560px"
        }}>
            <div className='relative rounded-lg mb-4 overflow-hidden card-media h-full'>
                <img className='w-full h-full object-cover' src={props.imageUrl} alt="" />
            </div>
            <div className="absolute top-5 left-5 p-0 flex flex-row items-center">
                <div className='w-9 h-9 rounded-full overflow-hidden mr-3 flex-shrink-0'>
                    <img className='h-auto w-full align-middle' src='https://opne9reactnext.vercel.app/assets/images/avatar/avatar-box-01.jpg' alt="Avatar" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs">Posted by:</span>
                    <h6 className="text-sm">Faru Nuri Sönmez</h6>
                </div>
            </div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 opacity-6 bg-emerald-500 hover:opacity-100 transition-opacity">
                <button style={{
                    background:"hsla(0,0%,100%,.3)",
                    backdropFilter:"blur(2px)",
                    color:"#fff"
                }}>
                    <span>Click</span>
                </button>
            </div>
        </div>
    )
}

export default HeroNftCard;
