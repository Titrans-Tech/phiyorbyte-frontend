import { Fragment, useState } from "react";
import { Description, Dialog, DialogPanel, Transition } from "@headlessui/react";

function AppDialog({
  isOpen = false,
  header = true,
  setIsOpen = () => {},
  onClose,
  panelClassName,
  title = "Title",
  children,
}) {
  function handleDeactivate() {
    // ...
  }

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        open={isOpen}
        onClose={onClose ? onClose : () => setIsOpen(false)}
        className="relative z-[20000]"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        {/* <div className="fixed inset-0 bg-black/30" aria-hidden="true" /> */}
        <Transition
          show={isOpen}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div class="bg-[#000000A6] bg-opacity-50 dark:bg-opacity-80 fixed inset-0" />
        </Transition>

        <div className="fixed inset-0 grid justify-items-center items-center p-4 overflow-y-auto">
          <Transition
            show={isOpen}
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel
              class={` relative bg-white rounded-lg shadow  w-full overflow-hidden/  h-auto  md:h-auto /max-w-[calc(svw_-_10rem)] md:max-w-[405px] ${panelClassName}`}
            >
              {/* <!-- Modal body --> */}
              <Description>{children}</Description>

              {/* <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"></div> */}
            </DialogPanel>
          </Transition>
        </div>
      </Dialog>
    </Transition>
  );
}

export default AppDialog;
