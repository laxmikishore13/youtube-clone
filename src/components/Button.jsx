/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        className="bg-slate-100 rounded-md p-1 m-1 w-20 text-center hover:bg-slate-200"
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
