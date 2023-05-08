import React, { Fragment } from 'react'
import FormInputPosting from '../form/FormInputPosting'
import { RxCross2 } from 'react-icons/rx';
import { usePostingContext } from '../provider/CreatePostinProvider';


const Modal = () => {
    const {state,handleFunction}=usePostingContext()
    const {setImg,setCaption, setOpenModal}=state

  return (
    <Fragment>
        <div className='w-full h-full overscroll-none fixed top-0 right-0 bg-white/30 backdrop-blur-lg'>
            <div className='flex justify-end pr-5'>
                <RxCross2 
                size={30}
                onClick={()=>{
                    setOpenModal(false)
                    setImg(null)
                    setCaption('')
                }}
                />
            </div>
            <div className='flex justify-center'>
                <div className='w-2/3 h-[500px] rounded-2xl bg-white items-center mt-20'>
                    <div>
                        <FormInputPosting/>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Modal