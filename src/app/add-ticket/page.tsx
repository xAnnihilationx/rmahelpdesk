import TicketForm from "../components/TicketForm";

 export default function SubmitTicket()
{
  return (
    <>
      {/* <label className='p-4'>Invoice Number</label>
      <input type ="number" placeholder="Enter your reference number (Invoice number)" className="border border-gray-300 rounded px-4 py-2 mb-4" />
      <label > Item SKU </label>
      <input type ="text" placeholder="Enter your model SKU" className="border border-gray-300 rounded px-4 py-2 mb-4" />
      <label > Item Description</label>
      <input type ="text" placeholder="Enter your model name" className="border border-gray-300 rounded px-4 py-2 mb-4" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button> */}
      <TicketForm />
    </>
  );

} 