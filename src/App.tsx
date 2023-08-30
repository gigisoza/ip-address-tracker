import arrow from "./images/icon-arrow.svg";
import background from "./images/pattern-bg-desktop.png";

//https://geo.ipify.org/api/v2/country?apiKey=at_3Viw0mpk1UvBQflfHamoLkQ9kVF85&ipAddress=8.8.8.8

function App() {
  return (
    <>
      <section>
        <div className="absolute -z-10">
          <img
            src={background}
            alt="bg-image"
            className="w-full h-80 object-cover"
          />
        </div>
        <article className="p-8">
          <h1 className="text-2xl lg:text-3xl text-center text-white font-bold mb-8">
            IP Address Tracker
          </h1>
          <form className="flex justify-center max-w-xl mx-auto">
            <input
              type="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search for any IP Address or domain"
              required
              className="py-2 px-4 rounded-l-lg w-full"
            />
            <button
              type="submit"
              className="bg-black py-4 px-4 hover:opacity-60 rounded-r-lg"
            >
              <img src={arrow} alt="arrow" />
            </button>
          </form>
        </article>

        <article className="bg-white rounded-lg shadow p-8 mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl xl:mx-auto text-center md:text-left">
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
              Ip Address
            </h2>
            <p className="font-semibold text-slate-900 md:text-2xl xl:text-3xl">
              192.212.174.101
            </p>
          </div>

          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
              location
            </h2>
            <p className="font-semibold text-slate-900 md:text-2xl xl:text-3xl">
              Brooklyn
            </p>
          </div>

          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
              Timezone
            </h2>
            <p className="font-semibold text-slate-900 md:text-2xl xl:text-3xl">
              UTC -05:00
            </p>
          </div>

          <div>
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
              ISP
            </h2>
            <p className="font-semibold text-slate-900 md:text-2xl xl:text-3xl">
              SpaceX
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
