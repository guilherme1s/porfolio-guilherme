import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MessageModal } from "../MessageModal";

interface ContactFormType {
  emailInput: string;
  messageInput: string;
  nameInput: string;
}

export function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormType>();
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const submitForm = (data: ContactFormType) => {
    emailjs
      .send(
        "service_y4t2n5k",
        "template_678hld4",
        {
          from_name: data.nameInput,
          from_email: data.emailInput,
          message: data.messageInput,
        },
        "0GLmhTJrdFwsKhosO"
      )
      .then(() => {
        setModalMessage("Mensagem enviada com sucesso!");
        setOpen(true);
        reset();
      })
      .catch(() => {
        setModalMessage(
          "Ocorreu um erro ao enviar a mensagem. Tente novamente."
        );
        setOpen(true);
      });
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="rounded-xl p-6 border border-gray-300">
      <MessageModal
        message={modalMessage}
        isOpen={open}
        onClose={handleCloseModal}
      />

      <h1 className="text-3xl text-center font-medium mb-6">
        Entre em contato
      </h1>

      <form
        className="flex flex-col gap-6 justify-center"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col">
          <label htmlFor="nameInput">Nome</label>
          <input
            id="nameInput"
            placeholder="Seu nome"
            className="rounded-sm mt-1 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
            required
            {...register("nameInput", { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            placeholder="seu@email.com"
            type="email"
            className="rounded-sm mt-1 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
            required
            {...register("emailInput", { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="messageInput">Mensagem</label>
          <textarea
            id="messageInput"
            placeholder="Sua mensagem"
            className="h-32 resize-none mt-1 rounded-sm p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
            required
            {...register("messageInput", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="p-2 text-white bg-primary cursor-pointer rounded-md font-medium mt-6"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
