import Image from 'next/image'
import logo from '../../../public/asset/picture/_-removebg-preview(1).png'

const LoadingComponent = () => {
    return (
        <div className="fixed inset-0 bg-transparent backdrop-blur-2xl flex items-center justify-center z-50">
            <div className="p-2 rounded">
                <Image src={logo} className='animate-bounce w-96 rounded-full'  />
            </div>
        </div>
    )
}

export default LoadingComponent