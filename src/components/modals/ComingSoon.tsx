import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { COMING_SOON } from '../../images';


const ComingSoon = () => {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-grayLighter bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="wakalaModalGradient w-[320px] h-[416px] relative inline-block align-bottom rounded-2xl overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
           <div className='flex-col justify-center items-center p-[10px] '>
                  <img className='m-[50px] ml-[40%] h-[87px] w-[90px]' src={COMING_SOON} alt="Coming_soon"/>
                  <div className='body3 text-textPrimary font-bold'>Coming Soon</div>
                    <h1 className=" mt-[30px] text-sm text-textPrimary">
                        Stay put, we are very soon adding cash option.
                    </h1>
              <button
                type="button"
                className="sh1 h-[20px] w-[105px] mt-[60px] inline-flex justify-center px-4 py-2 font-large text-accent1 focus:outline-none"
                onClick={() => setOpen(false)}
                ref={cancelButtonRef}
              >
                Dismiss
              </button>
              </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
  )
}

export default ComingSoon