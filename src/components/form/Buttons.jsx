import React from "react";
import { LoaderCircle } from "lucide-react";

function Buttons({ isSubmitting, label }) {
  return (
    <button className="bg-emerald-400 text-white px-2 py-1 rounded-md hover:cursor-pointer ">
      {isSubmitting ? (
        <div className="flex gap-1">
          <LoaderCircle className="animate-spin" /> <p>Loading...</p>
        </div>
      ) : (
        <p>{label}</p>
      )}
    </button>
  );
}

export default Buttons;
