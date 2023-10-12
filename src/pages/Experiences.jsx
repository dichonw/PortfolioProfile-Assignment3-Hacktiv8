function Experiences() {
  const experiencesList = [
    {
      job: "SMKCoding Participants",
      date: "2020",
      company: "SMKCoding KemKominfo",
      description:
        "Creating Mobile Applications using Kotlin, RestApi, Firebase.",
    },
  ];

  return (
    <div className="flex w-full mx-auto items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row my-4">
        <div className="w-full px-4 md:w-2/3 mx-24">
          <h1 className="my-2 text-4xl font-bold text-primary">
            My Experiences
          </h1>
          <ul className="flex gap-2">
            {experiencesList.map((experience) => (
              <li key={experience.job}>
                <div className="flex justify-between py-2 text-lg font-bold">
                  <h2 className="">{experience.job}</h2>
                  <p className=" text-right">({experience.date})</p>
                </div>
                <h4>{experience.company}</h4>
                <p className="text-justify text-sm">{experience.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
