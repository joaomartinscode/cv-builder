import { useState } from "react";

export default function GeneralInfo() {
	const [isEditing, setIsEditing] = useState(true); // Start in editing mode
	const [info, setInfo] = useState({
		// Initialize with empty fields
		name: "",
		email: "",
		phone: "",
	});

	// Handler functions for form submission and input changes
	function handleChange(e) {
		const { name, value } = e.target;
		setInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		setIsEditing(false);
	}

	function handleEdit() {
		setIsEditing(true);
	}

	// Render the component
	return (
		<div className="section">
			<h2>General Information</h2>
			{isEditing ? ( // Show form when editing
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={info.name}
						onChange={handleChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={info.email}
						onChange={handleChange}
					/>
					<input
						type="tel"
						name="phone"
						placeholder="Phone"
						value={info.phone}
						onChange={handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			) : (
				// Show summary when not editing
				<div>
					<p>
						<strong>Name:</strong> {info.name}
					</p>
					<p>
						<strong>Email:</strong> {info.email}
					</p>
					<p>
						<strong>Phone:</strong> {info.phone}
					</p>
					<button onClick={handleEdit}>Edit</button>
				</div>
			)}
		</div>
	);
}
