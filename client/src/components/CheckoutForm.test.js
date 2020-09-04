import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
	const header = screen.getByText(/checkout form/i);
	expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const addressInput = screen.getByLabelText(/address/i);
	const cityInput = screen.getByLabelText(/city/i);
	const stateInput = screen.getByLabelText(/state/i);
	const zipInput = screen.getByLabelText(/zip/i);

	fireEvent.change(firstNameInput, { target: { value: "Jonathan" } });
	fireEvent.change(lastNameInput, { target: { value: "Raczkowski" } });
	fireEvent.change(addressInput, { target: { value: "Random Street" } });
	fireEvent.change(cityInput, { target: { value: "South Windsor" } });
	fireEvent.change(stateInput, { target: { value: "CT" } });
	fireEvent.change(zipInput, { target: { value: "06074" } });

	const checkoutButton = screen.getByRole("button");
	fireEvent.click(checkoutButton);

	const successMessage = screen.getByTestId("successMessage");
	expect(successMessage).toBeInTheDocument();

	screen.debug();
});
