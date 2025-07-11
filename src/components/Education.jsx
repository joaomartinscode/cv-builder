import { useState } from "react";

export default function Education() {
	const [isEditing, setIsEditing] = useState(true); // Start in editing mode
	const [education, setEducation] = useState({
		// Initialize with empty fields
		degree: "",
		institution: "",
		year: "",
	});

	// Handler functions for form submission and input changes
	function handleChange(e) {
		const { name, value } = e.target;
		setEducation((prevEducation) => ({
			...prevEducation,
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
			<h2>Education</h2>
			{isEditing ? ( // Show form when editing
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="degree"
						placeholder="Degree"
						value={education.degree}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="institution"
						placeholder="Institution"
						value={education.institution}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="year"
						placeholder="Year of Graduation"
						value={education.year}
						onChange={handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			) : (
				<div>
					<p>Degree: {education.degree}</p>
					<p>Institution: {education.institution}</p>
					<p>Year: {education.year}</p>
					<button onClick={handleEdit}>Edit</button>
				</div>
			)}
		</div>
	);
}
