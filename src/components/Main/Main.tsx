function Main() {
  return (
    <main>
      <form className="rounded-[10px]  bg-[#FFF] p-[24px] cursor-pointer">
        <div className="flex justify-center items-center flex-col gap-[16px]">
          <input
            className="w-full p-[15px] border-[1px] solid #DEDEDE max-w-[279px] max-h-[56px] placeholder:text-[#3D3B48]  placeholder:text-[14px] placeholder:font-[600] placeholder:leading-[26px] placeholder:opacity-75 focus:outline-none   focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
            id="firstName"
            name="firstName"
            placeholder="First Name"
          />

          <input
            className="w-full p-[15px] border-[1px] solid #DEDEDE max-w-[279px] max-h-[56px] placeholder:text-[#3D3B48]  placeholder:text-[14px] placeholder:font-[600] placeholder:leading-[26px] placeholder:opacity-75 focus:outline-none   focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
          />

          <input
            className="w-full p-[15px] border-[1px] solid #DEDEDE max-w-[279px] max-h-[56px] placeholder:text-[#3D3B48]  placeholder:text-[14px] placeholder:font-[600] placeholder:leading-[26px] placeholder:opacity-75 focus:outline-none   focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
            id="email"
            name="email"
            placeholder="Email Address"
          />

          <input
            className="w-full p-[15px] border-[1px] solid #DEDEDE max-w-[279px] max-h-[56px] placeholder:text-[#3D3B48]  placeholder:text-[14px] placeholder:font-[600] placeholder:leading-[26px] placeholder:opacity-75 focus:outline-none   focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button
          className="bg-[#38CC8B] text-[15px] p-[15px] font-[600] rounded-[5px] shadow-custom2 w-full max-w-[279px] max-h-[56px] mt-[16px] mb-[8px]"
          type="submit"
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-[11px] text-[#BAB7D4] font-medium leading-[21px] flex flex-col">
          By clicking the button, you are agreeing to our
          <span className="text-[#FF7979] font-bold">Terms and Services</span>
        </p>
      </form>
    </main>
  );
}

export default Main;
