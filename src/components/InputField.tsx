import { useRef } from "react";

interface InputFieldProps {
  onChange: (value: string) => void;
  onClick: () => void;
}

const InputField = ({ props }: { props: InputFieldProps }) => {
  const { onChange, onClick } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="row">
      <input
        ref={inputRef}
        type="text"
        className="taskInputField"
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="addBtn"
        onClick={() => {
          onClick();
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputField;
