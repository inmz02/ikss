
const MainContainer = ({ children }) => {
  return (
    <div className="bg-white w-full md:m-0 md:w-[40rem]  h-full rounded-3xl border-2 border-my-light-grey drop-shadow-my-normal-drop-shadow py-5">
      {children}
    </div>
  );
}

export default MainContainer