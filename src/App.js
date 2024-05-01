import React, { useState } from "react";
import "./styles.css"; // Import CSS file for styling

const TicketSubmissionForm = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [urgency, setUrgency] = useState("");
  const [membership, setMembership] = useState("");
  const [suggestedSolution, setSuggestedSolution] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform NLP analysis and knowledge base search
    // Update category, urgency, and suggested solution states
    // Handle form submission logic
  };

  return (
    <div className="ticket-form-container">
      <h2>Submit a Support Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>
            <option value="Technical">Technical</option>
            <option value="Account">Account</option>
            <option value="Billing">Billing</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="urgency">Urgency:</label>
          <select
            id="urgency"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            required
          >
            <option value="">Select urgency</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="membership">Membership:</label>
          <select
            id="membership"
            value={membership}
            onChange={(e) => setMembership(e.target.value)}
            required
          >
            <option value="">Select membership</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Premium">Premium</option>
            <option value="Platinum">Platinum</option>
          </select>
        </div>

        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
};

export default TicketSubmissionForm;
