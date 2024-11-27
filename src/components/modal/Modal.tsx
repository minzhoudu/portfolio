import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Separator } from "./Separator";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  title?: string;
  onClose?: () => void;
  onConfirm?: () => void;
};

const ModalComponent = ({
  children,
  isOpen,
  title,
  onConfirm,
  onClose,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <section
        className="relative z-10 flex max-w-sm flex-col gap-7 rounded-xl bg-primaryGray bg-opacity-50 p-6 shadow-lg backdrop-blur-md md:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-center">
          <h3 className="text-lg font-extrabold text-white md:text-2xl">
            Language: {title}
          </h3>
        </header>

        <Separator />

        <div className="rounded-md bg-white bg-opacity-40 p-4 text-sm font-bold text-primaryGray shadow-md backdrop-blur-md md:text-lg">
          {children}
        </div>

        <Separator />

        <footer className="flex justify-end gap-3">
          {onConfirm && (
            <button
              className="rounded bg-white bg-opacity-40 px-4 py-2 text-white shadow-md backdrop-blur-md hover:bg-opacity-70"
              onClick={onClose}
            >
              Confirm
            </button>
          )}

          <button
            className="bg-opacity-65 rounded bg-red-700 px-4 py-2 font-bold tracking-wider text-white hover:bg-red-500 hover:bg-opacity-70"
            onClick={onClose}
          >
            Close
          </button>
        </footer>
      </section>
    </div>
  );
};

export const Modal = (props: ModalProps) => {
  return createPortal(
    <ModalComponent {...props} />,
    document.getElementById("root")!,
  );
};
