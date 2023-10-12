function Awards() {
  const awardsList = [
    {
      name: "No awards yet",
      description: "-",
    },
  ];

  return (
    <div className="flex w-full mx-auto items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row my-4">
        <div className="w-full px-4 md:w-2/3 mx-24">
          <h1 className="my-2 text-4xl font-bold text-primary">My Awards</h1>
          <ul className="flex gap-2">
            {awardsList.map((awards) => (
              <li key={awards.name}>
                <div className="flex justify-between py-2 text-lg font-bold">
                  <h2 className="">{awards.name}</h2>
                </div>
                <p className="text-justify text-sm">{awards.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Awards;
