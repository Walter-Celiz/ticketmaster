/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

export const SingupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name
        <input {...register("name", { required: true })} />
      </label>
      <br />
      <label>
        Age
        <input {...register("age", { required: true })} required />
      </label>
      <br />
      <label>
        Address
        <input {...register("address", { required: true })} required />
      </label>
      <br />
      <label>
        Zipcode
        <input {...register("zipcode", { required: true })} required />
      </label>
      <br />
      <label>
        Phone
        <input {...register("phone", { required: true })} required />
      </label>
      <br />
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
