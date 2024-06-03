function Header() {
  return (
    <header className="lg:max-w-[525px] max-w-[327px] ">
      <h1 className="lg:leading-[56px]   lg:text-[50px]  text-[28px] font-bold  leading-[36px]">
        Learn to code by watching others
      </h1>
      <p className="  lg:text-[16px]  text-[14px] font-medium leading-[26px] mt-[16px] mb-[64px]">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
      <div className="lg:hidden    block  rounded-[10px] bg-[#5E54A4]  max-h-[88px] font-[400] text-[15px] leading-[26px] p-[18px] shadow-custom  mb-[24px] cursor-pointer">
        <span className="font-bold">Try it free 7 days</span> then <br />
        $20/mo. thereafter
      </div>
    </header>
  );
}

export default Header;
