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
        className="relative z-10 flex w-full max-w-md flex-col gap-7 rounded-xl border-2 border-white bg-primaryLime p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <header className="flex items-center justify-between">
          <h3 className="text-2xl font-extrabold">Language: {title}</h3>
          <span
            className="cursor-pointer rounded-full bg-red-700 px-2 py-[0.1px] text-xl text-white"
            onClick={onClose}
          >
            X
          </span>
        </header>

        <Separator />

        <div className="rounded-md bg-primaryLime-dark p-4 font-bold text-primaryGray">
          {children}
        </div>

        <Separator />

        <footer className="flex justify-end gap-3">
          {onConfirm && (
            <button
              className="rounded bg-primaryLime-dark px-4 py-2 text-white hover:bg-primaryLime"
              onClick={onClose}
            >
              Confirm
            </button>
          )}

          <button
            className="rounded bg-red-700 px-4 py-2 font-bold tracking-wider text-white hover:bg-red-400"
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
