import { useState } from "react";

export default function Experience() {
	const [isEditing, setIsEditing] = useState(true); // Start in editing mode
	const [experience, setExperience] = useState({
		// Initialize with empty fields
		jobTitle: "",
		company: "",
		duration: "",
	});

	// Handler functions for form submission and input changes
	function handleChange(e) {
		const { name, value } = e.target;
		setExperience((prevExperience) => ({
			...prevExperience,
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
			<h2>Experience</h2>
			{isEditing ? ( // Show form when editing
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="jobTitle"
						placeholder="Job Title"
						value={experience.jobTitle}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="company"
						placeholder="Company"
						value={experience.company}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="duration"
						placeholder="Duration"
						value={experience.duration}
						onChange={handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			) : (
				<div>
					<p>
						<strong>Job Title:</strong> {experience.jobTitle}
					</p>
					<p>
						<strong>Company:</strong> {experience.company}
					</p>
					<p>
						<strong>Duration:</strong> {experience.duration}
					</p>
					<button onClick={handleEdit}>Edit</button>
				</div>
			)}
		</div>
	);
}
