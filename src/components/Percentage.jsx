import React from "react";

const Percentage = () => {
  const Percentage = [
    {
      ratings: "100%",
      dsc: "average list growth forall paid plans in the first 30 days",
    },
    {
      ratings: "99%",
      dsc: "deliverability rate for 160+ countries",
    },
    {
      ratings: "350k+",
      dsc: "customers worldwide trust us with their email marketing",
    },
    {
      ratings: "24/7",
      dsc: "support from a 5-star rated Customer Success Team",
    },
  ];
  return (
    <section className="flex justify-between px-[10%] my-11">
      {Percentage.map((p) => (
        <div>
          <p className="font-bold text-7xl">{p.ratings}</p>
          <p className="font-semibold text-1xl max-w-[100px]">{p.dsc}</p>
        </div>
      ))}
    </section>
  );
};

export default Percentage;
