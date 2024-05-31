import { useForm, SubmitHandler } from "react-hook-form";
type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

function Main() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    reset();
return data
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-[10px] bg-white p-[24px] cursor-pointer text-[#3D3B48]"
      >
        <div className="flex justify-center items-center flex-col gap-[16px]">
          <div className="relative w-full">
            <input
              className="w-full p-[15px] border border-gray-300 max-w-[279px] max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
              style={errors.last_name && { borderColor: "#FF7979" }}
              placeholder="First Name"
              {...register("first_name", { required: true })}
            />

            {errors.first_name && (
              <>
                <p className=" ml-[7rem] mt-[6px]   text-[11px] text-[#FF7979]">
                  First Name cannot be empty
                </p>
                <img
                  className="absolute  right-[53px] top-[15px]"
                  src="images/icon-error.svg"
                  alt="icon-error"
                />
              </>
            )}
          </div>
          <div className="relative w-full">
            <input
              className="w-full p-[15px] border border-gray-300 max-w-[279px] max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
              style={errors.last_name && { borderColor: "#FF7979" }}
              placeholder="Last Name"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && (
              <>
                <p className="ml-[7rem] mt-[6px]  text-[11px] text-[#FF7979]">
                  Last Name cannot be empty
                </p>
                <img
                  className="absolute  right-[53px] top-[15px]"
                  src="images/icon-error.svg"
                  alt="icon-error"
                />
              </>
            )}
          </div>
          <div className="relative w-full">
            <input
              className="w-full p-[15px] border border-gray-300 max-w-[279px] max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
              style={errors.last_name && { borderColor: "#FF7979" }}
              placeholder="Email Address"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <>
                <p className="ml-[7rem] mt-[6px] text-[11px] text-[#FF7979]">
                  Looks like this is not an email
                </p>
                <img
                  className="absolute  right-[53px] top-[15px]"
                  src="images/icon-error.svg"
                  alt="icon-error"
                />
              </>
            )}
          </div>
          <div className="relative w-full">
            <input
              className="w-full p-[15px] border border-gray-300 max-w-[279px] max-h-[56px] placeholder-custom focus:outline-none focus:border-1 focus:border-solid focus:border-[#5E54A4] rounded-[5px]"
              style={errors.last_name && { borderColor: "#FF7979" }}
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <>
                <p className=" ml-[7rem] mt-[6px] text-[11px] text-[#FF7979]">
                  Password cannot be empty
                </p>

                <img
                  className="absolute  right-[53px] top-[15px]"
                  src="images/icon-error.svg"
                  alt="icon-error"
                />
              </>
            )}
          </div>
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
