import React from "react";
import Layout from "../Layout";
import { useFormik } from "formik";
import { AddroomSchema } from "../../../formSchemas/addRoomSchema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function AddRoom() {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: AddroomSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <Layout>
      <div
        className="   mx-auto my-auto h-full w-full text-lg     px-10 py-10
       block"
      >
        <div className=" mb-6  border-b w-fit p-2">
          <h1 className="text-xl font-mono text-green-900 ">Add new rooms</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" grid grid-cols-4 gap-4 text-sm text-green-900"
        >
          <div className="input-block ">
            <label className="input-label font-mono  block ">Name</label>
            <input
              className=" shadow-none "
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-errors">{errors.name}</p>
            ) : null}
          </div>
          <div className="input-block ">
            <label htmlFor="" className="input-label font-mono block">
              Name
            </label>
            <input
              className=" shadow-none"
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-errors">{errors.name}</p>
            ) : null}
          </div>
          <div className="input-block ">
            <label htmlFor="email" className="input-label font-mono block">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-errors">{errors.email}</p>
            ) : null}
          </div>

          <div className="input-block">
            <label htmlFor="password" className="input-label font-mono block">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-errors">{errors.password}</p>
            ) : null}
          </div>

          <div className=" mt-10 w-fit h-24 flex-col relative">
            <div className="  flex items-center justify-center mb-3">
              <h1 className="">Number of Beds</h1>
            </div>
            <div className="h-16  flex justify-center items-center   ">
              <button className="bg-white sm:rounded-full w-11 h-11 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center font-medium">
                <i class="ri-subtract-line"></i>
              </button>

              <h1> 1 </h1>
              <button className="bg-white rounded-full w-11 h-11 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center">
                <i class="ri-add-line"></i>
              </button>
            </div>
          </div>

          <div className=" mt-10 w-fit h-24 flex-col relative">
            <div className="  flex items-center justify-center mb-3">
              <h1 className="">Allowed Guests</h1>
            </div>
            <div className="h-16  flex justify-center items-center   ">
              <button className="bg-white sm:rounded-full w-11 h-11 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center font-medium">
                <i class="ri-subtract-line"></i>
              </button>

              <h1> 1 </h1>
              <button className="bg-white rounded-full w-11 h-11 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center">
                <i class="ri-add-line"></i>
              </button>
            </div>
          </div>
          <div className=" mt-10 w-fit h-24 flex-col relative">
            <div className="  flex items-center justify-center mb-3">
              <h1 className="">Extra bed</h1>
            </div>
            <div className="h-16  flex justify-center items-center   ">
              <button className="bg-white sm:rounded-full w-11 h-11 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center font-medium">
                <i class="ri-subtract-line"></i>
              </button>

              <h1> 1 </h1>
              <button className="bg-white rounded-full w-11 h-11 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center">
                <i class="ri-add-line"></i>
              </button>
            </div>
          </div>
          <div className=" mt-10 w-fit h-24 flex-col relative">
            <div className="  flex items-center justify-center mb-3">
              <h1 className="">Minimum stay days</h1>
            </div>
            <div className="h-16  flex justify-center items-center   ">
              <button className="bg-white sm:rounded-full w-11 h-11 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center font-medium">
                <i class="ri-subtract-line"></i>
              </button>

              <h1> 1 </h1>
              <button className="bg-white rounded-full w-11 h-11 border-2 hover:shadow-xl hover:border-3  hover:duration-300 mx-4 flex items-center justify-center">
                <i class="ri-add-line"></i>
              </button>
            </div>
          </div>

          

        </form>
      </div>
    </Layout>
  );
}

export default AddRoom;
