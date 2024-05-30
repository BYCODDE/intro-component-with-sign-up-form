import { useState } from "react";

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

function Main() {
  const [data, setData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData({
      ...data,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="rounded-[10px] bg-white p-[24px] cursor-pointer text-[#3D3B48]"
      >
        <div className="flex justify-center items-center flex-col gap-[16px]">
          <input
            className="w-full p-[15px] border border-gray-300 max-w-[279px] max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
            name="first_name"
            value={data.first_name}
            onChange={handleChange}
            placeholder="First Name"
          />

          <input
            className="w-full p-[15px] border border-gray-300 max-w-[279px] max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
            name="last_name"
            value={data.last_name}
            onChange={handleChange}
            placeholder="Last Name"
          />

          <input
            className="w-full p-[15px] border border-gray-300 max-w-[279px] max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email Address"
          />

          <input
            className="w-full p-[15px] border border-gray-300 max-w-[279px] max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
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
