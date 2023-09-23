export default function TextMessageSender({ text }: { text: string }) {
  return (
    <div className="self-start flex text-white my-2 w-[70%] p-4 items-start gap-2 rounded-br-lg rounded-tl-lg rounded-tr-lg bg-blue-500">
      {text}
    </div>
  );
}
