import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const CancelModal = () => {
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
          <div className="wakalaModalGradient w-[327px] h-[252px] p-[20] relative inline-block align-bottom rounded-2xl overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
           <div className='flex-col justify-center items-center p-[10px] m-auto '>
                  <div className='mt-[20%] sh2 w-[100%] h-[80%] text-textPrimary font-bold m-auto'>Do you want to disconnect the wallet?</div>
              <div className='flex justify-evenly items-center'>
              <button
                type="button"
                className="sh1 h-[20px] w-[105px] mt-[60px] inline-flex justify-center px-4 py-2 font-large text-textPrimary focus:outline-none"
                onClick={() => setOpen(false)}
                ref={cancelButtonRef}
              >
                Cancel
              </button>
              <button
                type="button"
                className="sh1 h-[20px] w-[105px] mt-[60px] inline-flex justify-center px-4 py-2 font-large text-error focus:outline-none"
                onClick={() => setOpen(false)}
                ref={cancelButtonRef}
              >
                Continue
              </button>
              </div>
              
              </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
  )
}

export default CancelModal