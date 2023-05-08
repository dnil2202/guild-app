import Modal from "@/components/layouts/Modal"
import LeftScreen from "@/components/pages/home/LeftScreen"
import Main from "@/components/pages/home/Main"
import RightScreen from "@/components/pages/home/RightScreen"
import { usePostingContext } from "@/components/provider/CreatePostinProvider"
import React, { Fragment, useEffect, useState } from "react"


const Home = () => {

    
    const [offset, setOffset] = useState(0);
    const {state,handleFunction}=usePostingContext()
    const {openModal, setOpenModal}=state
    const {onOpenModal}=handleFunction

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
    <Fragment>
        <div className='grid grid-cols-8 gap-4'>
            <div className='col-span-2'>
                <LeftScreen/>
            </div>
        <div className='col-span-4'>
            <Main/>
        </div>
        <div className={`col-span-2 fixed right-4 ${offset>84 ?'top-2':'top-24'} w-1/4`}>
            <RightScreen/>
        </div>

        </div>
        {openModal && <Modal/>}
    </Fragment>
    )
}

export default Home