const Shimmer = () => {
  return (
    <div className="m-2">
      <div className="w-72 h-36 m-2 bg-slate-100"></div>
      <div className="flex justify-evenly items-center">
        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
        <div>
          <div className="w-48 h-4 rounded-lg m-2 bg-slate-200"></div>
          <div className="w-48 h-4 rounded-lg m-2 bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
