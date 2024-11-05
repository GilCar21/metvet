export default function Header() {
    return (
        <header className='w-full'>
            <div className='max-w-[1440px] 2xl:mx-auto mx-[24px] h-[90px] flex justify-between items-center bg-white rounded-lg mt-6'>
                <img src="/logo.svg" alt="logo" className='w-[216px]' />
                <nav className='flex px-6 items-center h-full'>
                    <a href="" className='text-[#ffffff] font-medium bg-[#201836] h-full px-3 flex items-center'>A Metvet</a>
                    <a href="" className='text-[#201836] font-medium h-full px-3 flex items-center'>Industria</a>
                    <a href="" className='text-[#201836] font-medium h-full px-3 flex items-center'>Digital</a>
                    <a href="" className='text-[#201836] font-medium h-full px-3 flex items-center'>Feedback</a>
                    <a href="" className='text-[#201836] font-medium h-full px-3 flex items-center'>Contato</a>
                </nav>
            </div>
        </header>
    )
}