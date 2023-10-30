
import { SunIcon } from '@heroicons/react/24/outline';
import { Modal } from './dialog';
import { Dialog } from '@headlessui/react';

export const Loading = ({isLoading}:{isLoading:boolean}) => {
  return (
        <Modal
        isOpen={isLoading}
        onClose={() => {
          console.log("close");
        }}
      >
         <div className="py-2">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <SunIcon className="h-6 w-6 text-blue-600 animate-spin" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Chargement...
                    </Dialog.Title>
       </div>
       </div>
      </Modal>
  )
}
