import React, { useState } from "react";


const FormTesting = () => {
  const [formData, setFormData] = useState({
    numPieces: "",
    avgSize: "",
    gauge: "",
    gaugeEnd: "",
    articleName: "",
  });

  const [results, setResults] = useState(null); // Store calculated results
  const [errors, setErrors] = useState({});

  // Predefined Chemical Composition
  const Cow_Lining = {
    process_details: [
      { percentage: 100, chemical: "Water" },
      { percentage: 0.5, chemical: "BGW-2" },
      { percentage: 0.1, chemical: "NC" },
      { percentage: 100, chemical: "Water" },
      { percentage: 1, chemical: "BGW-2" },
      { percentage: 1, chemical: "R-400U" },
      { percentage: 0.8, chemical: "Formic Acid" },
      { percentage: 6, chemical: "Chrome" },
      { percentage: 2, chemical: "Syntanee" },
      { percentage: 0.5, chemical: "Sodium Formate" },
      { percentage: 0.2, chemical: "Catalix L" },
      { percentage: 0.9, chemical: "Basifix In" },
    ],
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.numPieces) newErrors.numPieces = "Number of pieces is required";
    if (!formData.avgSize) newErrors.avgSize = "Average size is required";
    if (!formData.gauge) newErrors.gauge = "Gauge is required";
    if (!formData.articleName) newErrors.articleName = "Article name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      CalculateChemicals();
    }
  };

  // Calculation Function
  const CalculateChemicals = () => {
    const numPieces = parseFloat(formData.numPieces);
    const avgSize = parseFloat(formData.avgSize);
    const gaugePercentage = parseFloat(formData.gauge) / 10; // Convert % to decimal

    // Total Square Foot Calculation
    const totalSquareFoot = numPieces * avgSize;

    // Total Weight Calculation
    const totalWeight = totalSquareFoot * gaugePercentage;

    // Calculate Chemical Quantities
    const updatedChemicals = Cow_Lining.process_details.map((item) => ({
      chemical: item.chemical,
      quantity:  item.chemical === 'Water' ? '' : parseFloat(((item.percentage / 100) * totalWeight).toFixed(1)) // Multiply each chemical by total weight
    }));

    setResults({
      totalSquareFoot,
      totalWeight,
      chemicals: updatedChemicals,
    });
  };

  console.log(results,'results')

  return (
    <div className="container vh-100 d-flex align-items-center">
    <div className="row w-100">
      {/* Left Side - Form */}
      <div className="col-md-6">
        <div className="card shadow-lg p-4">
          <h2 className="text-center mb-4">Leather Processing Form</h2>
          <form onSubmit={handleSubmit}>

          <div className="mb-3">
              <label className="form-label">Article Name</label>
              <input
                type="text"
                name="articleName"
                value={formData.articleName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter article name"
              />
              {errors.articleName && <small className="text-danger">{errors.articleName}</small>}
            </div>
            <div className="mb-3">
              <label className="form-label">Number of Pieces</label>
              <input
                type="number"
                name="numPieces"
                value={formData.numPieces}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter number of pieces"
              />
              {errors.numPieces && <small className="text-danger">{errors.numPieces}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Average Size of One Piece</label>
              <input
                type="number"
                step="0.1"
                name="avgSize"
                value={formData.avgSize}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter average size"
              />
              {errors.avgSize && <small className="text-danger">{errors.avgSize}</small>}
            </div>
            <div className="mb-3">
              <label className="form-label">Gauge Start</label>
              <input
                type="number"
                step="0.01"
                name="gaugeEnd"
                value={formData.gaugeEnd}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter gauge end"
              />
            </div>

            <div className="mb-3">
              <label className="form-label"> Gauge End</label>
              <input
                type="number"
                step="0.01"
                name="gauge"
                value={formData.gauge}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter gauge start"
              />
              {errors.gauge && <small className="text-danger">{errors.gauge}</small>}
            </div>

           

            

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Results */}
      <div className="col-md-6">
        {results && (
          <div className="card shadow-lg p-4"
          style={{
            overflowY: "auto",
            maxHeight: "100dvh",
          }}>
            <h4 className="text-center">Calculation Results</h4>
            <table className="table table-bordered mt-3">
              <tbody>
                <tr>
                  <td><strong>Total Square Foot:</strong></td>
                  <td className="text-end">{results.totalSquareFoot}</td>
                </tr>
                <tr>
                  <td><strong>Total Weight:</strong></td>
                  <td className="text-end">{results.totalWeight}</td>
                </tr>
              </tbody>
            </table>

            <h5 className="mt-3">Chemical Quantities:</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Chemical</th>
                  <th className="text-end">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {results.chemicals.map((item, index) => (
                  <tr key={index}>
                    <td>{item.chemical}</td>
                    <td className="text-end">{item.quantity || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  </div>

  );
};

export default FormTesting;
