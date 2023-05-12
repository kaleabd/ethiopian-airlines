const SearchFlight = () => {
  return (
    <div className="flex flex-col gap-4 font-railway">
        <ul className="flex gap-24 text-lg text-primary">
            <li className="font-bold underline">Round Trip</li>
            <li>One-Way</li>
            <li>Multi-city</li>
            <li>Stopover</li>
        </ul>
        <div className="flex gap-5">
            <div className="flex bg-white rounded-[10px] px-4 py-2 gap-2 items-center">
                <div className="inputs">
                    <p className="text-secondary">From</p>
                    <input type="text" className="inputsfield w-24"/>
                </div>
                <div className="inputs">
                    <p className="text-secondary">To</p>
                    <input type="text" className="inputsfield  w-24"/>
                </div>
                <div className="inputs">
                    <p className="text-secondary">Depart</p>
                    <input type="date" name="departure date" className="inputsfield"/>
                </div>
                <div className="inputs">
                    <p className="text-secondary">Return</p>
                    <input type="date" name="departure date" className="inputsfield" />
                </div>
                <div className="flex flex-col gap-1 pr-1 border-r border-r-secondary justify-center">
                    <p className="text-secondary">Passenger</p>
                    <div className="flex gap-1">
                        <input type="number" className="inputsfield  w-24"/>
                        <select name="" id="" className="inputsfield">
                            <option value="">Adult</option>
                            <option value="">Kids</option>
                        </select>
                    </div>
                </div>
                <div className=" flex flex-col gap-2">
                    <p className="text-secondary">Cabin</p>
                    <select name="" id="" className="inputsfield">
                        <option value="">Economy</option>
                        <option value="">Normal</option>
                    </select>
                </div>
            </div>
            <button className="font-bold bg-primary text-white px-8 py-2 rounded-[12px]">
                Show flight
            </button>
        </div>
    </div>
  )
}

export default SearchFlight