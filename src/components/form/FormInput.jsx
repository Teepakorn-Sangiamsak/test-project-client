import React from "react";

function Formlnput({ register, name, type="text" ,errors }) {
  // || first true && first false
  return (
    <div>
      <input
        placeholder={name}
        type={type}
        {...register(name)}
        className="border w-full border-amber-500 rounded-md p-1 px-4"
      />
    {
      errors[name] && <p className="text-sm text-red-700">{errors[name].message}</p>
    }
    </div>
  );
}

export default Formlnput;
