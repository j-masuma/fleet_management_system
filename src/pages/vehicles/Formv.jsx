import { useForm } from "react-hook-form";

function Formv() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <input type="text" name="model" required {...register("model")} />
      </div>
      <div>
        <label htmlFor="availability">Availability</label>
        <input
          type="text"
          name="availability"
          required
          {...register("availability")}
        />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default Formv;
