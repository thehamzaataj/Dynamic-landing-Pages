import { Button } from "@material-tailwind/react";  
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import ViewPricing from './ViewPricing.jsx';

const PricingInputForm = () => {
  const [plans, setPlans] = useState([]);
  const [heading, setHeading] = useState("");
  const [subscriptionName, setSubscriptionName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("Month");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [editPlanId, setEditPlanId] = useState(null); // New state for editing

  const addPlan = (newPlan) => {
    setPlans((prevPlans) => [
      ...prevPlans,
      { ...newPlan, id: prevPlans.length + 1 }
    ]);
  };

  const updatePlan = (updatedPlan) => {
    setPlans((prevPlans) => 
      prevPlans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan))
    );
    setEditPlanId(null); // Clear edit state
  };

  const deletePlan = (id) => {
    setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subscriptionName && price) {
      const newPlan = { 
        title: subscriptionName, 
        price: Number(price), 
        description, 
        features: features.split(',').map(feature => feature.trim()),
      };
      if (editPlanId) {
        updatePlan({ ...newPlan, id: editPlanId });
      } else {
        addPlan(newPlan);
      }
      resetForm();
    }
  };

  const resetForm = () => {
    setEditPlanId(null);
    setSubscriptionName("");
    setPrice("");
    setDescription("");
    setFeatures("");
  };

  const handleEdit = (plan) => {
    setEditPlanId(plan.id);
    setSubscriptionName(plan.title);
    setPrice(plan.price);
    setDescription(plan.description);
    setFeatures(plan.features.join(', '));
  };

  return (
    <div>
      <form className="flex gap-9">
        <div className="w-[950px]">
          <label className="block mb-2 text-sm text-slate-800">Main Heading</label>
          <input
            className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2"
            placeholder="Enter Your Heading Here"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="flex mt-7">
          <Button type="submit" className="px-10 bg-[#696cff] hover:bg-[#5b5efa]">
            Save Changes
          </Button>
        </div>
      </form>
      
      <div className="py-5">
        <h5 className="text-sm font-semibold pb-2 border-b-4 border-[#696cff] inline-block text-gray-800">
          Add Your Pricing
        </h5>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-8 ">
          <div className="space-y-4">
            <div className="w-[580px]">
              <label className="block mb-2 text-sm text-slate-800">Subscription Name</label>
              <input
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2"
                placeholder="Enter Your Subscription Name Here"
                value={subscriptionName}
                onChange={(e) => setSubscriptionName(e.target.value)}
              />
            </div>
            <div className="w-[576px]">
              <label className="block mb-2 text-sm text-slate-800">Subscription Price</label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-800 text-sm border border-[#c4c7ca] rounded-md px-5 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow pl-10"
                  placeholder="Enter Your Subscription Price Here"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaDollarSign />
                </div>
              </div>
            </div>
            <div className='w-[576px] py-6'>
              <Select 
                variant="outlined" 
                label="Select Duration"
                value={duration}
                onChange={(value) => setDuration(value)}
              >
                <Option>Week</Option>
                <Option>Month</Option>
                <Option>Year</Option>
              </Select>
            </div>
          </div>
          <div className="flex-col space-y-3">
            <div className="w-[550px]">
              <label className="block mb-2 text-sm text-slate-800">Subscription Description</label>
              <textarea
                rows={1}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2"
                placeholder="Enter Your Subscription Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-[550px]">
              <label className="block mb-2 text-sm text-slate-800">Features</label>
              <textarea
                rows={5}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2"
                placeholder="Enter Features (comma-separated)"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button type="submit" className="px-10 bg-[#696cff] hover:bg-[#5b5efa]">
            {editPlanId ? 'Update Plan' : 'Add Plan'}
          </Button>
        </div>
      </form>
      
      <ViewPricing plans={plans} deletePlan={deletePlan} onEdit={handleEdit} />
    </div>
  );
};

export default PricingInputForm;
