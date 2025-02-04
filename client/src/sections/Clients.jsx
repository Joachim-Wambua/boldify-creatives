"use client";
import { clientBrands } from "../constants/data";

const Clients = () => {
  return (
    <div className="relative flex flex-col items-center bg-white py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-black mb-6">
        Trusted by the Best
      </h2>
      <div className="flex space-x-16 overflow-hidden group">
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {clientBrands.map((client) => (
            <img
              key={client.id}
              src={client.img}
              alt={client.name}
              loading="lazy"
              className="max-w-none w-48"
              width={50}
              height={25}
            />
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {clientBrands.map((client) => (
            <img
              key={client.id}
              src={client.img}
              alt={client.name}
              loading="lazy"
              className="max-w-none w-48"
              width={50}
              height={25}
            />
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {clientBrands.map((client) => (
            <img
              key={client.id}
              src={client.img}
              alt={client.name}
              loading="lazy"
              className="max-w-none w-48"
              width={50}
              height={25}
            />
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {clientBrands.map((client) => (
            <img
              key={client.id}
              src={client.img}
              alt={client.name}
              loading="lazy"
              className="max-w-none w-48"
              width={50}
              height={25}
            />
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {clientBrands.map((client) => (
            <img
              key={client.id}
              src={client.img}
              alt={client.name}
              loading="lazy"
              className="max-w-none w-48"
              width={50}
              height={25}
            />
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {clientBrands.map((client) => (
            <img
              key={client.id}
              src={client.img}
              alt={client.name}
              loading="lazy"
              className="max-w-none w-48"
              width={50}
              height={25}
            />
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {clientBrands.map((client) => (
            <img
              key={client.id}
              src={client.img}
              alt={client.name}
              loading="lazy"
              className="max-w-none w-48"
              width={50}
              height={25}
            />
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          {clientBrands.map((client) => (
            <img
              key={client.id}
              src={client.img}
              alt={client.name}
              loading="lazy"
              className="max-w-none w-48"
              width={50}
              height={25}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
