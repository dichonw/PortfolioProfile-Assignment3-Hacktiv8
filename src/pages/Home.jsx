import Portfolio from "../assets/Portfolio.png";

function Home() {
  return (
    <div className="flex w-full mx-auto items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row my-4">
        <div className="h-80 w-52">
          <img src={Portfolio} alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-4xl">Halo, I'm</p>
          <h1 className="text-5xl font-bold tracking-wide">Muhammad Dicho</h1>
          <p className="text-2xl">
            an{" "}
            <span className="font-bold text-primary tracking-wide">
              information systems student
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
