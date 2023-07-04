import React, { useEffect, useState } from 'react';

const AddCarButton = ({ cars }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedAvailability, setSelectedAvailability] = useState('');
  
    const handleButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
   
      setIsModalOpen(false);
    };
  
    return (
      <div className='wrapper_addCar'>
        <button onClick={handleButtonClick}>Добавить авто</button>
  
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>
                &times;
              </span>
  
              <form onSubmit={handleFormSubmit}>
                <div className='wrapper_accordion'>
                    <div className="accordion">
                    <select
                        value={selectedAvailability}
                        onChange={(e) => setSelectedAvailability(e.target.value)}
                    >
                        <option value="">Доступность</option>
                        {cars.map((car) => (
                        <option
                            key={car.id}
                            value={car.availability ? 'Доступно' : 'Недоступно'}
                        >
                            {car.availability ? 'Доступно' : 'Недоступно'}
                        </option>
                        ))}
                    </select>
                    </div>   
                    <div className="accordion">
                    <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        disabled={!selectedAvailability} // Добавляем атрибут disabled
                    >
                        <option value="">Выберите компанию</option>
                        {cars.map((car) => (
                        <option key={car.id} value={car.car}>
                            {car.car}
                        </option>
                        ))}
                    </select>
                    </div>
                    <div className="accordion">
                    <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        disabled={!selectedAvailability} // Добавляем атрибут disabled
                    >
                        <option value="">Выберите модель</option>
                        {cars.map((car) => (
                        <option key={car.id} value={car.car_model}>
                            {car.car_model}
                        </option>
                        ))}
                    </select>
                    </div>    
                    <div className="accordion">
                    <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        disabled={!selectedAvailability} // Добавляем атрибут disabled
                    >
                        <option value="">Выберите VIN</option>
                        {cars.map((car) => (
                        <option key={car.id} value={car.vin}>
                            {car.vin}
                        </option>
                        ))}
                    </select>
                    </div>    
                    <div className="accordion">
                    <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        disabled={!selectedAvailability} // Добавляем атрибут disabled
                    >
                        <option value="">Выберите цвет</option>
                        {cars.map((car) => (
                        <option key={car.id} value={car.car_color}>
                            {car.car_color}
                        </option>
                        ))}
                    </select>
                    </div>
                    <div className="accordion">
                    <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        disabled={!selectedAvailability} // Добавляем атрибут disabled
                    >
                        <option value="">Выберите год</option>
                        {cars.map((car) => (
                        <option key={car.id} value={car.year}>
                            {car.year}
                        </option>
                        ))}
                    </select>
                    </div>
                    <div className="accordion">
                    <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        disabled={!selectedAvailability} // Добавляем атрибут disabled
                    >
                        <option value="">Выберите цену</option>
                        {cars.map((car) => (
                        <option key={car.id} value={car.price}>
                            {car.price}
                        </option>
                        ))}
                    </select>
                    </div>
                </div>
                <button type="submit">Добавить</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
// const AddCarButton = ({ cars }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedCompany, setSelectedCompany] = useState('');
//     const [selectedAvailability, setSelectedAvailability] = useState('');
//     const [availabilityOptions, setAvailabilityOptions] = useState([]);
//     const [companyOptions, setCompanyOptions] = useState([]);
  
//     useEffect(() => {
//       const availabilitySet = new Set();
//       cars.forEach((car) => {
//         availabilitySet.add(car.availability ? 'Доступно' : 'Недоступно');
//       });
//       setAvailabilityOptions(Array.from(availabilitySet));
  
//       const uniqueCompanies = [...new Set(cars.map((car) => car.car))];
//       setCompanyOptions(uniqueCompanies);
//     }, [cars]);
  
//     const handleButtonClick = () => {
//       setIsModalOpen(true);
//     };
  
//     const handleModalClose = () => {
//       setIsModalOpen(false);
//     };
  
//     const handleFormSubmit = (event) => {
//       event.preventDefault();
//       setIsModalOpen(false);
//     };
  
//     return (
//       <div>
//         <button onClick={handleButtonClick}>Добавить авто</button>
  
//         {isModalOpen && (
//           <div className="modal">
//             <div className="modal-content">
//               <span className="close" onClick={handleModalClose}>
//                 &times;
//               </span>
  
//               <form onSubmit={handleFormSubmit}>
//                 <div className="wrapper_accordion">
//                   <div className="accordion">
//                     <select
//                       value={selectedAvailability}
//                       onChange={(e) => setSelectedAvailability(e.target.value)}
//                     >
//                       <option value="">Доступность</option>
//                       {availabilityOptions.map((option) => (
//                         <option key={option} value={option}>
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
  
//                   <div className="accordion">
//                   <select
//                         value={selectedCompany}
//                         onChange={(e) => setSelectedCompany(e.target.value)}
//                         disabled={!selectedAvailability}
//                         >
//                         <option value="">Выберите компанию</option>
//                         {companyOptions.map((car) => (
//                             <option key={car.id} value={car.car}>
//                             {car.car}
//                             </option>
//                         ))}
//                     </select>
//                   </div>

//                     <div className="accordion">
//                     <select
//                         value={selectedCompany}
//                         onChange={(e) => setSelectedCompany(e.target.value)}
//                         disabled={!selectedAvailability} // Добавляем атрибут disabled
//                     >
//                         <option value="">Выберите модель</option>
//                         {cars.map((car) => (
//                         <option key={car.id} value={car.car_model}>
//                             {car.car_model}
//                         </option>
//                         ))}
//                     </select>
//                     </div>    
//                     <div className="accordion">
//                     <select
//                         value={selectedCompany}
//                         onChange={(e) => setSelectedCompany(e.target.value)}
//                         disabled={!selectedAvailability} // Добавляем атрибут disabled
//                     >
//                         <option value="">Выберите VIN</option>
//                         {cars.map((car) => (
//                         <option key={car.id} value={car.vin}>
//                             {car.vin}
//                         </option>
//                         ))}
//                     </select>
//                     </div>    
//                     <div className="accordion">
//                     <select
//                         value={selectedCompany}
//                         onChange={(e) => setSelectedCompany(e.target.value)}
//                         disabled={!selectedAvailability} // Добавляем атрибут disabled
//                     >
//                         <option value="">Выберите цвет</option>
//                         {cars.map((car) => (
//                         <option key={car.id} value={car.car_color}>
//                             {car.car_color}
//                         </option>
//                         ))}
//                     </select>
//                     </div>
//                     <div className="accordion">
//                     <select
//                         value={selectedCompany}
//                         onChange={(e) => setSelectedCompany(e.target.value)}
//                         disabled={!selectedAvailability} // Добавляем атрибут disabled
//                     >
//                         <option value="">Выберите год</option>
//                         {cars.map((car) => (
//                         <option key={car.id} value={car.year}>
//                             {car.year}
//                         </option>
//                         ))}
//                     </select>
//                     </div>
//                     <div className="accordion">
//                     <select
//                         value={selectedCompany}
//                         onChange={(e) => setSelectedCompany(e.target.value)}
//                         disabled={!selectedAvailability} // Добавляем атрибут disabled
//                     >
//                         <option value="">Выберите цену</option>
//                         {cars.map((car) => (
//                         <option key={car.id} value={car.price}>
//                             {car.price}
//                         </option>
//                         ))}
//                     </select>
//                     </div>
//                 </div>
//                 <button type="submit">Добавить</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };
  
  export default AddCarButton;