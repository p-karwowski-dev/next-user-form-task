"use client";

import { useActionState } from "react";
import { addUserAction } from "../../actions/user/addUserAction";
import Field from "../../components/form/Field";
import Dropdown from "../../components/form/Dropdown";
import { COUNTRY_OPTIONS } from "../../constants/countries";
import { INTEREST_OPTIONS } from "../../constants/interests";

const addUserActionState = {
  success: false,
  message: "",
  errors: null,
};

export default function Page() {
  const [state, formAction, isPending] = useActionState(
    addUserAction,
    addUserActionState
  );

  return (
    <form action={formAction} className="flex flex-col min-w-sm gap-4">
      <Field
        label="Full Name:"
        name="fullName"
        type="text"
        error={state.errors?.fullName}
        defaultValue={state.data?.fullName as string}
      />
      <Field
        label="Age:"
        name="age"
        type="number"
        error={state.errors?.age}
        defaultValue={state.data?.age?.toString()}
      />

      <Dropdown
        label="Country:"
        name="country"
        options={COUNTRY_OPTIONS}
        error={state.errors?.country}
        defaultValue={state.data?.country as string}
      />

      <Dropdown
        label="Interests:"
        name="interests"
        options={INTEREST_OPTIONS}
        error={state.errors?.interests}
        multiple
        defaultValue={state.data?.interests as string[]}
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-200/30 rounded-xl text-white p-2 hover:bg-blue-200/50"
      >
        {isPending ? "Saving..." : "ADD USER"}
      </button>

      {state?.success && (
        <p className="text-green-500">Success! User has been added.</p>
      )}
    </form>
  );
}
