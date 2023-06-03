export default function Square({ value, clickAction }: any) {
  return (
      <button
        type="button"
        disabled={value != null}
        className="flex border w-16 h-16 justify-center items-center font-extralight"
        onClick={clickAction}
      >
        {value}
      </button>
  );
}
